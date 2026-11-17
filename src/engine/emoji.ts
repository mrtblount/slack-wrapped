/**
 * Emoji names. Slack stores emoji as shortcodes (":tada:", reactions as "tada"); a name found in
 * emoji-shortcodes.json is a standard emoji, anything else is a custom workspace emoji.
 */

import type { EmojiRef } from './types';
import shortcodeTable from './data/emoji-shortcodes.json';

const SHORTCODES = shortcodeTable as Record<string, string>;

const SKIN_TONE = /[\u{1F3FB}-\u{1F3FF}]/gu;
const VARIATION_SELECTOR = /️/g;

/** Shortcode → the one name all its aliases are counted under (":thumbsup:" and ":+1:" are the same emoji). */
const canonicalByName = new Map<string, string>();
/** Unicode character(s) → canonical shortcode. */
const canonicalByChar = new Map<string, string>();
const charByCanonical = new Map<string, string>();

for (const name of Object.keys(SHORTCODES)) {
  const char = SHORTCODES[name]!;
  if (name.startsWith('skin-tone-')) continue;
  let canonical = canonicalByChar.get(char);
  if (canonical === undefined) {
    canonical = name;
    canonicalByChar.set(char, name);
    charByCanonical.set(name, char);
    const bare = char.replace(VARIATION_SELECTOR, '');
    if (bare !== char && !canonicalByChar.has(bare)) canonicalByChar.set(bare, name);
  }
  canonicalByName.set(name, canonical);
}

const TONE_CHARS: Record<string, string> = {
  'skin-tone-2': '\u{1F3FB}',
  'skin-tone-3': '\u{1F3FC}',
  'skin-tone-4': '\u{1F3FD}',
  'skin-tone-5': '\u{1F3FE}',
  'skin-tone-6': '\u{1F3FF}',
};

/** Matches one emoji typed as Unicode: flags, keycaps, and pictographs with their modifiers and joiners. */
export const UNICODE_EMOJI =
  /[\u{1F1E6}-\u{1F1FF}]{2}|[#*0-9]️?⃣|\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}]|‍\p{Extended_Pictographic})*/gu;

/**
 * Normalises a reaction or shortcode name: drops a skin-tone suffix ("+1::skin-tone-3" → "+1") and
 * folds aliases of standard emoji together. Returns null for names that are not emoji on their own.
 */
export function canonicalEmoji(rawName: string): string | null {
  const cut = rawName.indexOf('::');
  const name = cut < 0 ? rawName : rawName.slice(0, cut);
  if (name === '' || name.startsWith('skin-tone-')) return null;
  return canonicalByName.get(name) ?? name;
}

export function isStandardEmoji(canonicalName: string): boolean {
  return charByCanonical.has(canonicalName);
}

/** The shortcode a Unicode emoji is counted under, or null when it is not in the table. */
export function emojiNameFromChar(sequence: string): string | null {
  let name = canonicalByChar.get(sequence);
  if (name !== undefined) return name;
  const toneless = sequence.replace(SKIN_TONE, '');
  name = canonicalByChar.get(toneless);
  if (name !== undefined) return name;
  const bare = toneless.replace(VARIATION_SELECTOR, '');
  name = canonicalByChar.get(bare);
  if (name !== undefined) return name;
  const first = String.fromCodePoint(bare.codePointAt(0) ?? 0);
  return canonicalByChar.get(first) ?? null;
}

export function emojiRef(canonicalName: string): EmojiRef {
  const char = charByCanonical.get(canonicalName);
  return char === undefined ? { name: canonicalName } : { name: canonicalName, char };
}

/** The character for a typed shortcode, with an optional skin tone ("wave", "skin-tone-3" → 👋🏼). */
export function emojiChar(rawName: string, tone?: string): string | undefined {
  const canonical = canonicalByName.get(rawName);
  if (canonical === undefined) return undefined;
  const char = charByCanonical.get(canonical)!;
  const toneChar = tone === undefined ? undefined : TONE_CHARS[tone];
  if (toneChar === undefined) return char;
  // The modifier follows the first code point and replaces its variation selector.
  const first = String.fromCodePoint(char.codePointAt(0) ?? 0);
  const rest = char.slice(first.length).replace(/^️/, '');
  return first + toneChar + rest;
}

export const JOY = canonicalEmoji('joy') ?? 'joy';
export const ROFL = canonicalEmoji('rolling_on_the_floor_laughing') ?? 'rolling_on_the_floor_laughing';
