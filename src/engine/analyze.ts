/**
 * The analysis itself: one pass over the day files of the period, constant work per message, and
 * memory bounded by the number of people, channels and days rather than by the number of messages.
 * Message text is only ever kept for a handful of candidates (the top messages, the first message).
 */

import {
  SCHEMA_VERSION,
  type AnalyzeOptions,
  type AwardId,
  type ChannelStat,
  type EmojiRef,
  type ExportSource,
  type HuddleStats,
  type Moments,
  type Period,
  type Person,
  type PersonStats,
  type Progress,
  type TopMessage,
  type WrappedData,
} from './types';
import { computeAwards } from './awards';
import { computeChannelAwards } from './channel-awards';
import { canonicalEmoji, emojiRef, isStandardEmoji } from './emoji';
import { abortError, EmptyExportError, NotASlackExportError, SlackExportError } from './errors';
import { formatInt, round1, round2, round4 } from './format';
import { sha256Hex } from './hash';
import { choosePersonality } from './personality';
import { findExportRoot, UNKNOWN_WORKSPACE, workspaceNameFromLabel } from './sources';
import { STOPWORDS } from './stopwords';
import { countBits, LAUGH_STYLES, TextAnalyzer } from './text';
import {
  buildZoneTable,
  DAY,
  dayNumberFromIso,
  isoFromDayNumber,
  isValidTimeZone,
  longDate,
  monthName,
  offsetAt,
  weekdayOfDayNumber,
  type ZoneTable,
} from './time';
import { pruneCounts, remapCounts, Vocabulary } from './vocab';

/** Internal limits. The defaults suit real exports; tests shrink them to exercise the pruning. */
export interface Tuning {
  /** Distinct words remembered for the whole team before the rarest are forgotten. */
  maxVocabulary: number;
  /** Distinct words remembered per person before their rarest are forgotten. */
  maxPersonVocabulary: number;
  /** Day files read ahead of the one being processed. */
  readAhead: number;
  /** Report progress every this many files. */
  progressEvery: number;
}

export const DEFAULT_TUNING: Tuning = {
  maxVocabulary: 300_000,
  maxPersonVocabulary: 1500,
  readAhead: 4,
  progressEvery: 50,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- raw export JSON: every field is optional and unverified
type Raw = Record<string, any>;

/** Subtypes that record an event rather than something somebody (or some bot) said. */
const SYSTEM_SUBTYPES = new Set([
  'channel_join', 'channel_leave', 'channel_topic', 'channel_purpose', 'channel_name', 'channel_archive',
  'channel_unarchive', 'channel_posting_permissions', 'channel_convert_to_private', 'channel_convert_to_public',
  'channel_canvas_updated', 'group_join', 'group_leave', 'group_topic', 'group_purpose', 'group_name',
  'group_archive', 'group_unarchive', 'pinned_item', 'unpinned_item', 'bot_add', 'bot_remove', 'bot_enable',
  'bot_disable', 'reminder_add', 'joiner_notification', 'joiner_notification_for_inviter', 'sh_room_created',
  'huddle_thread', 'tombstone', 'reply_broadcast', 'file_comment', 'file_mention', 'message_changed',
  'message_deleted', 'message_replied', 'document_mention', 'ekm_access_denied',
]);

const IMAGE_FILETYPES = new Set(['png', 'jpg', 'jpeg', 'gif', 'webp', 'heic', 'heif', 'bmp', 'tiff', 'svg', 'avif']);
const DAY_FILE = /^\d{4}-\d{2}-\d{2}\.json$/;
const NON_ASCII = /[^\x00-\x7f]/;
const NAME_PART = /\p{L}[\p{L}\p{M}]*/gu;
const SINGLE_WORD = /^\p{L}[\p{L}\p{M}]*$/u;
/** The line old exports (before 2018) put in `text` when a file was uploaded. */
const UPLOAD_NOTICE = /^<@[^>]+> (?:uploaded|shared) a file: <[^>]*>(?: and commented: ([\s\S]*))?$/;

const MONOLOGUE_GAP_SECONDS = 600;
const FIRST_REPLY_WINDOW_SECONDS = 86400;
const MIN_MESSAGES_FOR_DAY_BOOKENDS = 5;
const MAX_HUDDLE_SECONDS = 86400;
const TOP_MESSAGES = 5;
const TOP_MESSAGES_PER_AUTHOR = 2;

interface DayFile {
  path: string;
  /** Day number of the file name's date. */
  day: number;
}

interface UserInfo {
  id: string;
  name: string;
  realName: string | undefined;
  title: string | undefined;
  avatar: string | undefined;
  tz: string | undefined;
  isBot: boolean;
}

interface ChannelAcc {
  index: number;
  id: string;
  name: string;
  /** Unix seconds, 0 when unknown. */
  created: number;
  creator: string | undefined;
  purpose: string | undefined;
  isGeneral: boolean;
  files: DayFile[];
  messages: number;
  replies: number;
  threads: number;
  reactions: number;
  hours: Uint32Array;
}

interface PersonAcc {
  id: string;
  info: UserInfo | undefined;
  /** Name and avatar taken from a message's user_profile, for ids missing from users.json. */
  seenName: string | undefined;
  seenRealName: string | undefined;
  seenAvatar: string | undefined;
  /** The person's own timezone table (the team's when theirs is unknown). */
  zone: ZoneTable;
  messages: number;
  words: number;
  reactionsGiven: number;
  reactionsReceived: number;
  threadsStarted: number;
  replies: number;
  firstReplies: number;
  replyDelays: number[];
  questions: number;
  links: number;
  files: number;
  images: number;
  mentionsMade: number;
  mentionsReceived: number;
  broadcasts: number;
  edits: number;
  shouts: number;
  thanksGiven: number;
  thanksReceived: number;
  laughs: number;
  longestMonologue: number;
  huddleSeconds: number;
  dayStarters: number;
  dayClosers: number;
  channelsCreated: number;
  /** First message in the period: Unix seconds and period day index. */
  firstTs: number;
  firstDay: number;
  /** Messages per hour and weekday on the person's own clock. Allocated with the first message. */
  hours: Uint32Array | null;
  weekdays: Uint32Array | null;
  /** Messages per day of the period, team time. */
  dayCounts: Uint16Array | null;
  /** Days with a message on the person's own calendar; index 0 is the day before the period. */
  ownDays: Uint8Array | null;
  /** Messages per channel index. */
  channels: Map<number, number>;
  /** Uses per emoji id: typed in messages plus reactions given. */
  emoji: Map<number, number>;
  /** Uses per vocabulary id. */
  vocabulary: Map<number, number>;
  vocabularyTotal: number;
}

interface ThreadAcc {
  key: string;
  rootTs: number;
  rootSeen: boolean;
  /** The root is a message from a person or a bot (not a system event such as a deleted-message tombstone). */
  rootIsMessage: boolean;
  rootPerson: PersonAcc | null;
  rootUser: string;
  rootInPeriod: boolean;
  rootDay: number;
  /** Index into the read plan of the file holding the root. */
  rootFile: number;
  replyCount: number;
  replyUsers: number;
  observed: number;
  firstReplyTs: number;
  firstReplyPerson: PersonAcc | null;
  firstReplyInPeriod: boolean;
  parentUser: string;
  participants: PersonAcc[];
}

interface DayBookends {
  count: number;
  firstTs: number;
  first: PersonAcc;
  lastTs: number;
  last: PersonAcc;
}

interface TopCandidate {
  reactions: number;
  ts: number;
  person: PersonAcc;
  channel: ChannelAcc;
  day: number;
  text: string;
  top: { emoji: EmojiRef; count: number }[];
}

interface PlanItem {
  /** 0 = a day file of the period, 1 = general-channel history (join dates only), 2 = first/last file of the export. */
  kind: 0 | 1 | 2;
  channel: ChannelAcc;
  path: string;
}

function str(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function record(value: unknown): Raw {
  return value !== null && typeof value === 'object' ? (value as Raw) : {};
}

function isImageFile(file: Raw): boolean {
  if (typeof file.mimetype === 'string') return file.mimetype.startsWith('image/');
  return typeof file.filetype === 'string' && IMAGE_FILETYPES.has(file.filetype.toLowerCase());
}

/** Returns the messages of a day file in timestamp order (they almost always already are). */
function inTimeOrder(list: unknown[]): unknown[] {
  let previous = -Infinity;
  for (let i = 0; i < list.length; i++) {
    const m = list[i] as Raw | null;
    const ts = m !== null && typeof m === 'object' ? parseFloat(m.ts) : NaN;
    if (ts < previous) {
      const key = (item: unknown): number => {
        const value = item !== null && typeof item === 'object' ? parseFloat((item as Raw).ts) : NaN;
        return Number.isFinite(value) ? value : 0;
      };
      return list
        .map((item, index) => ({ item, index, ts: key(item) }))
        .sort((a, b) => a.ts - b.ts || a.index - b.index)
        .map((entry) => entry.item);
    }
    if (ts > previous) previous = ts;
  }
  return list;
}

function argMax(values: ArrayLike<number>): number {
  let best = 0;
  for (let i = 1; i < values.length; i++) if (values[i]! > values[best]!) best = i;
  return best;
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = sorted.length >> 1;
  return sorted.length % 2 === 1 ? sorted[middle]! : (sorted[middle - 1]! + sorted[middle]!) / 2;
}

/** Stable palette index 0..11 for an id (FNV-1a). */
function colorOf(id: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < id.length; i++) {
    hash ^= id.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0) % 12;
}

function mostCommon(tally: Map<string, number>): string | undefined {
  let best: string | undefined;
  let bestCount = 0;
  for (const [key, count] of tally) {
    if (count > bestCount) {
      best = key;
      bestCount = count;
    }
  }
  return best;
}

/** Removes undefined properties and non-finite numbers so the result is clean JSON. */
function scrub<T>(value: T): T {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) value[i] = scrub(value[i]);
    return value;
  }
  if (value !== null && typeof value === 'object') {
    const object = value as Record<string, unknown>;
    for (const key of Object.keys(object)) {
      const item = object[key];
      if (item === undefined) delete object[key];
      else object[key] = scrub(item);
    }
    return value;
  }
  if (typeof value === 'number' && !Number.isFinite(value)) return 0 as T;
  return value;
}

async function readArray(read: (path: string) => Promise<string>, path: string): Promise<Raw[] | null> {
  try {
    const parsed: unknown = JSON.parse(await read(path));
    return Array.isArray(parsed) ? (parsed.filter((item) => item !== null && typeof item === 'object') as Raw[]) : null;
  } catch {
    return null;
  }
}

/**
 * Reads a Slack export and computes everything the show needs.
 * `tuning` is for tests; callers use `analyzeSlackExport` from index.ts.
 */
export async function analyze(
  source: ExportSource,
  options: AnalyzeOptions = {},
  tuning: Partial<Tuning> = {},
): Promise<WrappedData> {
  const limits: Tuning = { ...DEFAULT_TUNING, ...tuning };
  const signal = options.signal;
  const throwIfAborted = (): void => {
    if (signal?.aborted) throw abortError(signal);
  };
  const progress: Progress = { phase: 'listing', filesTotal: 0, filesDone: 0, messages: 0 };
  const report = (): void => {
    options.onProgress?.({ ...progress });
  };
  const warnings: string[] = [];

  throwIfAborted();
  report();

  // ---------------------------------------------------------------- listing

  // A folder that only wraps the real export (a zip of a folder, a folder dropped one level too high) is looked through.
  const listed = await source.list();
  throwIfAborted();
  const root = findExportRoot(listed);
  const paths = root === '' ? listed : listed.filter((path) => path.startsWith(root)).map((path) => path.slice(root.length));
  const read = (path: string): Promise<string> => source.readText(root + path);

  let hasChannelsFile = false;
  let hasUsersFile = false;
  let hasGroupsFile = false;
  const folders = new Map<string, DayFile[]>();
  for (const path of paths) {
    const slash = path.indexOf('/');
    if (slash < 0) {
      if (path === 'channels.json') hasChannelsFile = true;
      else if (path === 'users.json') hasUsersFile = true;
      else if (path === 'groups.json') hasGroupsFile = true;
      continue;
    }
    if (path.length - slash - 1 !== 15 || !DAY_FILE.test(path.slice(slash + 1))) continue;
    const day = dayNumberFromIso(path.slice(slash + 1, slash + 11));
    if (day === null) continue;
    let folder = path.slice(0, slash);
    if (NON_ASCII.test(folder)) folder = folder.normalize('NFC');
    const files = folders.get(folder);
    if (files === undefined) folders.set(folder, [{ path, day }]);
    else files.push({ path, day });
  }

  if (!hasChannelsFile) {
    throw new NotASlackExportError(
      'This does not look like a Slack export: there is no channels.json in it. Export your workspace from Slack (Settings, then Import/Export Data) and drop that zip here unchanged.',
    );
  }
  const channelRecords = await readArray(read, 'channels.json');
  if (channelRecords === null) {
    throw new NotASlackExportError('The channels.json in this export could not be read, so the channels are unknown.');
  }
  const userRecords = hasUsersFile ? await readArray(read, 'users.json') : null;
  if (userRecords === null) {
    warnings.push('The list of members (users.json) is missing from this export, so names come from the messages themselves.');
  }
  const wantPrivate = options.includePrivateChannels === true;
  const groupRecords = wantPrivate && hasGroupsFile ? ((await readArray(read, 'groups.json')) ?? []) : [];
  throwIfAborted();

  // ------------------------------------------------------------------ users

  const users = new Map<string, UserInfo>();
  const botIds = new Set<string>(['USLACKBOT']);
  const teamIds = new Map<string, number>();
  const zoneTally = new Map<string, number>();
  const blocked = new Set<string>(STOPWORDS);
  const blockNameParts = (value: unknown): void => {
    if (typeof value !== 'string' || value === '') return;
    for (const part of value.toLowerCase().match(NAME_PART) ?? []) if (part.length >= 3) blocked.add(part);
  };
  for (const user of userRecords ?? []) {
    const id = str(user.id);
    if (id === '') continue;
    const profile = record(user.profile);
    const isBot = user.is_bot === true || user.is_workflow_bot === true || id === 'USLACKBOT';
    const realName = str(user.real_name) || str(profile.real_name);
    const tz = str(user.tz);
    users.set(id, {
      id,
      name: str(profile.display_name) || realName || str(user.name) || 'Former member',
      realName: realName || undefined,
      title: str(profile.title) || undefined,
      avatar: str(profile.image_192) || str(profile.image_72) || str(profile.image_48) || undefined,
      tz: tz || undefined,
      isBot,
    });
    const teamId = str(user.team_id) || str(profile.team);
    if (teamId !== '') teamIds.set(teamId, (teamIds.get(teamId) ?? 0) + 1);
    if (isBot) {
      botIds.add(id);
      continue;
    }
    if (user.deleted !== true && tz !== '') zoneTally.set(tz, (zoneTally.get(tz) ?? 0) + 1);
    blockNameParts(user.name);
    blockNameParts(user.real_name);
    blockNameParts(profile.real_name);
    blockNameParts(profile.display_name);
    blockNameParts(profile.first_name);
    blockNameParts(profile.last_name);
  }

  let teamZone = 'UTC';
  for (const [zone] of [...zoneTally].sort((a, b) => b[1] - a[1])) {
    if (isValidTimeZone(zone)) {
      teamZone = zone;
      break;
    }
  }

  // --------------------------------------------------------------- channels

  const channels: ChannelAcc[] = [];
  const channelNames = new Map<string, string>();
  let includesPrivate = false;
  /** Folders of day files that belong to a channel we read. The rest are private channels and direct messages. */
  const claimedFolders = new Set<DayFile[]>();
  const addChannels = (records: Raw[], isPrivate: boolean): void => {
    for (const item of records) {
      const id = str(item.id);
      const name = str(item.name);
      if (id === '' || name === '' || channelNames.has(id)) continue;
      // Older full exports list group direct messages among the private channels. They stay unread.
      if (isPrivate && (item.is_mpim === true || name.startsWith('mpdm-'))) continue;
      const key = NON_ASCII.test(name) ? name.normalize('NFC') : name;
      const files = folders.get(key) ?? folders.get(id) ?? [];
      files.sort((a, b) => a.day - b.day);
      claimedFolders.add(files);
      const created = Number(item.created);
      channels.push({
        index: channels.length,
        id,
        name,
        created: Number.isFinite(created) && created > 0 ? created : 0,
        creator: str(item.creator) || undefined,
        purpose: str(record(item.purpose).value) || undefined,
        isGeneral: !isPrivate && item.is_general === true,
        files,
        messages: 0,
        replies: 0,
        threads: 0,
        reactions: 0,
        hours: new Uint32Array(24),
      });
      channelNames.set(id, name);
      if (isPrivate) includesPrivate = true;
      if (SINGLE_WORD.test(name) && name.length >= 3) blocked.add(name.toLowerCase());
    }
  };
  addChannels(channelRecords, false);
  addChannels(groupRecords, true);
  if (!channels.some((c) => c.isGeneral)) {
    // Older exports do not flag the general channel.
    const general = channels.find((c) => c.name === 'general');
    if (general) general.isGeneral = true;
  }

  let minDay = Infinity;
  let maxDay = -Infinity;
  let totalDayFiles = 0;
  for (const channel of channels) {
    totalDayFiles += channel.files.length;
    if (channel.files.length === 0) continue;
    minDay = Math.min(minDay, channel.files[0]!.day);
    maxDay = Math.max(maxDay, channel.files[channel.files.length - 1]!.day);
  }
  if (totalDayFiles === 0) {
    throw new EmptyExportError(
      wantPrivate || !hasGroupsFile
        ? 'This export has no messages in any channel.'
        : 'This export has no messages in public channels. Its private channels are only read when you choose to include them.',
    );
  }

  // ----------------------------------------------------------------- period

  let startDay: number;
  let endDay: number;
  if (options.period === undefined || options.period === 'auto') {
    // The file names give the latest date. Early January means "last year, please".
    const latest = new Date(maxDay * 86400000);
    let year = latest.getUTCFullYear();
    const earlyJanuary = latest.getUTCMonth() === 0 && latest.getUTCDate() <= 20;
    const januaryFirst = Date.UTC(year, 0, 1) / 86400000;
    if (earlyJanuary && minDay < januaryFirst) year -= 1;
    startDay = Date.UTC(year, 0, 1) / 86400000;
    endDay = year === latest.getUTCFullYear() ? maxDay : Date.UTC(year, 11, 31) / 86400000;
  } else {
    const from = dayNumberFromIso(String(options.period.start));
    const to = dayNumberFromIso(String(options.period.end));
    if (from === null || to === null) {
      throw new SlackExportError('invalid-period', 'The period needs a start and an end date written like 2026-01-31.');
    }
    startDay = Math.min(from, to);
    endDay = Math.max(from, to);
  }
  const days = endDay - startDay + 1;
  const startYear = new Date(startDay * 86400000).getUTCFullYear();
  const endYear = new Date(endDay * 86400000).getUTCFullYear();
  const period: Period = {
    start: isoFromDayNumber(startDay),
    end: isoFromDayNumber(endDay),
    label: startYear === endYear ? String(startYear) : `${startYear}–${endYear}`,
    days,
    timezone: teamZone,
  };
  const dates: string[] = new Array(days);
  const monthOfDay = new Uint8Array(days);
  for (let i = 0; i < days; i++) {
    dates[i] = isoFromDayNumber(startDay + i);
    monthOfDay[i] = new Date((startDay + i) * 86400000).getUTCMonth();
  }

  // ------------------------------------------------------------------ zones

  const tableFirstDay = startDay - 3;
  const tableLastDay = endDay + 3;
  const teamTable = buildZoneTable(teamZone, tableFirstDay, tableLastDay);
  const zoneTables = new Map<string, ZoneTable>([[teamZone, teamTable]]);
  const zoneFor = (zone: string | undefined): ZoneTable => {
    if (zone === undefined) return teamTable;
    let table = zoneTables.get(zone);
    if (table === undefined) {
      table = isValidTimeZone(zone) ? buildZoneTable(zone, tableFirstDay, tableLastDay) : teamTable;
      zoneTables.set(zone, table);
    }
    return table;
  };
  /** Period day index of an instant, in team time. Negative before the period, >= days after it. */
  const teamDayOf = (ts: number): number => Math.floor((ts + offsetAt(teamTable, ts)) / DAY) - startDay;

  // ------------------------------------------------------------ accumulators

  const people = new Map<string, PersonAcc>();
  const personFor = (id: string): PersonAcc => {
    let person = people.get(id);
    if (person === undefined) {
      const info = users.get(id);
      person = {
        id,
        info,
        seenName: undefined,
        seenRealName: undefined,
        seenAvatar: undefined,
        zone: zoneFor(info?.tz),
        messages: 0,
        words: 0,
        reactionsGiven: 0,
        reactionsReceived: 0,
        threadsStarted: 0,
        replies: 0,
        firstReplies: 0,
        replyDelays: [],
        questions: 0,
        links: 0,
        files: 0,
        images: 0,
        mentionsMade: 0,
        mentionsReceived: 0,
        broadcasts: 0,
        edits: 0,
        shouts: 0,
        thanksGiven: 0,
        thanksReceived: 0,
        laughs: 0,
        longestMonologue: 0,
        huddleSeconds: 0,
        dayStarters: 0,
        dayClosers: 0,
        channelsCreated: 0,
        firstTs: Infinity,
        firstDay: 0,
        hours: null,
        weekdays: null,
        dayCounts: null,
        ownDays: null,
        channels: new Map(),
        emoji: new Map(),
        vocabulary: new Map(),
        vocabularyTotal: 0,
      };
      people.set(id, person);
    }
    return person;
  };
  const isBotUser = (id: string, message: Raw): boolean => {
    if (botIds.has(id)) return true;
    return !users.has(id) && record(message.user_profile).is_bot === true;
  };
  /** The author's id when the message is something a person wrote, otherwise undefined. */
  const humanAuthor = (m: Raw): string | undefined => {
    if (m.type !== undefined && m.type !== 'message') return undefined;
    const subtype: unknown = m.subtype;
    if (subtype !== undefined && subtype !== 'thread_broadcast' && subtype !== 'me_message' && subtype !== 'file_share') {
      return undefined;
    }
    const user: unknown = m.user;
    if (typeof user !== 'string' || user === '' || m.bot_id) return undefined;
    if (m.room !== null && typeof m.room === 'object') return undefined;
    return isBotUser(user, m) ? undefined : user;
  };
  const messageText = (m: Raw): string => {
    const raw = typeof m.text === 'string' ? m.text : '';
    if (m.subtype === 'file_share' && raw.charCodeAt(0) === 60) {
      const notice = UPLOAD_NOTICE.exec(raw);
      if (notice) return notice[1] ?? '';
    }
    return raw;
  };

  const analyzer = new TextAnalyzer(
    { userName: (id) => users.get(id)?.name ?? people.get(id)?.seenName, channelName: (id) => channelNames.get(id) },
    blocked,
  );
  /** Text of a message for display; a short note in brackets when it has no words of its own. */
  const shownText = (m: Raw): string => {
    const shown = analyzer.display(messageText(m));
    if (shown !== '') return shown;
    const files: Raw[] = Array.isArray(m.files) ? m.files : m.file ? [m.file] : [];
    if (files.length === 0) return '';
    return files.some((file) => isImageFile(record(file))) ? '(shared an image)' : '(shared a file)';
  };

  const vocabulary = new Vocabulary(limits.maxVocabulary);

  const emojiIds = new Map<string, number>();
  const emojiNames: string[] = [];
  const emojiStandard: boolean[] = [];
  const emojiReactions: number[] = [];
  const emojiTyped: number[] = [];
  const emojiIdFor = (canonical: string): number => {
    let id = emojiIds.get(canonical);
    if (id === undefined) {
      id = emojiNames.length;
      emojiIds.set(canonical, id);
      emojiNames.push(canonical);
      emojiStandard.push(isStandardEmoji(canonical));
      emojiReactions.push(0);
      emojiTyped.push(0);
    }
    return id;
  };
  const reactionIds = new Map<string, number>();
  const reactionEmojiId = (rawName: string): number => {
    let id = reactionIds.get(rawName);
    if (id === undefined) {
      const canonical = canonicalEmoji(rawName);
      id = canonical === null ? -1 : emojiIdFor(canonical);
      reactionIds.set(rawName, id);
    }
    return id;
  };

  const hourGrid = new Uint32Array(days * 24);
  const laughCounts: number[] = new Array(LAUGH_STYLES.length).fill(0);
  let totalMessages = 0;
  let totalWords = 0;
  let totalCharacters = 0;
  let totalReactions = 0;
  let totalThreads = 0;
  let totalReplies = 0;
  let totalFiles = 0;
  let totalLinks = 0;
  let totalMentions = 0;
  let totalBotMessages = 0;
  let totalQuestions = 0;
  let totalExclamations = 0;
  let totalThanks = 0;
  let typedEmoji = 0;

  let messagesScanned = 0;
  let filesScanned = 0;
  let skippedFiles = 0;
  let firstTs = Infinity;
  let lastTs = -Infinity;

  const topMessages: TopCandidate[] = [];
  /** Single best candidates. Held in an object because they are assigned from inside the pass. */
  const best: {
    firstMessage?: { ts: number; person: PersonAcc; channel: ChannelAcc; day: number; text: string };
    longestMessage?: { person: PersonAcc; words: number; channel: ChannelAcc; day: number };
    biggestThread?: { thread: ThreadAcc; channel: ChannelAcc; replies: number };
  } = {};

  let huddleCount = 0;
  let huddleSeconds = 0;
  let longestHuddle = 0;
  const huddleRooms = new Set<string>();

  /** Earliest channel_join in the general channel, by user id. */
  const joins = new Map<string, number>();
  /** People seen in the general channel before the period: they did not join during it. */
  const seenBefore = new Set<string>();

  // -------------------------------------------------------------- read plan

  const plan: PlanItem[] = [];
  for (const channel of channels) {
    for (const file of channel.files) {
      if (file.day >= startDay - 1 && file.day <= endDay + 1) plan.push({ kind: 0, channel, path: file.path });
    }
  }
  const periodFiles = plan.length;
  for (const channel of channels) {
    for (const file of channel.files) {
      if (file.day >= startDay - 1 && file.day <= endDay + 1) continue;
      if (channel.isGeneral) plan.push({ kind: 1, channel, path: file.path });
      else if (file.day === minDay || file.day === maxDay) plan.push({ kind: 2, channel, path: file.path });
    }
  }
  /** For each period file: the range of period days its human messages fall on (-1 = none). */
  const fileMinDay = new Int32Array(periodFiles).fill(-1);
  const fileMaxDay = new Int32Array(periodFiles).fill(-1);

  progress.phase = 'reading';
  progress.filesTotal = plan.length;
  report();

  // ------------------------------------------------------ per-channel state

  let threads = new Map<string, ThreadAcc>();
  let bookends = new Map<number, DayBookends>();
  let runPerson: PersonAcc | null = null;
  let runLength = 0;
  let runLastTs = 0;

  const threadFor = (key: string): ThreadAcc => {
    let thread = threads.get(key);
    if (thread === undefined) {
      thread = {
        key,
        rootTs: parseFloat(key),
        rootSeen: false,
        rootIsMessage: false,
        rootPerson: null,
        rootUser: '',
        rootInPeriod: false,
        rootDay: 0,
        rootFile: -1,
        replyCount: 0,
        replyUsers: 0,
        observed: 0,
        firstReplyTs: Infinity,
        firstReplyPerson: null,
        firstReplyInPeriod: false,
        parentUser: '',
        participants: [],
      };
      threads.set(key, thread);
    }
    return thread;
  };
  const noteRoot = (
    key: string,
    m: Raw,
    person: PersonAcc | null,
    isMessage: boolean,
    inPeriod: boolean,
    day: number,
    fileIndex: number,
  ): ThreadAcc => {
    const thread = threadFor(key);
    thread.rootSeen = true;
    thread.rootIsMessage = isMessage;
    thread.rootPerson = person;
    thread.rootUser = typeof m.user === 'string' ? m.user : '';
    thread.rootInPeriod = inPeriod;
    thread.rootDay = day;
    thread.rootFile = fileIndex;
    const replyCount = Number(m.reply_count);
    thread.replyCount = replyCount > 0 ? Math.floor(replyCount) : Array.isArray(m.replies) ? m.replies.length : 0;
    // People in the thread according to the root: its repliers plus its author.
    const listed = new Set<unknown>(Array.isArray(m.reply_users) ? m.reply_users : []);
    if (thread.rootUser !== '') listed.add(thread.rootUser);
    const replyUsers = Number(m.reply_users_count);
    thread.replyUsers = Math.max(listed.size, replyUsers > 0 ? Math.floor(replyUsers) : 0);
    return thread;
  };

  const finishChannel = (channel: ChannelAcc): void => {
    for (const thread of threads.values()) {
      const replies = Math.max(thread.replyCount, thread.observed);
      const starter = thread.rootPerson;
      if (starter !== null && thread.rootInPeriod && replies > 0) {
        starter.threadsStarted++;
        channel.threads++;
        totalThreads++;
        const biggest = best.biggestThread;
        if (biggest === undefined || replies > biggest.replies || (replies === biggest.replies && thread.rootTs < biggest.thread.rootTs)) {
          best.biggestThread = { thread, channel, replies };
        }
      }
      // First reply: only when we saw the root, so we know nobody replied before our window began.
      const replier = thread.firstReplyPerson;
      if (replier === null || !thread.firstReplyInPeriod || !thread.rootSeen || !thread.rootIsMessage) continue;
      const startedBy = starter !== null ? starter.id : thread.rootUser;
      if (startedBy === replier.id) continue;
      const delay = thread.firstReplyTs - thread.rootTs;
      if (delay < 0 || delay > FIRST_REPLY_WINDOW_SECONDS) continue;
      replier.firstReplies++;
      replier.replyDelays.push(delay);
    }
    for (const day of bookends.values()) {
      if (day.count < MIN_MESSAGES_FOR_DAY_BOOKENDS) continue;
      day.first.dayStarters++;
      day.last.dayClosers++;
    }
    threads = new Map();
    bookends = new Map();
    runPerson = null;
    runLength = 0;
    runLastTs = 0;
  };

  const recordHuddle = (room: Raw): void => {
    const id = str(room.id);
    if (id !== '') {
      if (huddleRooms.has(id)) return;
      huddleRooms.add(id);
    }
    huddleCount++;
    const start = Number(room.date_start);
    const end = Number(room.date_end);
    const seconds = end > start ? Math.min(end - start, MAX_HUDDLE_SECONDS) : 0;
    if (seconds <= 0) return;
    huddleSeconds += seconds;
    if (seconds > longestHuddle) longestHuddle = seconds;
    const history: unknown[] = Array.isArray(room.participant_history) ? room.participant_history : [];
    const present = new Set<string>();
    for (const id of history) if (typeof id === 'string' && id !== '') present.add(id);
    if (present.size === 0 && typeof room.created_by === 'string' && room.created_by !== '') present.add(room.created_by);
    for (const id of present) {
      if (!botIds.has(id)) personFor(id).huddleSeconds += seconds;
    }
  };

  /** Keeps the five most-reacted messages, at most two per author. Returns whether `reactions` at `ts` would get in. */
  const beats = (reactions: number, ts: number, other: TopCandidate): boolean =>
    reactions > other.reactions || (reactions === other.reactions && ts < other.ts);
  const offerTopMessage = (reactions: number, ts: number, person: PersonAcc, channel: ChannelAcc, day: number, m: Raw): void => {
    let sameAuthor = 0;
    let weakest = -1;
    for (let i = 0; i < topMessages.length; i++) {
      if (topMessages[i]!.person !== person) continue;
      sameAuthor++;
      weakest = i; // the list is sorted best first, so the last one found is the weakest
    }
    if (sameAuthor >= TOP_MESSAGES_PER_AUTHOR) {
      if (!beats(reactions, ts, topMessages[weakest]!)) return;
      topMessages.splice(weakest, 1);
    } else if (topMessages.length >= TOP_MESSAGES && !beats(reactions, ts, topMessages[topMessages.length - 1]!)) {
      return;
    }
    const perEmoji = new Map<number, number>();
    for (const reaction of m.reactions as Raw[]) {
      if (reaction === null || typeof reaction !== 'object' || typeof reaction.name !== 'string') continue;
      const id = reactionEmojiId(reaction.name);
      if (id < 0) continue;
      const count = reaction.count > 0 ? Math.floor(reaction.count) : Array.isArray(reaction.users) ? reaction.users.length : 0;
      perEmoji.set(id, (perEmoji.get(id) ?? 0) + count);
    }
    const top = [...perEmoji]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([id, count]) => ({ emoji: emojiRef(emojiNames[id]!), count }));
    topMessages.push({ reactions, ts, person, channel, day, text: shownText(m), top });
    topMessages.sort((a, b) => b.reactions - a.reactions || a.ts - b.ts);
    if (topMessages.length > TOP_MESSAGES) topMessages.length = TOP_MESSAGES;
  };

  // --------------------------------------------------------- the main pass

  const processPeriodFile = (channel: ChannelAcc, fileIndex: number, body: string): void => {
    let list: unknown;
    try {
      list = JSON.parse(body);
    } catch {
      skippedFiles++;
      return;
    }
    if (!Array.isArray(list)) {
      skippedFiles++;
      return;
    }
    filesScanned++;
    const messages = inTimeOrder(list);
    let minHumanDay = -1;
    let maxHumanDay = -1;

    for (let index = 0; index < messages.length; index++) {
      const m = messages[index] as Raw | null;
      if (m === null || typeof m !== 'object') continue;
      messagesScanned++;
      const tsKey: string = typeof m.ts === 'string' ? m.ts : String(m.ts);
      const ts = parseFloat(tsKey);
      if (!(ts > 0)) continue;
      if (ts < firstTs) firstTs = ts;
      if (ts > lastTs) lastTs = ts;
      if (m.type !== undefined && m.type !== 'message') continue;

      const local = ts + offsetAt(teamTable, ts);
      const dayNumber = Math.floor(local / DAY);
      const day = dayNumber - startDay;
      const inPeriod = day >= 0 && day < days;
      const subtype: string | undefined = typeof m.subtype === 'string' ? m.subtype : undefined;
      const threadKey: string | undefined = m.thread_ts === undefined || m.thread_ts === null ? undefined : String(m.thread_ts);
      const isRoot = threadKey === tsKey;
      const isReply = threadKey !== undefined && !isRoot;

      // Huddles: the export gives them a `room`; newer exports no subtype at all.
      const room: unknown = m.room;
      if (room !== null && typeof room === 'object') {
        const call = room as Raw;
        if (subtype === 'huddle_thread' || call.call_family === 'huddle' || (subtype === undefined && call.call_family === undefined)) {
          if (inPeriod) recordHuddle(call);
        }
        if (isRoot && threadKey !== undefined) noteRoot(threadKey, m, null, false, inPeriod, day, fileIndex);
        continue;
      }

      const author = humanAuthor(m);
      if (author === undefined) {
        // A bot's message, or a system event.
        const user: unknown = m.user;
        if (subtype === 'channel_join') {
          if (channel.isGeneral && typeof user === 'string' && user !== '') {
            const known = joins.get(user);
            if (known === undefined || ts < known) joins.set(user, ts);
            if (day < 0) seenBefore.add(user);
          }
          continue;
        }
        const fromBot =
          (subtype === undefined || !SYSTEM_SUBTYPES.has(subtype)) &&
          (Boolean(m.bot_id) || subtype === 'bot_message' || (typeof user === 'string' && isBotUser(user, m)));
        if (isRoot && threadKey !== undefined) noteRoot(threadKey, m, null, fromBot, inPeriod, day, fileIndex);
        else if (isReply && fromBot) threadFor(threadKey!).observed++;
        if (fromBot && inPeriod) {
          totalBotMessages++;
          if (!isReply) runPerson = null;
        }
        continue;
      }

      const person = personFor(author);
      if (person.info === undefined && person.seenName === undefined) {
        const profile = record(m.user_profile);
        const seen = str(profile.display_name) || str(profile.real_name) || str(profile.name);
        if (seen !== '') {
          person.seenName = seen;
          person.seenRealName = str(profile.real_name) || undefined;
          person.seenAvatar = str(profile.image_72) || undefined;
        }
      }

      let thread: ThreadAcc | undefined;
      if (isRoot) {
        thread = noteRoot(threadKey!, m, person, true, inPeriod, day, fileIndex);
      } else if (isReply) {
        thread = threadFor(threadKey!);
        thread.observed++;
        if (thread.parentUser === '' && typeof m.parent_user_id === 'string') thread.parentUser = m.parent_user_id;
        if (ts < thread.firstReplyTs) {
          thread.firstReplyTs = ts;
          thread.firstReplyPerson = person;
          thread.firstReplyInPeriod = inPeriod;
        }
        if (thread.participants.indexOf(person) < 0) thread.participants.push(person);
      }

      if (!inPeriod) {
        if (day < 0 && channel.isGeneral) seenBefore.add(author);
        continue;
      }

      // ---- a message written by a person, inside the period

      const hour = Math.floor((local - dayNumber * DAY) / 3600);
      if (person.hours === null) {
        person.hours = new Uint32Array(24);
        person.weekdays = new Uint32Array(7);
        person.dayCounts = new Uint16Array(days);
        person.ownDays = new Uint8Array(days + 2);
      }
      totalMessages++;
      person.messages++;
      channel.messages++;
      channel.hours[hour]!++;
      hourGrid[day * 24 + hour]!++;
      if (person.dayCounts![day]! < 65535) person.dayCounts![day]!++;
      if (ts < person.firstTs) {
        person.firstTs = ts;
        person.firstDay = day;
      }
      person.channels.set(channel.index, (person.channels.get(channel.index) ?? 0) + 1);
      if (minHumanDay < 0 || day < minHumanDay) minHumanDay = day;
      if (day > maxHumanDay) maxHumanDay = day;

      // The author's own clock, for night owls, early birds, weekends and streaks.
      if (person.zone === teamTable) {
        person.hours[hour]!++;
        person.weekdays![(dayNumber + 3) % 7]!++;
        person.ownDays![day + 1] = 1;
      } else {
        const own = ts + offsetAt(person.zone, ts);
        const ownDayNumber = Math.floor(own / DAY);
        person.hours[Math.floor((own - ownDayNumber * DAY) / 3600)]!++;
        person.weekdays![(ownDayNumber + 3) % 7]!++;
        const ownDay = ownDayNumber - startDay;
        if (ownDay >= -1 && ownDay <= days) person.ownDays![ownDay + 1] = 1;
      }

      // First and last word of the day in this channel.
      let bookend = bookends.get(day);
      if (bookend === undefined) {
        bookend = { count: 0, firstTs: ts, first: person, lastTs: ts, last: person };
        bookends.set(day, bookend);
      }
      bookend.count++;
      if (ts < bookend.firstTs) {
        bookend.firstTs = ts;
        bookend.first = person;
      }
      if (ts >= bookend.lastTs) {
        bookend.lastTs = ts;
        bookend.last = person;
      }

      // Monologues: top-level messages in a row from one person, less than ten minutes apart.
      if (!isReply) {
        if (runPerson === person && ts - runLastTs < MONOLOGUE_GAP_SECONDS) runLength++;
        else runLength = 1;
        runPerson = person;
        runLastTs = ts;
        if (runLength > person.longestMonologue) person.longestMonologue = runLength;
      } else if (subtype === 'thread_broadcast' && runPerson !== person) {
        runPerson = null;
      }

      // Text.
      const facts = analyzer.analyze(messageText(m));
      totalWords += facts.words;
      totalCharacters += facts.characters;
      person.words += facts.words;
      if (facts.question) {
        person.questions++;
        totalQuestions++;
      }
      if (facts.exclaim) totalExclamations++;
      if (facts.shout) person.shouts++;
      if (facts.links > 0) {
        person.links += facts.links;
        totalLinks += facts.links;
      }
      person.broadcasts += facts.broadcasts;
      let thanked = false;
      if (facts.thanks) {
        person.thanksGiven++;
        totalThanks++;
      }
      for (let i = 0; i < facts.mentions.length; i++) {
        const mentioned = facts.mentions[i]!;
        if (mentioned === author || botIds.has(mentioned)) continue;
        const target = personFor(mentioned);
        person.mentionsMade++;
        target.mentionsReceived++;
        totalMentions++;
        if (facts.thanks) {
          target.thanksReceived++;
          thanked = true;
        }
      }
      if (facts.thanks && !thanked && thread !== undefined && isReply) {
        // Thanks in a thread with nobody named go to whoever started the thread.
        const starter = thread.rootPerson !== null ? thread.rootPerson.id : thread.rootSeen && thread.rootIsMessage ? thread.rootUser : thread.parentUser;
        if (starter !== '' && starter !== author && !botIds.has(starter)) personFor(starter).thanksReceived++;
      }
      if (facts.laughs !== 0) {
        person.laughs += countBits(facts.laughs);
        for (let style = 0; style < LAUGH_STYLES.length; style++) {
          if (facts.laughs & (1 << style)) laughCounts[style]!++;
        }
      }
      for (let i = 0; i < facts.emoji.length; i++) {
        const id = emojiIdFor(facts.emoji[i]!);
        emojiTyped[id]!++;
        typedEmoji++;
        person.emoji.set(id, (person.emoji.get(id) ?? 0) + 1);
      }
      if (facts.tokens.length > 0) {
        const own = person.vocabulary;
        for (let i = 0; i < facts.tokens.length; i++) {
          const id = vocabulary.add(facts.tokens[i]!);
          own.set(id, (own.get(id) ?? 0) + 1);
        }
        person.vocabularyTotal += facts.tokens.length;
        if (own.size > limits.maxPersonVocabulary) pruneCounts(own, limits.maxPersonVocabulary);
        if (vocabulary.full) {
          const remap = vocabulary.compact();
          for (const other of people.values()) {
            if (other.vocabulary.size > 0) other.vocabulary = remapCounts(other.vocabulary, remap);
          }
        }
      }
      if (facts.words > 0 && (best.longestMessage === undefined || facts.words > best.longestMessage.words)) {
        best.longestMessage = { person, words: facts.words, channel, day };
      }
      if (best.firstMessage === undefined || ts < best.firstMessage.ts) {
        best.firstMessage = { ts, person, channel, day, text: shownText(m) };
      }

      // Threads.
      if (isReply) {
        person.replies++;
        channel.replies++;
        totalReplies++;
      }

      // Files and edits.
      if (Array.isArray(m.files)) {
        for (const file of m.files as Raw[]) {
          if (file === null || typeof file !== 'object' || file.mode === 'tombstone') continue;
          person.files++;
          totalFiles++;
          if (isImageFile(file)) person.images++;
        }
      } else if (m.file !== null && typeof m.file === 'object') {
        person.files++;
        totalFiles++;
        if (isImageFile(m.file as Raw)) person.images++;
      }
      if (m.edited !== undefined && m.edited !== null) person.edits++;

      // Reactions.
      const reactions: unknown = m.reactions;
      if (Array.isArray(reactions) && reactions.length > 0) {
        let received = 0;
        let own = 0;
        for (const reaction of reactions as Raw[]) {
          if (reaction === null || typeof reaction !== 'object' || typeof reaction.name !== 'string') continue;
          const id = reactionEmojiId(reaction.name);
          if (id < 0) continue;
          const givers: unknown[] = Array.isArray(reaction.users) ? reaction.users : [];
          const count = reaction.count > 0 ? Math.floor(reaction.count) : givers.length;
          if (!(count > 0)) continue;
          received += count;
          emojiReactions[id]! += count;
          for (const giver of givers) {
            if (typeof giver !== 'string' || botIds.has(giver)) continue;
            if (giver === author) own++;
            const from = giver === author ? person : personFor(giver);
            from.reactionsGiven++;
            from.emoji.set(id, (from.emoji.get(id) ?? 0) + 1);
          }
        }
        if (received > 0) {
          totalReactions += received;
          channel.reactions += received;
          person.reactionsReceived += received - own;
          offerTopMessage(received, ts, person, channel, day, m);
        }
      }
    }

    fileMinDay[fileIndex] = minHumanDay;
    fileMaxDay[fileIndex] = maxHumanDay;
  };

  /** A general-channel file outside the period: only join events and who was already around. */
  const processHistoryFile = (body: string, joinsToo: boolean): void => {
    let list: unknown;
    try {
      list = JSON.parse(body);
    } catch {
      skippedFiles++;
      return;
    }
    if (!Array.isArray(list)) {
      skippedFiles++;
      return;
    }
    filesScanned++;
    for (const m of list as (Raw | null)[]) {
      if (m === null || typeof m !== 'object') continue;
      messagesScanned++;
      const ts = parseFloat(m.ts);
      if (!(ts > 0)) continue;
      if (ts < firstTs) firstTs = ts;
      if (ts > lastTs) lastTs = ts;
      if (!joinsToo || typeof m.user !== 'string' || m.user === '') continue;
      if (m.subtype === 'channel_join') {
        const known = joins.get(m.user);
        if (known === undefined || ts < known) joins.set(m.user, ts);
      }
      if (teamDayOf(ts) < 0) seenBefore.add(m.user);
    }
  };

  // Day files are read a few ahead of the one being processed, and handled strictly in order.
  const inFlight: Promise<string | null>[] = [];
  let requested = 0;
  let current: ChannelAcc | undefined;
  for (let index = 0; index < plan.length; index++) {
    throwIfAborted();
    while (requested < plan.length && requested - index < limits.readAhead) {
      inFlight.push(read(plan[requested]!.path).then((body) => body, () => null));
      requested++;
    }
    const item = plan[index]!;
    const body = await inFlight.shift()!;
    if (item.kind === 0 && current !== item.channel) {
      if (current !== undefined) finishChannel(current);
      current = item.channel;
    } else if (item.kind !== 0 && current !== undefined) {
      finishChannel(current);
      current = undefined;
    }
    if (body === null) skippedFiles++;
    else if (item.kind === 0) processPeriodFile(item.channel, index, body);
    else processHistoryFile(body, item.kind === 1);
    progress.filesDone = index + 1;
    progress.messages = messagesScanned;
    progress.current = item.channel.name;
    if ((index + 1) % limits.progressEvery === 0) report();
  }
  if (current !== undefined) finishChannel(current);
  throwIfAborted();

  if (plan.length > 0 && skippedFiles >= plan.length) {
    throw new EmptyExportError('None of the day files in this export could be read.');
  }
  if (totalMessages === 0) {
    throw new EmptyExportError(
      `No messages from people were found between ${longDate(startDay)} and ${longDate(endDay)}.`,
    );
  }

  progress.phase = 'computing';
  delete progress.current;
  report();

  // ------------------------------------------------------- team-level time

  const byDayCounts = new Uint32Array(days);
  const byHour: number[] = new Array(24).fill(0);
  const byWeekday: number[] = new Array(7).fill(0);
  const byMonth: number[] = new Array(12).fill(0);
  const heatmap: number[][] = Array.from({ length: 7 }, () => new Array<number>(24).fill(0));
  let recordHourIndex = 0;
  for (let day = 0; day < days; day++) {
    const weekday = weekdayOfDayNumber(startDay + day);
    let dayTotal = 0;
    for (let hour = 0; hour < 24; hour++) {
      const count = hourGrid[day * 24 + hour]!;
      if (count === 0) continue;
      dayTotal += count;
      byHour[hour]! += count;
      heatmap[weekday]![hour]! += count;
      if (count > hourGrid[recordHourIndex]!) recordHourIndex = day * 24 + hour;
    }
    byDayCounts[day] = dayTotal;
    byWeekday[weekday]! += dayTotal;
    byMonth[monthOfDay[day]!]! += dayTotal;
  }
  let activeDays = 0;
  for (let day = 0; day < days; day++) if (byDayCounts[day]! > 0) activeDays++;
  const busiestDay = argMax(byDayCounts);
  let quietestWeekday = 0;
  for (let weekday = 1; weekday < 7; weekday++) {
    if (byWeekday[weekday]! <= byWeekday[quietestWeekday]!) quietestWeekday = weekday;
  }

  // ------------------------------------------------------------- channels

  const channelPeople: Map<PersonAcc, number>[] = channels.map(() => new Map());
  const authors = [...people.values()].filter((p) => p.messages > 0);
  for (const person of authors) {
    for (const [channelIndex, count] of person.channels) channelPeople[channelIndex]!.set(person, count);
  }
  const authorIds = new Set(authors.map((p) => p.id));
  const createdDay = new Map<string, number>();
  let newChannels = 0;
  for (const channel of channels) {
    if (channel.created <= 0) continue;
    const day = teamDayOf(channel.created);
    createdDay.set(channel.id, day + startDay);
    if (day < 0 || day >= days) continue;
    newChannels++;
    if (channel.creator !== undefined) {
      const creator = people.get(channel.creator);
      if (creator !== undefined) creator.channelsCreated++;
    }
  }
  const createdInPeriod = (channel: ChannelAcc): boolean => {
    const day = createdDay.get(channel.id);
    return day !== undefined && day >= startDay && day <= endDay;
  };

  const channelStats: ChannelStat[] = channels
    .filter((channel) => channel.messages > 0)
    .sort((a, b) => b.messages - a.messages || (a.name < b.name ? -1 : 1))
    .map((channel) => {
      const posters = [...channelPeople[channel.index]!].sort((a, b) => b[1] - a[1] || b[0].messages - a[0].messages);
      const night = channel.hours[22]! + channel.hours[23]! + channel.hours[0]! + channel.hours[1]! + channel.hours[2]! + channel.hours[3]! + channel.hours[4]!;
      const stat: ChannelStat = {
        id: channel.id,
        name: channel.name,
        messages: channel.messages,
        people: posters.length,
        threads: channel.threads,
        reactions: channel.reactions,
        createdInPeriod: createdInPeriod(channel),
        topPeople: posters.slice(0, 3).map(([person, messages]) => ({ id: person.id, messages })),
        peakHour: argMax(channel.hours),
        nightShare: round4(night / channel.messages),
        threadShare: round4(channel.replies / channel.messages),
        reactionsPerMessage: round2(channel.reactions / channel.messages),
      };
      if (channel.creator !== undefined && authorIds.has(channel.creator)) stat.creator = channel.creator;
      if (channel.purpose !== undefined) stat.purpose = channel.purpose;
      return stat;
    });

  // --------------------------------------------------------------- people

  const hasEarlierFiles = minDay < startDay;
  /** The day the data starts, when that is inside the period: people there from the start did not "join". */
  const firstDataDay = Number.isFinite(firstTs) ? Math.max(0, teamDayOf(firstTs)) : 0;
  const arrival = new Map<string, string>();
  const nameOf = (person: PersonAcc): string => person.info?.name ?? person.seenName ?? 'Former member';

  authors.sort(
    (a, b) => b.messages - a.messages || b.words - a.words || (nameOf(a) < nameOf(b) ? -1 : nameOf(a) > nameOf(b) ? 1 : a.id < b.id ? -1 : 1),
  );
  const othersWords = (person: PersonAcc): number => vocabulary.total - person.vocabularyTotal;
  let nightTotal = 0;
  let earlyTotal = 0;

  const personList: Person[] = authors.map((acc, index) => {
    const hours = acc.hours!;
    const weekdays = acc.weekdays!;
    const dayCounts = acc.dayCounts!;
    const ownDays = acc.ownDays!;
    const night = hours[22]! + hours[23]! + hours[0]! + hours[1]! + hours[2]! + hours[3]! + hours[4]!;
    const early = hours[5]! + hours[6]! + hours[7]!;
    nightTotal += night;
    earlyTotal += early;

    let active = 0;
    for (let day = 0; day < days; day++) if (dayCounts[day]! > 0) active++;
    const busiest = argMax(dayCounts);

    // Weekday streak on the person's own calendar: weekends neither break it nor add to it.
    let streak = 0;
    let longestStreak = 0;
    for (let i = 0; i < ownDays.length; i++) {
      if (weekdayOfDayNumber(startDay + i - 1) >= 5) continue;
      if (ownDays[i] === 1) {
        streak++;
        if (streak > longestStreak) longestStreak = streak;
      } else {
        streak = 0;
      }
    }

    const perChannel = [...acc.channels].sort((a, b) => b[1] - a[1]);
    let channelsActive = 0;
    for (const [, count] of perChannel) if (count >= 3) channelsActive++;

    let customEmojiUses = 0;
    for (const [id, count] of acc.emoji) if (!emojiStandard[id]) customEmojiUses += count;
    const topEmoji = [...acc.emoji]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id, count]) => ({ emoji: emojiRef(emojiNames[id]!), count }));

    // Later people with the same count do not count as out-messaged.
    let fewer = 0;
    for (let j = authors.length - 1; j > index && authors[j]!.messages < acc.messages; j--) fewer++;
    const percentile = authors.length <= 1 ? 100 : Math.round((fewer / (authors.length - 1)) * 100);

    // When did they arrive? A join event in the general channel if there is one, otherwise their first message.
    const joinTs = joins.get(acc.id);
    const joinDay = joinTs === undefined ? undefined : teamDayOf(joinTs);
    let joinedInPeriod = false;
    if (!seenBefore.has(acc.id)) {
      if (joinDay !== undefined && joinDay <= acc.firstDay) {
        joinedInPeriod = joinDay - firstDataDay > 30 && joinDay < days;
        if (joinedInPeriod) arrival.set(acc.id, `joined in ${monthName(monthOfDay[joinDay]!)}`);
      } else if (hasEarlierFiles && acc.firstDay > 60) {
        joinedInPeriod = true;
        arrival.set(acc.id, `first showed up in ${monthName(monthOfDay[acc.firstDay]!)}`);
      }
    }

    const stats: PersonStats = {
      messages: acc.messages,
      words: acc.words,
      avgWords: round1(acc.words / acc.messages),
      reactionsGiven: acc.reactionsGiven,
      reactionsReceived: acc.reactionsReceived,
      threadsStarted: acc.threadsStarted,
      replies: acc.replies,
      firstReplies: acc.firstReplies,
      questions: acc.questions,
      links: acc.links,
      files: acc.files,
      images: acc.images,
      mentionsMade: acc.mentionsMade,
      mentionsReceived: acc.mentionsReceived,
      broadcasts: acc.broadcasts,
      edits: acc.edits,
      shouts: acc.shouts,
      nightMessages: night,
      earlyMessages: early,
      weekendMessages: weekdays[5]! + weekdays[6]!,
      activeDays: active,
      longestStreak,
      channelsActive,
      channelsCreated: acc.channelsCreated,
      distinctEmoji: acc.emoji.size,
      customEmojiUses,
      thanksGiven: acc.thanksGiven,
      thanksReceived: acc.thanksReceived,
      laughs: acc.laughs,
      longestMonologue: acc.longestMonologue,
      huddleMinutes: Math.round(acc.huddleSeconds / 60),
      dayStarters: acc.dayStarters,
      dayClosers: acc.dayClosers,
    };
    if (acc.replyDelays.length > 0) stats.medianReplySeconds = Math.round(median(acc.replyDelays));

    const person: Person = {
      id: acc.id,
      name: nameOf(acc),
      color: colorOf(acc.id),
      rank: index + 1,
      percentile,
      stats,
      topChannels: perChannel.slice(0, 3).map(([channelIndex, messages]) => {
        const channel = channels[channelIndex]!;
        return { id: channel.id, name: channel.name, messages };
      }),
      topEmoji,
      peakHour: argMax(hours),
      peakWeekday: argMax(weekdays),
      busiestDay: { date: dates[busiest]!, messages: dayCounts[busiest]! },
      firstMessageDate: dates[acc.firstDay]!,
      joinedInPeriod,
      awards: [],
    };
    const realName = acc.info?.realName ?? acc.seenRealName;
    if (realName !== undefined) person.realName = realName;
    if (acc.info?.title !== undefined) person.title = acc.info.title;
    const avatar = acc.info?.avatar ?? acc.seenAvatar;
    if (avatar !== undefined) person.avatar = avatar;
    // A valid timezone has a table of its own (or is the team's).
    if (acc.info?.tz !== undefined && (acc.info.tz === teamZone || acc.zone !== teamTable)) person.tz = acc.info.tz;

    // Signature word: used at least 12 times, and at least four times as often as everyone else uses it.
    const others = othersWords(acc);
    if (others >= 50 && acc.vocabularyTotal > 0) {
      let best: { word: string; count: number; lift: number } | undefined;
      for (const [id, count] of acc.vocabulary) {
        if (count < 12) continue;
        const elsewhere = Math.max(0, vocabulary.counts[id]! - count);
        const lift = count / acc.vocabularyTotal / ((elsewhere + 0.5) / others);
        if (lift < 4) continue;
        if (best === undefined || lift > best.lift || (lift === best.lift && count > best.count)) {
          best = { word: vocabulary.words[id]!, count, lift };
        }
      }
      if (best !== undefined) person.signatureWord = { word: best.word, count: best.count, lift: Math.min(999, round1(best.lift)) };
    }
    return person;
  });

  // ------------------------------------------------------- second look-ups

  // The busiest day: re-read just the files that hold it to find its words, channel and people.
  const dayWords = new Map<string, number>();
  const dayChannels = new Map<ChannelAcc, number>();
  const dayPeople = new Map<string, number>();
  let dayWordTotal = 0;
  const rootThread = best.biggestThread;
  const rootKey = rootThread?.thread.key;
  const rootFile = rootThread?.thread.rootFile ?? -1;
  let rootText = '';
  for (let index = 0; index < periodFiles; index++) {
    const holdsBusiestDay = fileMinDay[index]! >= 0 && fileMinDay[index]! <= busiestDay && fileMaxDay[index]! >= busiestDay;
    const holdsRoot = rootFile === index;
    if (!holdsBusiestDay && !holdsRoot) continue;
    throwIfAborted();
    const item = plan[index]!;
    let list: unknown;
    try {
      list = JSON.parse(await read(item.path));
    } catch {
      continue;
    }
    if (!Array.isArray(list)) continue;
    for (const m of list as (Raw | null)[]) {
      if (m === null || typeof m !== 'object') continue;
      if (holdsRoot && String(m.ts) === rootKey) rootText = shownText(m);
      if (!holdsBusiestDay) continue;
      const author = humanAuthor(m);
      const ts = parseFloat(m.ts);
      if (author === undefined || !(ts > 0) || teamDayOf(ts) !== busiestDay) continue;
      dayChannels.set(item.channel, (dayChannels.get(item.channel) ?? 0) + 1);
      dayPeople.set(author, (dayPeople.get(author) ?? 0) + 1);
      const facts = analyzer.analyze(messageText(m));
      dayWordTotal += facts.tokens.length;
      for (const word of facts.tokens) dayWords.set(word, (dayWords.get(word) ?? 0) + 1);
    }
  }
  const restOfYearWords = vocabulary.total - dayWordTotal;
  const minDayCount = dayWordTotal >= 400 ? 3 : 2;
  const distinctive: { word: string; score: number }[] = [];
  for (const [word, count] of dayWords) {
    if (count < minDayCount) continue;
    if (restOfYearWords < 50) {
      distinctive.push({ word, score: count });
      continue;
    }
    const elsewhere = Math.max(0, vocabulary.countOf(word) - count);
    const lift = count / dayWordTotal / ((elsewhere + 0.5) / restOfYearWords);
    if (lift >= 1.5) distinctive.push({ word, score: count * Math.log(lift) });
  }
  if (distinctive.length === 0) {
    for (const [word, count] of dayWords) distinctive.push({ word, score: count });
  }
  distinctive.sort((a, b) => b.score - a.score || (a.word < b.word ? -1 : 1));
  const busiestChannel = [...dayChannels].sort((a, b) => b[1] - a[1])[0]?.[0];

  // ---------------------------------------------------------------- moments

  const moments: Moments = {
    busiestDay: {
      date: dates[busiestDay]!,
      messages: byDayCounts[busiestDay]!,
      topWords: distinctive.slice(0, 5).map((entry) => entry.word),
      topPeople: [...dayPeople]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([id]) => id)
        .filter((id) => authorIds.has(id)),
    },
    topMessages: topMessages.map(
      (candidate): TopMessage => ({
        person: candidate.person.id,
        personName: nameOf(candidate.person),
        channelId: candidate.channel.id,
        channelName: candidate.channel.name,
        date: dates[candidate.day]!,
        text: candidate.text,
        reactions: candidate.reactions,
        topReactions: candidate.top,
      }),
    ),
  };
  if (busiestChannel !== undefined) moments.busiestDay.topChannel = { id: busiestChannel.id, name: busiestChannel.name };
  if (rootThread !== undefined) {
    const { thread, channel, replies } = rootThread;
    const starter = thread.rootPerson!;
    const others = thread.participants.filter((p) => p !== starter).length;
    moments.biggestThread = {
      channelId: channel.id,
      channelName: channel.name,
      starter: starter.id,
      starterName: nameOf(starter),
      date: dates[thread.rootDay]!,
      replies,
      participants: Math.max(1 + others, thread.replyUsers),
      text: rootText,
    };
  }
  const { firstMessage, longestMessage } = best;
  if (firstMessage !== undefined) {
    moments.firstMessage = {
      date: dates[firstMessage.day]!,
      person: firstMessage.person.id,
      personName: nameOf(firstMessage.person),
      channelName: firstMessage.channel.name,
      text: firstMessage.text,
    };
  }
  if (longestMessage !== undefined) {
    moments.longestMessage = {
      person: longestMessage.person.id,
      words: longestMessage.words,
      channelName: longestMessage.channel.name,
      date: dates[longestMessage.day]!,
    };
  }
  if (hourGrid[recordHourIndex]! > 0) {
    moments.recordHour = {
      date: dates[Math.floor(recordHourIndex / 24)]!,
      hour: recordHourIndex % 24,
      messages: hourGrid[recordHourIndex]!,
    };
  }

  // ------------------------------------------------------------------ emoji

  const emojiOrder = emojiNames.map((_, id) => id);
  const emojiUses = (id: number): number => emojiReactions[id]! + emojiTyped[id]!;
  let emojiTotal = 0;
  let emojiDistinct = 0;
  for (const id of emojiOrder) {
    if (emojiUses(id) === 0) continue;
    emojiTotal += emojiUses(id);
    emojiDistinct++;
  }
  const rankedEmoji = (score: (id: number) => number, limit: number, only: (id: number) => boolean = () => true): number[] =>
    emojiOrder
      .filter((id) => score(id) > 0 && only(id))
      .sort((a, b) => score(b) - score(a) || (emojiNames[a]! < emojiNames[b]! ? -1 : 1))
      .slice(0, limit);

  // ---------------------------------------------------------------- huddles

  let huddles: HuddleStats | null = null;
  if (huddleCount > 0) {
    huddles = {
      count: huddleCount,
      totalMinutes: Math.round(huddleSeconds / 60),
      longestMinutes: Math.round(longestHuddle / 60),
      topPeople: authors
        .filter((p) => p.huddleSeconds > 0)
        .sort((a, b) => b.huddleSeconds - a.huddleSeconds)
        .slice(0, 5)
        .map((p) => ({ id: p.id, minutes: Math.round(p.huddleSeconds / 60) })),
    };
  }

  // ----------------------------------------------------------------- awards

  const awards = computeAwards(personList, { totalMessages, arrival });
  const peopleById = new Map(personList.map((p) => [p.id, p]));
  for (const award of awards) peopleById.get(award.winner.person)?.awards.push(award.id satisfies AwardId);

  const channelAwards = computeChannelAwards(channelStats, { createdDay, endDay });

  const personality = choosePersonality({
    messages: totalMessages,
    words: totalWords,
    replies: totalReplies,
    reactions: totalReactions,
    nightMessages: nightTotal,
    earlyMessages: earlyTotal,
    typedEmoji,
    emojiDistinct,
    emojiTotal,
    busiestHour: argMax(byHour),
    busiestWeekday: argMax(byWeekday),
  });

  // --------------------------------------------------------------- coverage

  let otherFolders = 0;
  for (const files of folders.values()) if (!claimedFolders.has(files)) otherFolders++;
  if (!includesPrivate) {
    warnings.unshift(
      otherFolders > 0
        ? 'Only public channels were counted. The private channels and direct messages in this export were left out.'
        : 'This export contains public channels only. Private channels and direct messages are not part of it.',
    );
  } else {
    warnings.unshift('Private channels were included because you asked for them. Direct messages are never read.');
  }
  if (Number.isFinite(firstTs)) {
    const firstDay = teamDayOf(firstTs);
    if (firstDay > 0) {
      warnings.push(`This export begins on ${longDate(firstDay + startDay)}, so nothing before that date is counted.`);
    }
  }
  if (skippedFiles > 0) {
    warnings.push(
      skippedFiles === 1
        ? '1 day file could not be read and was skipped.'
        : `${formatInt(skippedFiles)} day files could not be read and were skipped.`,
    );
  }

  // -------------------------------------------------------------- workspace

  const teamId = mostCommon(teamIds);
  const workspaceId = (
    await sha256Hex(teamId ?? [...(users.size > 0 ? users.keys() : people.keys())].sort().join(','))
  ).slice(0, 32);

  // The name given by the caller, else what the file name says, else what a wrapping folder's name says.
  const workspaceName =
    [str(options.workspaceName), workspaceNameFromLabel(source.label ?? ''), root === '' ? '' : workspaceNameFromLabel(root)].find(
      (name) => name !== '' && name !== UNKNOWN_WORKSPACE,
    ) ?? UNKNOWN_WORKSPACE;

  const result: WrappedData = {
    schema: SCHEMA_VERSION,
    platform: 'slack',
    generatedAt: new Date().toISOString(),
    workspace: {
      id: workspaceId,
      name: workspaceName,
    },
    period,
    totals: {
      messages: totalMessages,
      words: totalWords,
      characters: totalCharacters,
      reactions: totalReactions,
      threads: totalThreads,
      replies: totalReplies,
      files: totalFiles,
      links: totalLinks,
      mentions: totalMentions,
      activePeople: personList.length,
      activeChannels: channelStats.length,
      newChannels,
      botMessages: totalBotMessages,
      activeDays,
      messagesPerActiveDay: round1(totalMessages / Math.max(1, activeDays)),
      novels: round1(totalWords / 90000),
    },
    people: personList,
    channels: channelStats,
    rhythm: {
      byMonth,
      byWeekday,
      byHour,
      heatmap,
      byDay: dates.map((date, day) => ({ date, messages: byDayCounts[day]! })),
      busiestMonth: argMax(byMonth),
      busiestWeekday: argMax(byWeekday),
      busiestHour: argMax(byHour),
      quietestWeekday,
    },
    moments,
    emoji: {
      top: rankedEmoji(emojiUses, 10).map((id) => ({ emoji: emojiRef(emojiNames[id]!), count: emojiUses(id) })),
      topReactions: rankedEmoji((id) => emojiReactions[id]!, 5).map((id) => ({
        emoji: emojiRef(emojiNames[id]!),
        count: emojiReactions[id]!,
      })),
      topCustom: rankedEmoji(emojiUses, 5, (id) => !emojiStandard[id]).map((id) => ({ name: emojiNames[id]!, count: emojiUses(id) })),
      distinct: emojiDistinct,
      total: emojiTotal,
    },
    words: {
      top: vocabulary.top(30),
      questions: totalQuestions,
      exclamations: totalExclamations,
      laughStyles: LAUGH_STYLES.map((style, index) => ({ style: style as string, count: laughCounts[index]! }))
        .filter((entry) => entry.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
      thanks: totalThanks,
    },
    huddles,
    awards,
    channelAwards,
    personality,
    coverage: {
      messagesScanned,
      filesScanned,
      skippedFiles,
      warnings,
      includesPrivate,
    },
  };
  if (Number.isFinite(firstTs)) result.coverage.firstTs = Math.floor(firstTs);
  if (Number.isFinite(lastTs)) result.coverage.lastTs = Math.floor(lastTs);

  progress.phase = 'done';
  report();
  return scrub(result);
}
