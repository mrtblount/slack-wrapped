/**
 * A small builder for in-memory Slack exports, shaped like the real thing: channels.json, users.json,
 * and one folder per channel holding one file per day. Like Slack, it names day files by the
 * Pacific-time date of the messages inside them, whatever timezone the team lives in.
 */

import { BlobWriter, TextReader, ZipWriter } from '@zip.js/zip.js/lib/zip-core-native.js';
import { analyzeSlackExport, memorySource } from '../../src/engine/index';
import type { AnalyzeOptions, Person, WrappedData } from '../../src/engine/types';

type Fields = Record<string, unknown>;

export interface UserOptions {
  name?: string;
  realName?: string;
  displayName?: string;
  title?: string;
  /** Pass null for a user with no timezone. */
  tz?: string | null;
  bot?: boolean;
  deleted?: boolean;
  teamId?: string | null;
}

export interface ChannelOptions {
  id?: string;
  /** ISO instant. */
  created?: string;
  creator?: string;
  general?: boolean;
  purpose?: string;
  private?: boolean;
}

const pacificDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Los_Angeles',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

/** Unix seconds for an ISO instant such as "2026-03-09T14:30:00-04:00". */
export function seconds(iso: string): number {
  const ms = Date.parse(iso);
  if (Number.isNaN(ms)) throw new Error(`Bad instant in a test: ${iso}`);
  return ms / 1000;
}

export class ExportBuilder {
  private readonly users: Fields[] = [];
  private readonly channels: Fields[] = [];
  private readonly groups: Fields[] = [];
  private readonly dayFiles = new Map<string, Fields[]>();
  private readonly rawFiles = new Map<string, string>();
  private counter = 0;

  user(id: string, options: UserOptions = {}): this {
    const name = options.name ?? id.toLowerCase();
    const realName = options.realName ?? `Person ${id}`;
    const user: Fields = {
      id,
      name,
      deleted: options.deleted ?? false,
      real_name: realName,
      profile: { real_name: realName, display_name: options.displayName ?? '', title: options.title ?? '', image_72: `https://avatars.example/${id}_72.png` },
      is_bot: options.bot ?? false,
    };
    if (options.teamId !== null) user.team_id = options.teamId ?? 'T0TEAM';
    if (options.tz !== null) user.tz = options.tz ?? 'America/New_York';
    this.users.push(user);
    return this;
  }

  channel(name: string, options: ChannelOptions = {}): this {
    const record: Fields = {
      id: options.id ?? `C${name.toUpperCase().replace(/[^A-Z0-9]/g, '')}`,
      name,
      created: options.created === undefined ? 1500000000 : seconds(options.created),
      creator: options.creator ?? 'U1',
      is_general: options.general ?? false,
      purpose: { value: options.purpose ?? '' },
    };
    (options.private ? this.groups : this.channels).push(record);
    return this;
  }

  /** Adds any message object to a channel at an instant and returns its `ts`. */
  add(channel: string, at: string, fields: Fields): string {
    const instant = seconds(at);
    const ts = `${Math.floor(instant)}.${String(++this.counter).padStart(6, '0')}`;
    const key = `${channel}/${pacificDate.format(new Date(instant * 1000))}.json`;
    const list = this.dayFiles.get(key) ?? [];
    list.push({ type: 'message', ts, ...fields });
    this.dayFiles.set(key, list);
    return ts;
  }

  /** A message from a person. */
  post(channel: string, user: string, at: string, text = '', extra: Fields = {}): string {
    return this.add(channel, at, { user, text, ...extra });
  }

  /** Any message object that is the root of a thread: its thread_ts is its own ts, as in real exports. */
  addRoot(channel: string, at: string, fields: Fields): string {
    const ts = this.add(channel, at, fields);
    this.find(channel, seconds(at), ts).thread_ts = ts;
    return ts;
  }

  /** A thread root from a person: `replies` is what Slack writes into reply_count. */
  root(channel: string, user: string, at: string, text: string, replies: number, extra: Fields = {}): string {
    return this.addRoot(channel, at, { user, text, reply_count: replies, ...extra });
  }

  /** A reply in the thread whose root has timestamp `rootTs`. */
  reply(channel: string, user: string, at: string, rootTs: string, text = '', extra: Fields = {}): string {
    return this.add(channel, at, { user, text, thread_ts: rootTs, ...extra });
  }

  /** Puts arbitrary content at a path, e.g. a broken day file. */
  file(path: string, content: string): this {
    this.rawFiles.set(path, content);
    return this;
  }

  private find(channel: string, instant: number, ts: string): Fields {
    const key = `${channel}/${pacificDate.format(new Date(instant * 1000))}.json`;
    const message = this.dayFiles.get(key)?.find((m) => m.ts === ts);
    if (!message) throw new Error('message not found');
    return message;
  }

  /** The export as path → file text. */
  files(): Record<string, string> {
    const files: Record<string, string> = {
      'channels.json': JSON.stringify(this.channels),
      'users.json': JSON.stringify(this.users),
    };
    if (this.groups.length > 0) files['groups.json'] = JSON.stringify(this.groups);
    for (const [path, list] of this.dayFiles) {
      files[path] = JSON.stringify([...list].sort((a, b) => parseFloat(a.ts as string) - parseFloat(b.ts as string)));
    }
    for (const [path, content] of this.rawFiles) files[path] = content;
    return files;
  }

  analyze(options?: AnalyzeOptions, label?: string): Promise<WrappedData> {
    return analyzeSlackExport(memorySource(this.files(), label), options);
  }
}

/** Two people in New York and a general channel: the usual starting point. */
export function smallTeam(): ExportBuilder {
  return new ExportBuilder()
    .user('U1', { name: 'ann', realName: 'Ann Archer', displayName: 'ann' })
    .user('U2', { name: 'bob', realName: 'Bob Baker', displayName: 'bob' })
    .channel('general', { general: true, creator: 'U1' });
}

export function person(data: WrappedData, id: string): Person {
  const found = data.people.find((p) => p.id === id);
  if (!found) throw new Error(`No person ${id} in the result`);
  return found;
}

/** Zips files with zip.js (no web workers). `prefix` wraps everything in a folder; `level: 0` stores without compressing. */
export async function zipOf(files: Record<string, string>, options: { prefix?: string; zip64?: boolean; level?: number } = {}): Promise<Blob> {
  const writer = new ZipWriter(new BlobWriter('application/zip'), { useWebWorkers: false, zip64: options.zip64 ?? false, level: options.level ?? 6 });
  for (const [path, content] of Object.entries(files)) {
    await writer.add((options.prefix ?? '') + path, new TextReader(content));
  }
  return writer.close();
}

/** Fails on anything that is not clean JSON data: NaN, Infinity, undefined, negative counts. */
export function findBadValues(value: unknown, path = 'data'): string[] {
  if (value === undefined) return [`${path} is undefined`];
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return [`${path} is ${value}`];
    return value < 0 ? [`${path} is negative (${value})`] : [];
  }
  if (Array.isArray(value)) return value.flatMap((item, index) => findBadValues(item, `${path}[${index}]`));
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => findBadValues(item, `${path}.${key}`));
  }
  return [];
}
