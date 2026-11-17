/**
 * Node-only sources. Kept apart from index.ts so that browser bundles never import node:fs.
 */

import { readdir, readFile } from 'node:fs/promises';
import { basename, join, relative, resolve, sep } from 'node:path';
import type { ExportSource } from './types';
import { findExportRoot } from './sources';

/**
 * An unzipped Slack export in a folder. If the folder only wraps the real export (channels.json is
 * one level down), that inner folder is used. The folder's name is the label.
 */
export function dirSource(path: string): ExportSource {
  const base = resolve(path);
  let listing: Promise<{ root: string; paths: string[] }> | undefined;

  const load = async (): Promise<{ root: string; paths: string[] }> => {
    const found: string[] = [];
    for (const entry of await readdir(base, { recursive: true, withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
      found.push(relative(base, join(entry.parentPath, entry.name)).split(sep).join('/'));
    }
    const root = findExportRoot(found);
    return { root, paths: found.filter((file) => file.startsWith(root)).map((file) => file.slice(root.length)) };
  };

  return {
    label: basename(base),
    list: async () => (await (listing ??= load())).paths,
    readText: async (file) => {
      const { root } = await (listing ??= load());
      const parts = (root + file).split('/');
      if (parts.includes('..')) throw new Error(`Not a file of this export: ${file}`);
      const content = await readFile(join(base, ...parts), 'utf8');
      return content.charCodeAt(0) === 0xfeff ? content.slice(1) : content;
    },
  };
}
