/**
 * Node-only sources. Kept apart from index.ts so that browser bundles never import node:fs.
 */

import { readdir, readFile } from 'node:fs/promises';
import { basename, join, relative, resolve, sep } from 'node:path';
import type { ExportSource } from './types';
import { findExportRoot, preferLabel } from './sources';

/**
 * An unzipped Slack export in a folder. If the folder only wraps the real export (channels.json is
 * one level down), that inner folder is used. The folder's name is the label, unless only the inner
 * folder's name says which workspace this is.
 */
export function dirSource(path: string): ExportSource {
  const base = resolve(path);
  let listing: Promise<{ root: string; paths: string[] }> | undefined;
  let wrapper = '';

  const load = async (): Promise<{ root: string; paths: string[] }> => {
    const found: string[] = [];
    for (const entry of await readdir(base, { recursive: true, withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
      found.push(relative(base, join(entry.parentPath, entry.name)).split(sep).join('/'));
    }
    const root = findExportRoot(found);
    wrapper = root;
    return { root, paths: found.filter((file) => file.startsWith(root)).map((file) => file.slice(root.length)) };
  };

  return {
    // The folder's own name, or the inner folder's when only that one is named like an export.
    get label() {
      return preferLabel(basename(base), wrapper);
    },
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
