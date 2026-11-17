/**
 * Message text: one cleaning pass per message, and everything the stats need derived from it.
 *
 * Slack stores text with its own markup: <@U…> mentions, <#C…|name> channel links, <!here> style
 * broadcasts, <https://url|label> links, :shortcode: emoji, three HTML entities, and backticks for
 * code. `TextAnalyzer.analyze` turns that into facts; `TextAnalyzer.display` into readable text.
 */

import {
  canonicalEmoji,
  emojiChar,
  emojiNameFromChar,
  isStandardEmoji,
  JOY,
  ROFL,
  UNICODE_EMOJI,
} from './emoji';

/** Ways of laughing we recognise. A message counts once per style it contains. */
export const LAUGH_STYLES = ['haha', 'hehe', 'lol', 'lmao', 'rofl', 'jaja', 'kkk', '😂', '🤣'] as const;

const LAUGH_JOY = 7;
const LAUGH_ROFL = 8;

export interface TextResolver {
  /** Display name for a user id, used to turn <@U…> into @name. */
  userName(id: string): string | undefined;
  /** Channel name for a channel id, used when a channel link carries no label. */
  channelName(id: string): string | undefined;
}

export interface TextFacts {
  /** Length of the cleaned text. */
  characters: number;
  /** Words of prose: code, links, mentions and emoji do not count. */
  words: number;
  /** A "?" outside links and code. */
  question: boolean;
  exclaim: boolean;
  /** At least 8 letters, at least 80% of them capitals. */
  shout: boolean;
  thanks: boolean;
  /** http(s) links. */
  links: number;
  /** @here, @channel, @everyone. */
  broadcasts: number;
  /** Distinct user ids mentioned. */
  mentions: string[];
  /** Canonical names of emoji typed in the text (shortcodes or Unicode), repeats included. */
  emoji: string[];
  /** Bit i is set when the message contains LAUGH_STYLES[i]. */
  laughs: number;
  /** Lowercased vocabulary words: letters only, three or more of them, stopwords already removed. */
  tokens: string[];
}

const CODE_BLOCK = /```[\s\S]*?(?:```|$)/g;
const CODE_SPAN = /`[^`\n]*`/g;
const CODE_SPAN_KEEP = /`([^`\n]*)`/g;
const ANGLE = /<([^<>]+)>/g;
const ENTITY = /&(amp|lt|gt);/g;
const SCHEME = /^[a-z][a-z0-9+.\-]*:/i;
const HTTP = /^https?:\/\//i;
const SHORTCODE = /:([\p{L}\p{N}_+'\-]+)(?:::(skin-tone-[2-6]))?:/gu;
const TOKEN = /\p{L}[\p{L}\p{M}]*(?:['’]\p{L}[\p{L}\p{M}]*)*/gu;
const DIGITS = /^\d+$/;
const WHITESPACE = /\s+/g;

const THANKS =
  /(?:^|[^\p{L}\p{N}])(?:thank(?:s|ed|ful|ing)?|thankyou|thx|thnx|ty|tysm|tyvm|appreciat(?:e|es|ed|ing|ion)|kudos|shout[\s-]?outs?|gracias|merci|danke(?:sch[oö]n)?|obrigad[oa]s?|grazie|bedankt)(?![\p{L}\p{N}])/u;

const HAHA = /^(?:bw?|mu|mw)?[ha]*(?:haha|ahah)[ha]*$/;
const HEHE = /^[he]*(?:hehe|eheh)[he]*$/;
const LOL = /^l+o+l+(?:o+l+)*z?$/;
const LMAO = /^lmf?a+o+$/;
const ROFL_WORD = /^rot?fl+(?:mao)?$/;
const JAJA = /^[ja]*(?:jaja|ajaj)[ja]*$/;
const KKK = /^k{3,}$/;

function decodeEntity(_whole: string, name: string): string {
  return name === 'amp' ? '&' : name === 'lt' ? '<' : '>';
}

function isAsciiAlnum(code: number): boolean {
  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

/** The index into LAUGH_STYLES for a lowercase word, or -1. Cheap checks first: almost no word is a laugh. */
function laughStyle(word: string): number {
  if (word.length < 3) return -1;
  switch (word.charCodeAt(0)) {
    case 97: // a
    case 98: // b
    case 104: // h
    case 109: // m
      if (word.indexOf('hah') >= 0) return HAHA.test(word) ? 0 : -1;
      if (word.indexOf('jaj') >= 0) return JAJA.test(word) ? 5 : -1;
      return word.indexOf('heh') >= 0 && HEHE.test(word) ? 1 : -1;
    case 101: // e
      return word.indexOf('heh') >= 0 && HEHE.test(word) ? 1 : -1;
    case 108: {
      // l
      const second = word.charCodeAt(1);
      if (second === 111 || second === 108) return LOL.test(word) ? 2 : -1;
      return second === 109 && LMAO.test(word) ? 3 : -1;
    }
    case 114: // r
      return word.charCodeAt(1) === 111 && ROFL_WORD.test(word) ? 4 : -1;
    case 106: // j
      return word.indexOf('jaj') >= 0 && JAJA.test(word) ? 5 : -1;
    case 107: // k
      return word.charCodeAt(1) === 107 && KKK.test(word) ? 6 : -1;
    default:
      return -1;
  }
}

/** Host of a link for display ("github.com"), or the address of a mailto link. */
function hostOf(url: string): string {
  let rest = url;
  const scheme = rest.indexOf('://');
  if (scheme >= 0) {
    rest = rest.slice(scheme + 3);
    const cut = rest.search(/[/?#]/);
    if (cut >= 0) rest = rest.slice(0, cut);
    const at = rest.lastIndexOf('@');
    if (at >= 0) rest = rest.slice(at + 1);
  } else {
    rest = rest.slice(rest.indexOf(':') + 1);
    const cut = rest.search(/[?#]/);
    if (cut >= 0) rest = rest.slice(0, cut);
  }
  return rest.startsWith('www.') ? rest.slice(4) : rest;
}

/** A link label counts as prose when it reads like words rather than like an address. */
function isProseLabel(label: string, target: string): boolean {
  if (label === '' || label === target) return false;
  if (label.indexOf(' ') >= 0) return !HTTP.test(label);
  return label.indexOf('.') < 0 && label.indexOf('/') < 0 && label.indexOf('@') < 0;
}

/** Cuts to at most `limit` characters, ending with an ellipsis when something was removed. */
export function truncateText(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const chars = Array.from(text);
  if (chars.length <= limit) return text;
  return `${chars.slice(0, limit - 1).join('').trimEnd()}…`;
}

function emptyFacts(): TextFacts {
  return {
    characters: 0,
    words: 0,
    question: false,
    exclaim: false,
    shout: false,
    thanks: false,
    links: 0,
    broadcasts: 0,
    mentions: [],
    emoji: [],
    laughs: 0,
    tokens: [],
  };
}

export function countBits(mask: number): number {
  let n = 0;
  for (let m = mask; m !== 0; m &= m - 1) n++;
  return n;
}

export class TextAnalyzer {
  private readonly facts = emptyFacts();
  private readonly scratch = emptyFacts();
  /** Outputs of `resolve`: text for people to read, and the same text with only the prose left. */
  private clean = '';
  private prose = '';

  constructor(
    private readonly resolver: TextResolver,
    /** Lowercase words kept out of the vocabulary: stopwords, people's names, channel names. */
    private readonly blocked: ReadonlySet<string>,
  ) {}

  /**
   * Derives every text fact for one message. The returned object is reused by the next call, so
   * read what you need from it straight away.
   */
  analyze(raw: string): TextFacts {
    const facts = this.facts;
    facts.characters = 0;
    facts.words = 0;
    facts.question = false;
    facts.exclaim = false;
    facts.shout = false;
    facts.thanks = false;
    facts.links = 0;
    facts.broadcasts = 0;
    facts.mentions.length = 0;
    facts.emoji.length = 0;
    facts.laughs = 0;
    facts.tokens.length = 0;
    if (raw === '') return facts;

    let text = raw;
    if (text.indexOf('`') >= 0) {
      if (text.indexOf('```') >= 0) text = text.replace(CODE_BLOCK, ' ');
      text = text.replace(CODE_SPAN, ' ');
    }
    this.resolve(text, facts);
    facts.characters = this.clean.trim().length;

    let prose = this.prose;
    if (prose.indexOf(':') >= 0) prose = this.takeShortcodes(prose, facts);
    this.scan(prose, facts);

    const lower = prose.toLowerCase();
    facts.thanks = THANKS.test(lower);
    this.tokenize(lower, facts);

    for (let i = 0; i < facts.emoji.length; i++) {
      const name = facts.emoji[i];
      if (name === JOY) facts.laughs |= 1 << LAUGH_JOY;
      else if (name === ROFL) facts.laughs |= 1 << LAUGH_ROFL;
    }
    return facts;
  }

  /**
   * Readable text for showing a message: mentions and links resolved, standard emoji as characters,
   * code blocks dropped, whitespace collapsed, cut to `limit` characters.
   */
  display(raw: string, limit = 280): string {
    let text = raw;
    if (text.indexOf('`') >= 0) text = text.replace(CODE_BLOCK, ' ').replace(CODE_SPAN_KEEP, '$1');
    const scratch = this.scratch;
    scratch.mentions.length = 0;
    this.resolve(text, scratch);
    let out = this.clean;
    if (out.indexOf(':') >= 0) {
      out = out.replace(SHORTCODE, (whole: string, name: string, tone: string | undefined) => emojiChar(name, tone) ?? whole);
    }
    return truncateText(out.replace(WHITESPACE, ' ').trim(), limit);
  }

  /** Resolves <…> markup and entities into `this.clean` and `this.prose`, counting links, broadcasts and mentions. */
  private resolve(text: string, facts: TextFacts): void {
    if (text.indexOf('<') < 0) {
      this.clean = text;
      this.prose = text;
    } else {
      let clean = '';
      let prose = '';
      let last = 0;
      ANGLE.lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = ANGLE.exec(text)) !== null) {
        const before = text.slice(last, match.index);
        clean += before;
        prose += before;
        last = match.index + match[0].length;
        const inner = match[1]!;
        const bar = inner.indexOf('|');
        const target = bar < 0 ? inner : inner.slice(0, bar);
        const label = bar < 0 ? '' : inner.slice(bar + 1);
        const kind = inner.charCodeAt(0);
        if (kind === 64) {
          // <@U123> or the older <@U123|name>
          const id = target.slice(1);
          clean += `@${this.resolver.userName(id) ?? (label !== '' ? label : 'someone')}`;
          prose += ' ';
          if (id !== '' && facts.mentions.indexOf(id) < 0) facts.mentions.push(id);
        } else if (kind === 35) {
          // <#C123|general>
          clean += `#${label !== '' ? label : (this.resolver.channelName(target.slice(1)) ?? 'channel')}`;
          prose += ' ';
        } else if (kind === 33) {
          // <!here>, <!channel>, <!everyone>, <!subteam^S123|@group>, <!date^…|fallback>
          const command = target.slice(1);
          if (command === 'here' || command === 'channel' || command === 'everyone' || command === 'group') {
            facts.broadcasts++;
            clean += `@${command === 'group' ? 'channel' : command}`;
          } else if (label !== '') {
            clean += label;
          } else if (command.startsWith('subteam')) {
            clean += '@group';
          }
          prose += ' ';
        } else if (SCHEME.test(target)) {
          if (HTTP.test(target)) facts.links++;
          clean += label !== '' ? label : hostOf(target);
          prose += isProseLabel(label, target) ? ` ${label} ` : ' ';
        } else {
          // Not markup after all (text posted through the API can hold a bare "<").
          clean += match[0];
          prose += match[0];
        }
      }
      const tail = text.slice(last);
      this.clean = clean + tail;
      this.prose = prose + tail;
    }
    if (this.clean.indexOf('&') >= 0) {
      this.clean = this.clean.replace(ENTITY, decodeEntity);
      this.prose = this.prose.replace(ENTITY, decodeEntity);
    }
  }

  /** Collects :shortcode: emoji from the prose and returns the prose without them. */
  private takeShortcodes(prose: string, facts: TextFacts): string {
    let out = '';
    let last = 0;
    let acceptedEnd = -1;
    SHORTCODE.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = SHORTCODE.exec(prose)) !== null) {
      const name = match[1]!;
      const start = match.index;
      const end = start + match[0].length;
      const previous = start > 0 ? prose.charCodeAt(start - 1) : 32;
      const next = end < prose.length ? prose.charCodeAt(end) : 32;
      const glued = start === acceptedEnd;
      const canonical = canonicalEmoji(name);
      let accepted = false;
      if (canonical !== null) {
        if (isStandardEmoji(canonical)) {
          // ":100:" is an emoji, the ":30:" in "10:30:00" is not.
          accepted = glued || !(DIGITS.test(name) && isAsciiAlnum(previous));
        } else {
          // A custom emoji cannot be checked against a list, so be strict about what looks like one.
          accepted =
            name.length >= 2 &&
            !DIGITS.test(name) &&
            name === name.toLowerCase() &&
            (glued || (previous !== 58 && !isAsciiAlnum(previous))) &&
            !isAsciiAlnum(next);
        }
      }
      if (accepted && canonical !== null) {
        facts.emoji.push(canonical);
        out += `${prose.slice(last, start)} `;
        last = end;
        acceptedEnd = end;
      } else {
        // Try again from the next character so "10:30:tada:" still finds :tada:.
        SHORTCODE.lastIndex = start + 1;
      }
    }
    return out + prose.slice(last);
  }

  /** One pass over the prose: word count, capitals, question and exclamation marks, Unicode emoji. */
  private scan(prose: string, facts: TextFacts): void {
    let words = 0;
    let inChunk = false;
    let chunkHasWord = false;
    let upper = 0;
    let lower = 0;
    let cjk = 0;
    let maybeEmoji = false;
    const length = prose.length;
    for (let i = 0; i < length; i++) {
      const code = prose.charCodeAt(i);
      if (code <= 32 || code === 0xa0 || code === 0x3000) {
        if (inChunk && chunkHasWord) words++;
        inChunk = false;
        chunkHasWord = false;
        continue;
      }
      inChunk = true;
      if (code < 128) {
        if (code >= 97 && code <= 122) {
          lower++;
          chunkHasWord = true;
        } else if (code >= 65 && code <= 90) {
          upper++;
          chunkHasWord = true;
        } else if (code >= 48 && code <= 57) {
          chunkHasWord = true;
        } else if (code === 63) {
          facts.question = true;
        } else if (code === 33) {
          facts.exclaim = true;
        }
      } else if (code < 0xc0) {
        // Latin-1 punctuation and symbols (« » ¿ ¡ ° …): not words.
      } else if (code < 0x2000) {
        // Accented Latin, Greek, Cyrillic and friends: letters with case.
        chunkHasWord = true;
        const char = prose[i]!;
        const asUpper = char.toUpperCase();
        if (asUpper !== char.toLowerCase()) {
          if (char === asUpper) upper++;
          else lower++;
        }
      } else if ((code >= 0x3040 && code <= 0x30ff) || (code >= 0x3400 && code <= 0x9fff)) {
        // Japanese and Chinese are written without spaces: count about two characters per word.
        cjk++;
      } else if (code === 0xff1f) {
        facts.question = true;
      } else if (code === 0xff01) {
        facts.exclaim = true;
      } else if (code < 0x2c00 || (code >= 0xd800 && code <= 0xdfff) || (code >= 0xfe00 && code <= 0xfe0f)) {
        // Punctuation, symbols, emoji and their selectors: not words.
        if (code >= 0x203c) maybeEmoji = true;
      } else if (code < 0x3040 && code >= 0x3000) {
        // CJK punctuation.
      } else {
        chunkHasWord = true;
      }
    }
    if (inChunk && chunkHasWord) words++;
    facts.words = words + Math.ceil(cjk / 2);
    const letters = upper + lower;
    facts.shout = letters >= 8 && upper >= letters * 0.8;

    if (maybeEmoji) {
      UNICODE_EMOJI.lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = UNICODE_EMOJI.exec(prose)) !== null) {
        const name = emojiNameFromChar(match[0]);
        if (name !== null) facts.emoji.push(name);
      }
    }
  }

  /** Splits lowercased prose into vocabulary words and spots laughs. */
  private tokenize(lower: string, facts: TextFacts): void {
    const blocked = this.blocked;
    TOKEN.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = TOKEN.exec(lower)) !== null) {
      const word = match[0];
      const laugh = laughStyle(word);
      if (laugh >= 0) {
        facts.laughs |= 1 << laugh;
        continue;
      }
      if (word.length < 3 || word.length > 32) continue;
      if (word.indexOf("'") < 0 && word.indexOf('’') < 0) {
        if (!blocked.has(word)) facts.tokens.push(word);
        continue;
      }
      // "don't" is a stopword as a whole; "team's" and "l'équipe" give "team" and "équipe".
      const plain = word.replace(/’/g, "'");
      if (blocked.has(plain)) continue;
      for (const piece of plain.split("'")) {
        if (piece.length >= 3 && !blocked.has(piece)) facts.tokens.push(piece);
      }
    }
  }
}
