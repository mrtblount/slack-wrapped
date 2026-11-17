/**
 * The contract between the engine (which reads a chat export and computes stats)
 * and everything that renders them (the show, personal cards, exports).
 *
 * Rules for this file:
 *  - Everything here is plain JSON: no Dates, Maps, Sets, functions or class instances.
 *  - The engine fills every non-optional field. Renderers never recompute stats.
 *  - Person references are always Person.id strings; look them up in `people`.
 *  - Dates are ISO calendar dates ("2026-03-09") in the team timezone unless noted.
 */

export const SCHEMA_VERSION = 1 as const;

export type Platform = 'slack';

export interface WrappedData {
  schema: typeof SCHEMA_VERSION;
  platform: Platform;
  /** ISO timestamp of when the analysis ran. */
  generatedAt: string;
  workspace: WorkspaceInfo;
  period: Period;
  totals: Totals;
  /** Every human who posted at least one message in the period, most messages first. */
  people: Person[];
  /** Every channel with at least one human message in the period, most messages first. */
  channels: ChannelStat[];
  rhythm: Rhythm;
  moments: Moments;
  emoji: EmojiStats;
  words: WordStats;
  /** null when the export contains no huddles. */
  huddles: HuddleStats | null;
  /** Every people award that has a valid winner, in ceremony order (build-up first, headline awards last). See Award.featured. */
  awards: Award[];
  channelAwards: ChannelAward[];
  personality: TeamPersonality;
  coverage: Coverage;
}

export interface WorkspaceInfo {
  /**
   * Stable, non-reversible id for this workspace (hex). Derived from the export's
   * team id when present, otherwise from the sorted user ids. Licenses bind to it.
   */
  id: string;
  /** Best guess at a display name (from the export file name); the user can edit it. */
  name: string;
}

export interface Period {
  /** Inclusive ISO dates. */
  start: string;
  end: string;
  /** Short label for titles, e.g. "2026". */
  label: string;
  days: number;
  /** IANA timezone used for all team-level time stats (the most common member timezone). */
  timezone: string;
}

export interface Totals {
  /** Human messages in the period. Excludes bots and system events (joins, topic changes...). */
  messages: number;
  words: number;
  characters: number;
  /** Individual reactions given (sum of reaction counts). */
  reactions: number;
  /** Thread roots that received at least one reply. */
  threads: number;
  replies: number;
  files: number;
  links: number;
  mentions: number;
  activePeople: number;
  activeChannels: number;
  /** Channels created inside the period. */
  newChannels: number;
  botMessages: number;
  /** Days with at least one human message. */
  activeDays: number;
  messagesPerActiveDay: number;
  /** words / 90,000, one decimal. A fun-fact unit. */
  novels: number;
}

export interface EmojiRef {
  /** Shortcode without colons, e.g. "tada" or a custom name like "shipit". */
  name: string;
  /** The Unicode character(s) for standard emoji. Absent for custom workspace emoji. */
  char?: string;
}

export interface Person {
  id: string;
  /** Preferred display name. */
  name: string;
  realName?: string;
  title?: string;
  /** Avatar URL from the export. May be unreachable (offline, expired); always have a fallback. */
  avatar?: string;
  /** Index into the renderer's avatar palette, stable for a given person id. 0..11. */
  color: number;
  tz?: string;
  /** 1-based rank by messages. */
  rank: number;
  /** Share of other active people this person out-messaged, 0..100. */
  percentile: number;
  stats: PersonStats;
  /** Up to 3. */
  topChannels: { id: string; name: string; messages: number }[];
  /** Up to 3, counting emoji typed in messages plus reactions given. */
  topEmoji: { emoji: EmojiRef; count: number }[];
  /** A word this person uses far more than the rest of the team. */
  signatureWord?: { word: string; count: number; lift: number };
  /** 0..23 in the person's own timezone. */
  peakHour?: number;
  /** 0 = Monday ... 6 = Sunday. */
  peakWeekday?: number;
  busiestDay?: { date: string; messages: number };
  firstMessageDate?: string;
  /**
   * True when the person joined during the period, more than 30 days after it (or the data) began.
   * Taken from their join event in the general channel when there is one; otherwise inferred from a first
   * message more than 60 days in, when the export also holds earlier history. Anyone seen before the period
   * never counts as joined.
   */
  joinedInPeriod: boolean;
  /** Ids of awards this person won. */
  awards: AwardId[];
}

export interface PersonStats {
  messages: number;
  words: number;
  avgWords: number;
  reactionsGiven: number;
  reactionsReceived: number;
  /** Threads this person started that got at least one reply. */
  threadsStarted: number;
  /** Messages posted inside threads. */
  replies: number;
  /** Median seconds between a thread root and this person's first reply to it. */
  medianReplySeconds?: number;
  /** Times this person was the first to reply to someone else's thread. */
  firstReplies: number;
  questions: number;
  links: number;
  files: number;
  images: number;
  mentionsMade: number;
  mentionsReceived: number;
  /** @here / @channel / @everyone. */
  broadcasts: number;
  edits: number;
  /** Messages written mostly in capitals. */
  shouts: number;
  /** 22:00–04:59 in the person's timezone. */
  nightMessages: number;
  /** 05:00–07:59 in the person's timezone. */
  earlyMessages: number;
  /** Saturday and Sunday on the person's own calendar (their timezone). */
  weekendMessages: number;
  activeDays: number;
  /** Longest run of consecutive weekdays with at least one message, on the person's own calendar. */
  longestStreak: number;
  channelsActive: number;
  channelsCreated: number;
  distinctEmoji: number;
  customEmojiUses: number;
  thanksGiven: number;
  thanksReceived: number;
  laughs: number;
  /** Longest run of consecutive messages in one channel with nobody else in between. */
  longestMonologue: number;
  huddleMinutes: number;
  /**
   * Times this person posted the first / last human message of the day in a channel. These count
   * channel-days, so they can exceed the number of days in the period.
   */
  dayStarters: number;
  dayClosers: number;
}

export interface ChannelStat {
  id: string;
  name: string;
  messages: number;
  /** Distinct humans who posted. */
  people: number;
  threads: number;
  reactions: number;
  createdInPeriod: boolean;
  creator?: string;
  purpose?: string;
  /** Up to 3 person ids with counts. */
  topPeople: { id: string; messages: number }[];
  /** 0..23 team timezone. */
  peakHour?: number;
  /** 0..1 share of messages sent 22:00–04:59 team time. */
  nightShare: number;
  /** 0..1 share of messages that are thread replies. */
  threadShare: number;
  reactionsPerMessage: number;
}

export interface Rhythm {
  /** 12 entries, January first. */
  byMonth: number[];
  /** 7 entries, Monday first. */
  byWeekday: number[];
  /** 24 entries, team timezone. */
  byHour: number[];
  /** 7 rows (Monday first) × 24 columns. */
  heatmap: number[][];
  /** One entry per calendar day in the period, in order, including zero days. */
  byDay: { date: string; messages: number }[];
  busiestMonth: number;
  busiestWeekday: number;
  busiestHour: number;
  quietestWeekday: number;
}

export interface TopMessage {
  /** Person id, or null if the author is not in `people` (deleted user, bot). */
  person: string | null;
  personName: string;
  channelId: string;
  channelName: string;
  date: string;
  /** Plain text, mentions and links resolved to readable form, at most 280 characters. */
  text: string;
  reactions: number;
  /** Up to 4. */
  topReactions: { emoji: EmojiRef; count: number }[];
}

export interface Moments {
  busiestDay: {
    date: string;
    messages: number;
    topChannel?: { id: string; name: string };
    /** Up to 5 distinctive words from that day. */
    topWords: string[];
    /** Up to 3 person ids. */
    topPeople: string[];
  };
  biggestThread?: {
    channelId: string;
    channelName: string;
    /** Person id of the starter, or null. */
    starter: string | null;
    starterName: string;
    date: string;
    replies: number;
    participants: number;
    /** Plain text of the root message, at most 280 characters. */
    text: string;
  };
  /** Most-reacted messages, best first, up to 5. */
  topMessages: TopMessage[];
  firstMessage?: { date: string; person: string | null; personName: string; channelName: string; text: string };
  longestMessage?: { person: string; words: number; channelName: string; date: string };
  /** The single busiest clock hour of the year. `hour` is 0..23 team time. */
  recordHour?: { date: string; hour: number; messages: number };
}

export interface EmojiStats {
  /** Reactions plus emoji typed in messages, best first, up to 10. */
  top: { emoji: EmojiRef; count: number }[];
  /** Reactions only, up to 5. */
  topReactions: { emoji: EmojiRef; count: number }[];
  /** Custom workspace emoji, up to 5. */
  topCustom: { name: string; count: number }[];
  distinct: number;
  total: number;
}

export interface WordStats {
  /** Most-used words after removing stopwords, up to 30. */
  top: { word: string; count: number }[];
  questions: number;
  exclamations: number;
  /** e.g. haha / lol / lmao / 😂, best first, up to 5. */
  laughStyles: { style: string; count: number }[];
  thanks: number;
}

export interface HuddleStats {
  count: number;
  totalMinutes: number;
  longestMinutes: number;
  /** Up to 5. */
  topPeople: { id: string; minutes: number }[];
}

export type AwardId =
  | 'yapper'
  | 'novelist'
  | 'minimalist'
  | 'night-owl'
  | 'early-bird'
  | 'weekend-warrior'
  | 'first-responder'
  | 'thread-starter'
  | 'hype-person'
  | 'crowd-favorite'
  | 'emoji-artist'
  | 'interviewer'
  | 'link-librarian'
  | 'meme-dealer'
  | 'town-crier'
  | 'editor'
  | 'caps-lock-captain'
  | 'connector'
  | 'most-wanted'
  | 'explorer'
  | 'channel-founder'
  | 'streak-master'
  | 'huddle-hero'
  | 'gratitude-champion'
  | 'most-thanked'
  | 'laugh-track'
  | 'monologue-master'
  | 'opener'
  | 'closer'
  | 'rookie'
  | 'emoji-connoisseur';

export type AwardTone = 'wholesome' | 'spicy';
export type AwardCategory = 'volume' | 'timing' | 'style' | 'social' | 'craft';

export interface AwardEntry {
  person: string;
  value: number;
  /** Human-readable stat, e.g. "14,203 messages" or "replies in 42 seconds". */
  display: string;
}

export interface Award {
  id: AwardId;
  /** e.g. "The Night Owl". */
  title: string;
  /** One emoji that stands for the award. */
  emoji: string;
  tone: AwardTone;
  category: AwardCategory;
  /** What it rewards, phrased to follow a name: "posted the most after 10pm". */
  tagline: string;
  /** The true top scorer. Awards are never reassigned to spread them around. */
  winner: AwardEntry;
  /** Up to 2. */
  runnersUp: AwardEntry[];
  /**
   * True for the awards in the default ceremony: a selection of roughly 10–14 that favours
   * distinct winners. The rest are computed and available for the organiser to switch on.
   */
  featured: boolean;
}

export interface ChannelAward {
  id: 'busiest' | 'night-shift' | 'thread-city' | 'reaction-magnet' | 'ghost-town' | 'newcomer' | 'tight-knit';
  title: string;
  emoji: string;
  tagline: string;
  channel: { id: string; name: string };
  display: string;
}

export interface TeamPersonality {
  /** Stable key, e.g. "night-owls" | "thread-heads" | "emoji-maximalists" | "steady-hands". */
  id: string;
  /** e.g. "The Thread-Heads". */
  title: string;
  /** One or two sentences. */
  description: string;
  /** 3–4 short label/value pairs that back it up. */
  traits: { label: string; value: string }[];
}

export interface Coverage {
  /** All message objects read, including bots and system events. */
  messagesScanned: number;
  filesScanned: number;
  skippedFiles: number;
  /** Plain-language notes for the user, e.g. "This export only contains public channels." */
  warnings: string[];
  includesPrivate: boolean;
  /** Unix seconds of the earliest / latest message seen in the whole export. */
  firstTs?: number;
  lastTs?: number;
}

/** Progress callback payload while analysing. */
export interface Progress {
  phase: 'listing' | 'reading' | 'computing' | 'done';
  filesTotal: number;
  filesDone: number;
  messages: number;
  /** Name of the channel currently being read. */
  current?: string;
}

/**
 * `analyzeSlackExport` rejects with a `SlackExportError` whose `code` is one of: 'not-a-zip',
 * 'not-a-slack-export', 'no-messages' (nothing written by people in the period), 'invalid-period'.
 * An aborted run rejects with an error named 'AbortError'; a custom abort reason is kept as its `cause`.
 */
export interface AnalyzeOptions {
  /** Used for workspace.name when given (e.g. derived from the zip file name). */
  workspaceName?: string;
  /**
   * Which period to report. 'auto' picks the calendar year that contains the latest message, from Jan 1 of
   * that year to the latest message's date. An export made in the first weeks of January reports the whole
   * previous year instead, provided it holds files from before that January 1.
   */
  period?: 'auto' | { start: string; end: string };
  /** Private channels and DMs are ignored unless this is true (DMs are always ignored). */
  includePrivateChannels?: boolean;
  onProgress?: (p: Progress) => void;
  /** Abort early. */
  signal?: AbortSignal;
}

/**
 * A readable chat export. Implementations: a zip (browser/Node), a directory (Node), in-memory (tests).
 * Paths use forward slashes and are relative to the export root, e.g. "general/2026-03-09.json".
 */
export interface ExportSource {
  /** Optional hint for the workspace name, e.g. the zip's file name. */
  label?: string;
  list(): Promise<string[]>;
  readText(path: string): Promise<string>;
}
