import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { analyzeSlackExport, memorySource, workspaceNameFromLabel, zipSource } from '../../src/engine/index';
import { dirSource } from '../../src/engine/node';
import { findExportRoot, zipSourceWith } from '../../src/engine/sources';
import type { WrappedData } from '../../src/engine/types';
import { ExportBuilder, smallTeam, zipOf } from './helpers';

const LABEL = 'Acme Inc Slack export Jan 1 2026 - Mar 11 2026.zip';

function sampleExport(): ExportBuilder {
  const b = smallTeam().channel('días-lindos', { id: 'C0UNI' });
  const root = b.root('general', 'U1', '2026-03-10T10:00:00-04:00', 'ship it? :tada:', 1, { reactions: [{ name: '+1', users: ['U2'], count: 1 }] });
  b.reply('general', 'U2', '2026-03-10T10:01:00-04:00', root, 'thanks <@U1>');
  b.post('general', 'U2', '2026-03-11T09:00:00-04:00', 'good morning');
  b.post('días-lindos', 'U1', '2026-03-11T12:00:00-04:00', 'hola');
  return b;
}

const withoutClock = (data: WrappedData): WrappedData => ({ ...data, generatedAt: '' });

describe('zip source', () => {
  it('reads an export zip and gives the same result as the same files in memory', async () => {
    const files = sampleExport().files();
    const expected = await analyzeSlackExport(memorySource(files, LABEL));
    const source = zipSource(await zipOf(files), LABEL);
    expect((await source.list()).sort()).toEqual(Object.keys(files).sort());
    const data = await analyzeSlackExport(source);
    expect(withoutClock(data)).toEqual(withoutClock(expected));
    expect(data.workspace.name).toBe('Acme Inc');
    expect(data.totals.messages).toBe(4);
    expect(data.channels.map((c) => c.name).sort()).toEqual(['días-lindos', 'general']);
  });

  it('strips a single wrapping folder, and ignores what macOS adds when re-zipping', async () => {
    const files = sampleExport().files();
    const wrapper = 'Acme Inc Slack export Jan 1 2026 - Mar 11 2026/';
    const wrapped: Record<string, string> = {
      '__MACOSX/._Acme Inc Slack export Jan 1 2026 - Mar 11 2026': 'junk',
      [`__MACOSX/${wrapper}._channels.json`]: 'junk',
      [`__MACOSX/${wrapper}channels.json`]: 'more junk',
    };
    for (const [path, content] of Object.entries(files)) wrapped[wrapper + path] = content;
    wrapped[`${wrapper}.DS_Store`] = 'junk';
    const source = zipSource(await zipOf(wrapped));
    expect((await source.list()).sort()).toEqual(Object.keys(files).sort());
    expect(JSON.parse(await source.readText('channels.json'))).toHaveLength(2);
    const data = await analyzeSlackExport(source);
    expect(data.totals.messages).toBe(4);
    expect(data.workspace.name).toBe('Your team');
  });

  it('reads Zip64 archives', async () => {
    const files = sampleExport().files();
    const blob = await zipOf(files, { zip64: true });
    const bytes = new Uint8Array(await blob.arrayBuffer());
    let hasZip64Record = false;
    for (let i = 0; i + 3 < bytes.length; i++) {
      if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x06 && bytes[i + 3] === 0x06) hasZip64Record = true;
    }
    expect(hasZip64Record).toBe(true);
    const data = await analyzeSlackExport(zipSource(blob, LABEL));
    expect(data.totals.messages).toBe(4);
  });

  it('never starts a web worker, whichever way entries are read', async () => {
    const files = sampleExport().files();
    const blob = await zipOf(files);
    const scope = globalThis as { Worker?: unknown };
    const original = scope.Worker;
    let started = 0;
    // A browser worker has a Worker constructor, and zip.js uses it unless told not to.
    scope.Worker = class {
      constructor() {
        started++;
        throw new Error('no workers in this test');
      }
    };
    try {
      for (const mode of ['direct', 'zip.js'] as const) {
        const data = await analyzeSlackExport(zipSourceWith(blob, LABEL, mode));
        expect(data.totals.messages, mode).toBe(4);
      }
      expect(started).toBe(0);
    } finally {
      if (original === undefined) delete scope.Worker;
      else scope.Worker = original;
    }
  });

  it('gives the same result reading entries directly or through zip.js, stored or deflated', async () => {
    const files = sampleExport().files();
    files['channels.json'] = `\uFEFF${files['channels.json']}`;
    const expected = withoutClock(await analyzeSlackExport(memorySource(sampleExport().files(), LABEL)));
    for (const level of [0, 6]) {
      const blob = await zipOf(files, { level, prefix: 'wrapped/' });
      for (const mode of ['direct', 'zip.js'] as const) {
        const source = zipSourceWith(blob, LABEL, mode);
        expect(await source.readText('general/2026-03-10.json'), `${mode} level ${level}`).toBe(files['general/2026-03-10.json']);
        expect(withoutClock(await analyzeSlackExport(source)), `${mode} level ${level}`).toEqual(expected);
      }
    }
  });

  it('skips a day file whose data is damaged, and keeps going', async () => {
    const b = sampleExport();
    b.post('general', 'U1', '2026-03-12T09:00:00-04:00', `this day file will be damaged ${'padding '.repeat(200)}`);
    const intact = await zipOf(b.files());
    const bytes = new Uint8Array(await intact.arrayBuffer());
    const name = new TextEncoder().encode('general/2026-03-12.json');
    // The first occurrence of the name is in the entry's local header; its data follows.
    let at = -1;
    for (let i = 0; i < bytes.length && at < 0; i++) {
      if (name.every((byte, j) => bytes[i + j] === byte)) at = i;
    }
    expect(at).toBeGreaterThan(0);
    for (let i = at + name.length + 5; i < at + name.length + 45; i++) bytes[i] = (bytes[i]! + 91) & 0xff;
    for (const mode of ['direct', 'zip.js'] as const) {
      const data = await analyzeSlackExport(zipSourceWith(new Blob([bytes]), LABEL, mode));
      expect(data.totals.messages, mode).toBe(4);
      expect(data.coverage.skippedFiles, mode).toBe(1);
      expect(data.period.end, mode).toBe('2026-03-12');
    }
  });

  it('reads entries on demand through a sliding window, in order or all at once', async () => {
    // About 12 MB of poorly compressible day files, so the zip (about 8 MB) spans more than one read window.
    const files: Record<string, string> = { 'channels.json': '[]', 'users.json': '[]' };
    let seed = 12345;
    const noise = (length: number): string => {
      let out = '';
      while (out.length < length) {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        out += seed.toString(36);
      }
      return out;
    };
    for (let i = 0; i < 400; i++) {
      const date = new Date(Date.UTC(2026, 0, 1 + i)).toISOString().slice(0, 10);
      files[`general/${date}.json`] = JSON.stringify([{ type: 'message', user: 'U1', ts: `${1767225600 + i * 86400}.000100`, text: noise(30000) }]);
    }
    const blob = await zipOf(files);
    expect(blob.size).toBeGreaterThan(6 * 1024 * 1024);
    let largestRead = 0;
    const counting = new Proxy(blob, {
      get(target, property) {
        if (property === 'slice') {
          return (start: number, end: number) => {
            largestRead = Math.max(largestRead, end - start);
            return target.slice(start, end);
          };
        }
        const value = Reflect.get(target, property) as unknown;
        return typeof value === 'function' ? (value as (...args: unknown[]) => unknown).bind(target) : value;
      },
    });
    const source = zipSource(counting);
    const paths = (await source.list()).filter((path) => path.startsWith('general/')).sort();
    expect(paths).toHaveLength(400);
    for (const path of paths) expect(await source.readText(path), path).toBe(files[path]);
    const shuffled = [...paths].sort((a, b) => (a.slice(-7) < b.slice(-7) ? -1 : 1));
    const all = await Promise.all(shuffled.map((path) => source.readText(path)));
    shuffled.forEach((path, index) => expect(all[index] === files[path], path).toBe(true));
    // Never the whole archive in one read.
    expect(largestRead).toBeLessThanOrEqual(4 * 1024 * 1024);
    await expect(source.readText('general/1999-01-01.json')).rejects.toThrow(/No such file/);
  }, 60_000);

  it('uses the file name of a File as the label', async () => {
    const blob = await zipOf(sampleExport().files());
    const file = new File([blob], LABEL, { type: 'application/zip' });
    expect(zipSource(file).label).toBe(LABEL);
    expect(zipSource(file, 'Other Slack export.zip').label).toBe('Other Slack export.zip');
    expect(zipSource(blob).label).toBeUndefined();
    expect((await analyzeSlackExport(zipSource(file))).workspace.name).toBe('Acme Inc');
    expect((await analyzeSlackExport(zipSource(file), { workspaceName: '  Plant People  ' })).workspace.name).toBe('Plant People');
  });

  it('rejects a file that is not a zip, and a zip that is not an export', async () => {
    await expect(analyzeSlackExport(zipSource(new Blob(['this is not a zip archive at all'])))).rejects.toMatchObject({ code: 'not-a-zip' });
    await expect(analyzeSlackExport(zipSource(await zipOf({ 'notes.txt': 'hello', 'data.json': '[]' })))).rejects.toMatchObject({ code: 'not-a-slack-export' });
  });
});

describe('finding the export root', () => {
  it('prefers the root, then the shallowest folder holding channels.json', () => {
    expect(findExportRoot(['channels.json', 'users.json', 'general/2026-01-01.json'])).toBe('');
    expect(findExportRoot(['Acme/channels.json', 'Acme/general/2026-01-01.json'])).toBe('Acme/');
    expect(findExportRoot(['a/b/channels.json', 'a/channels.json', '__MACOSX/channels.json'])).toBe('a/');
    expect(findExportRoot(['__MACOSX/Acme/channels.json', 'Acme/channels.json'])).toBe('Acme/');
    expect(findExportRoot(['readme.txt'])).toBe('');
  });
});

describe('directory source', () => {
  let folder: string | undefined;
  afterEach(() => {
    if (folder) rmSync(folder, { recursive: true, force: true });
    folder = undefined;
  });
  const write = (root: string, files: Record<string, string>): void => {
    for (const [path, content] of Object.entries(files)) {
      const target = join(root, ...path.split('/'));
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, content);
    }
  };

  it('reads an unzipped export from a folder', async () => {
    folder = mkdtempSync(join(tmpdir(), 'teamwrapped-test-'));
    const root = join(folder, 'Acme Inc Slack export Jan 1 2026 - Mar 11 2026');
    const files = sampleExport().files();
    write(root, { ...files, 'channels.json': `\uFEFF${files['channels.json']}`, 'notes.txt': 'not part of the export' });
    const source = dirSource(root);
    expect(source.label).toBe('Acme Inc Slack export Jan 1 2026 - Mar 11 2026');
    expect((await source.list()).sort()).toEqual(Object.keys(files).sort());
    const data = await analyzeSlackExport(source);
    const expected = await analyzeSlackExport(memorySource(files, LABEL));
    expect(withoutClock(data)).toEqual(withoutClock(expected));
    await expect(source.readText('../outside.json')).rejects.toThrow();
  });

  it('looks one folder down when the export is wrapped', async () => {
    folder = mkdtempSync(join(tmpdir(), 'teamwrapped-test-'));
    write(join(folder, 'unzipped', 'inner export'), sampleExport().files());
    const data = await analyzeSlackExport(dirSource(join(folder, 'unzipped')));
    expect(data.totals.messages).toBe(4);
  });
});

describe('workspace name from the file name', () => {
  it('takes what comes before "Slack export"', () => {
    expect(workspaceNameFromLabel('Acme Inc Slack export Jan 1 2026 - Dec 9 2026.zip')).toBe('Acme Inc');
    expect(workspaceNameFromLabel('/Users/me/Downloads/Acme Inc Slack export Jan 1 2026 - Dec 9 2026.zip')).toBe('Acme Inc');
    expect(workspaceNameFromLabel('C:\\Users\\me\\Downloads\\FizzBuzz Industries Slack export Nov 1 2025 - Nov 16 2026 (1).ZIP')).toBe('FizzBuzz Industries');
    expect(workspaceNameFromLabel('FizzBuzz Industries Slack export Nov 1 2025 - Nov 16 2026/')).toBe('FizzBuzz Industries');
    expect(workspaceNameFromLabel('acme slack export.zip')).toBe('acme');
    expect(workspaceNameFromLabel('Señor Café & Co. Slack export Jan 1 2026 - Dec 9 2026.zip')).toBe('Señor Café & Co.');
  });

  it('falls back to "Your team"', () => {
    for (const label of ['export.zip', '', 'Slack export Jan 1 2026 - Dec 9 2026.zip', 'slackexport.zip', '   ']) {
      expect(workspaceNameFromLabel(label), label).toBe('Your team');
    }
  });
});
