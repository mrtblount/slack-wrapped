/**
 * Ways to hand an export to the engine: a zip (browser or Node), or files held in memory (tests).
 * A directory source lives in node.ts so that browser bundles never import node:fs.
 */

import { Reader, ZipReader, type FileEntry } from '@zip.js/zip.js/lib/zip-core-native.js';
import type { ExportSource } from './types';
import { SlackExportError } from './errors';

/** A day file larger than this is not read (a real one is a few megabytes at most). */
const MAX_ENTRY_BYTES = 256 * 1024 * 1024;
/** How much of the zip is held in memory at a time while entries are read. */
const WINDOW_BYTES = 4 * 1024 * 1024;

/**
 * Where the export really starts inside a listing: '' when channels.json is at the root, otherwise
 * the folder that holds it (with a trailing slash). Exports that were unzipped and zipped again
 * usually gain one wrapping folder, and macOS adds a __MACOSX folder next to it.
 */
export function findExportRoot(paths: Iterable<string>): string {
  let best: string | null = null;
  let bestDepth = Infinity;
  for (const path of paths) {
    if (path === 'channels.json') return '';
    if (!path.endsWith('/channels.json')) continue;
    if (path.startsWith('__MACOSX/') || path.includes('/__MACOSX/')) continue;
    const prefix = path.slice(0, path.length - 'channels.json'.length);
    let depth = 0;
    for (let i = 0; i < prefix.length; i++) if (prefix.charCodeAt(i) === 47) depth++;
    if (depth < bestDepth) {
      best = prefix;
      bestDepth = depth;
    }
  }
  return best ?? '';
}

/** An export held in memory: a map from path ("general/2026-03-09.json") to file text. */
export function memorySource(files: Record<string, string>, label?: string): ExportSource {
  const source: ExportSource = {
    list: async () => Object.keys(files),
    readText: async (path) => {
      if (!Object.hasOwn(files, path)) throw new Error(`No such file in the export: ${path}`);
      return files[path]!;
    },
  };
  if (label !== undefined) source.label = label;
  return source;
}

/**
 * Reads a Blob through a sliding window, so that the thousands of small entries of an export cost a
 * handful of large reads instead of two tiny reads each. Only one window is kept in memory.
 */
class BlobWindowReader extends Reader<Blob> {
  private readonly blob: Blob;
  private cached: { start: number; data: Uint8Array } | null = null;
  private loading: { start: number; end: number; done: Promise<unknown> } | null = null;

  constructor(blob: Blob) {
    super(blob);
    this.blob = blob;
    this.size = blob.size;
  }

  override async readUint8Array(offset: number, length: number): Promise<Uint8Array> {
    const end = Math.min(offset + length, this.size);
    if (end <= offset) return new Uint8Array(0);
    if (end - offset >= WINDOW_BYTES) {
      // The central directory of a big export, or one very large entry: read it directly.
      return new Uint8Array(await this.blob.slice(offset, end).arrayBuffer());
    }
    for (;;) {
      const cached = this.cached;
      if (cached !== null && offset >= cached.start && end <= cached.start + cached.data.length) {
        return cached.data.slice(offset - cached.start, end - cached.start);
      }
      const loading = this.loading;
      if (loading !== null && offset >= loading.start && end <= loading.end) {
        await loading.done;
        continue;
      }
      const start = offset;
      const stop = Math.min(this.size, start + WINDOW_BYTES);
      const load = this.blob.slice(start, stop).arrayBuffer().then((buffer) => {
        const loaded = { start, data: new Uint8Array(buffer) };
        this.cached = loaded;
        return loaded;
      });
      const entry = { start, end: stop, done: load.catch(() => undefined) };
      this.loading = entry;
      try {
        const loaded = await load;
        return loaded.data.slice(offset - start, end - start);
      } finally {
        if (this.loading === entry) this.loading = null;
      }
    }
  }
}

const METHOD_STORED = 0;
const METHOD_DEFLATE = 8;

/** Whether this runtime can inflate raw deflate data itself (every current browser and Node can). */
function hasNativeInflate(): boolean {
  try {
    new DecompressionStream('deflate-raw');
    return true;
  } catch {
    return false;
  }
}

/** Inflates raw deflate data with the runtime's own decompressor, refusing to produce more than `limit` bytes. */
async function inflate(packed: Uint8Array, expectedSize: number, limit: number): Promise<Uint8Array> {
  const stream = new DecompressionStream('deflate-raw');
  const writer = stream.writable.getWriter();
  // Errors surface on the reading side; these only need to not go unhandled.
  writer.write(packed as Uint8Array<ArrayBuffer>).catch(() => undefined);
  writer.close().catch(() => undefined);
  const reader = stream.readable.getReader();
  let out = new Uint8Array(Math.max(expectedSize, 1024));
  let length = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (length + value.length > limit) {
      await reader.cancel().catch(() => undefined);
      throw new Error('File is too large to read');
    }
    if (length + value.length > out.length) {
      const grown = new Uint8Array(Math.max(out.length * 2, length + value.length));
      grown.set(out.subarray(0, length));
      out = grown;
    }
    out.set(value, length);
    length += value.length;
  }
  return out.subarray(0, length);
}

/**
 * Where each file of the export sits in the zip. zip.js describes an entry with an object of several
 * kilobytes; an export has up to 150,000 of them, so only four numbers per entry are kept.
 */
interface ZipIndex {
  paths: string[];
  lookup: Map<string, number>;
  /** Position of the entry's local file header. */
  offsets: Float64Array;
  packedSizes: Float64Array;
  sizes: Float64Array;
  methods: Uint8Array;
  /** Entries that are read through zip.js: unusual compression, or a runtime without native inflate. */
  viaZipJs: Map<number, FileEntry>;
  reader: BlobWindowReader;
  /** The folder that wrapped the export inside the zip ('' when there was none). */
  root: string;
}

/** How entry data is read: by this module where it can ('direct'), or always through zip.js. */
export type ZipReadMode = 'direct' | 'zip.js';

async function openZip(blob: Blob, mode: ZipReadMode): Promise<ZipIndex> {
  const names: string[] = [];
  const offsets: number[] = [];
  const packedSizes: number[] = [];
  const sizes: number[] = [];
  const methods: number[] = [];
  const kept = new Map<number, FileEntry>();
  const reader = new BlobWindowReader(blob);
  try {
    // zip.js must not start its own web workers: this code already runs inside one.
    const zip = new ZipReader(reader, { useWebWorkers: false, filenameValidation: 'tolerant' });
    for await (const entry of zip.getEntriesGenerator({ filenameValidation: 'tolerant' })) {
      if (entry.directory) continue;
      const name = entry.filename;
      if (!name.endsWith('.json') || name.startsWith('__MACOSX/') || name.includes('/__MACOSX/')) continue;
      const method = entry.compressionMethod;
      const direct = mode === 'direct' && !entry.encrypted && (method === METHOD_STORED || method === METHOD_DEFLATE);
      if (!direct) kept.set(names.length, entry);
      names.push(name);
      offsets.push(entry.offset);
      packedSizes.push(entry.compressedSize);
      sizes.push(entry.uncompressedSize);
      methods.push(method === METHOD_STORED ? METHOD_STORED : METHOD_DEFLATE);
    }
  } catch (cause) {
    throw new SlackExportError(
      'not-a-zip',
      'That file could not be read as a zip archive. Drop the .zip exactly as Slack gave it to you.',
      { cause },
    );
  }
  const root = findExportRoot(names);
  const index: ZipIndex = {
    paths: [],
    lookup: new Map(),
    offsets: Float64Array.from(offsets),
    packedSizes: Float64Array.from(packedSizes),
    sizes: Float64Array.from(sizes),
    methods: Uint8Array.from(methods),
    viaZipJs: kept,
    reader,
    root,
  };
  for (let i = 0; i < names.length; i++) {
    const name = names[i]!;
    if (!name.startsWith(root)) continue;
    const path = name.slice(root.length);
    if (!index.lookup.has(path)) index.paths.push(path);
    index.lookup.set(path, i);
  }
  return index;
}

async function readEntry(index: ZipIndex, entry: number): Promise<Uint8Array> {
  const size = index.sizes[entry]!;
  if (size > MAX_ENTRY_BYTES) throw new Error('File is too large to read');
  const viaZipJs = index.viaZipJs.get(entry);
  if (viaZipJs !== undefined) {
    return new Uint8Array(await viaZipJs.arrayBuffer({ useWebWorkers: false, strictness: 'tolerant' }));
  }
  // The local file header: 30 fixed bytes, then the name and an extra field, then the data.
  const offset = index.offsets[entry]!;
  const header = await index.reader.readUint8Array(offset, 30);
  if (header.length < 30 || header[0] !== 0x50 || header[1] !== 0x4b || header[2] !== 0x03 || header[3] !== 0x04) {
    throw new Error('Damaged zip entry');
  }
  const nameLength = header[26]! | (header[27]! << 8);
  const extraLength = header[28]! | (header[29]! << 8);
  const packedSize = index.packedSizes[entry]!;
  const packed = await index.reader.readUint8Array(offset + 30 + nameLength + extraLength, packedSize);
  if (packed.length !== packedSize) throw new Error('Damaged zip entry');
  return index.methods[entry] === METHOD_STORED ? packed : inflate(packed, size, MAX_ENTRY_BYTES);
}

/** `zipSource` with the reading mode chosen by hand. For tests. */
export function zipSourceWith(blob: Blob, label: string | undefined, mode: ZipReadMode): ExportSource {
  let index: Promise<ZipIndex> | undefined;
  let root = '';
  const open = (): Promise<ZipIndex> =>
    (index ??= openZip(blob, mode).then((opened) => {
      root = opened.root;
      return opened;
    }));
  const decoder = new TextDecoder('utf-8');
  const name = label ?? (blob as { name?: unknown }).name;
  const given = typeof name === 'string' && name !== '' ? name : undefined;
  const source: ExportSource = {
    // Once the zip is open, a wrapping folder named like an export can supply the workspace name.
    get label() {
      return preferLabel(given, root);
    },
    list: async () => (await open()).paths,
    readText: async (path) => {
      const opened = await open();
      const entry = opened.lookup.get(path);
      if (entry === undefined) throw new Error(`No such file in the export: ${path}`);
      return decoder.decode(await readEntry(opened, entry));
    },
  };
  return source;
}

/**
 * A Slack export zip. zip.js reads the zip's central directory (Zip64 included) to find the entries;
 * each file is then read on demand, so the archive is never loaded whole and archives of many
 * gigabytes work. No web worker is started. A single folder wrapping the export is stripped.
 * `label` defaults to the file's name when `blob` is a File; if that says nothing about the workspace
 * (a renamed zip), the wrapping folder's name is used once the zip has been opened.
 */
export function zipSource(blob: Blob, label?: string): ExportSource {
  return zipSourceWith(blob, label, hasNativeInflate() ? 'direct' : 'zip.js');
}

/**
 * The workspace name from an export's file name:
 * "Acme Inc Slack export Jan 1 2026 - Dec 9 2026.zip" → "Acme Inc". Falls back to "Your team".
 */
export function workspaceNameFromLabel(label: string): string {
  let name = String(label ?? '').replace(/\\/g, '/').replace(/\/+$/, '');
  name = name.slice(name.lastIndexOf('/') + 1).replace(/\.zip$/i, '');
  const marker = name.search(/\s+slack\s+export\b/i);
  if (marker > 0) {
    const workspace = name.slice(0, marker).trim();
    if (workspace !== '') return workspace;
  }
  return UNKNOWN_WORKSPACE;
}

/** What `workspaceNameFromLabel` answers when a label says nothing about the workspace. */
export const UNKNOWN_WORKSPACE = 'Your team';

/**
 * The label to name the workspace from: the one given, unless it says nothing about the workspace and
 * the folder that wrapped the export does ("Acme Inc Slack export Jan 1 2026 - Dec 9 2026/").
 */
export function preferLabel(given: string | undefined, root: string): string | undefined {
  if (root === '') return given;
  if (given !== undefined && workspaceNameFromLabel(given) !== UNKNOWN_WORKSPACE) return given;
  const folder = root.replace(/\/+$/, '');
  return workspaceNameFromLabel(folder) === UNKNOWN_WORKSPACE ? given : folder.slice(folder.lastIndexOf('/') + 1);
}
