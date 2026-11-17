/**
 * The people awards: what each one is, who wins it, and which ones make the default ceremony.
 *
 * The winner is always the true top scorer among the people who qualify. Awards are never handed
 * to someone else to spread them around; spreading happens only in the choice of `featured`.
 */

import type { Award, AwardCategory, AwardEntry, AwardId, AwardTone, Person } from './types';
import { formatAverage, formatDelay, formatInt, formatRate, plural, round2 } from './format';

export interface AwardInfo {
  title: string;
  emoji: string;
  tone: AwardTone;
  category: AwardCategory;
  /** Reads naturally after a name: "Priya sent the most messages". */
  tagline: string;
}

export const AWARD_CATALOG: Record<AwardId, AwardInfo> = {
  yapper: { title: 'The Yapper', emoji: '🗣️', tone: 'wholesome', category: 'volume', tagline: 'sent the most messages' },
  novelist: { title: 'The Novelist', emoji: '📚', tone: 'wholesome', category: 'style', tagline: 'wrote the longest messages' },
  minimalist: { title: 'The Minimalist', emoji: '🤏', tone: 'wholesome', category: 'style', tagline: 'said it in the fewest words' },
  'night-owl': { title: 'The Night Owl', emoji: '🦉', tone: 'wholesome', category: 'timing', tagline: 'posted the most after 10pm' },
  'early-bird': { title: 'The Early Bird', emoji: '🌅', tone: 'wholesome', category: 'timing', tagline: 'posted the most before 8am' },
  'weekend-warrior': { title: 'The Weekend Warrior', emoji: '🏕️', tone: 'spicy', category: 'timing', tagline: 'posted the most on weekends' },
  'first-responder': { title: 'The First Responder', emoji: '🚑', tone: 'wholesome', category: 'social', tagline: 'was first to reply more often than anyone' },
  'thread-starter': { title: 'The Conversation Starter', emoji: '🧵', tone: 'wholesome', category: 'social', tagline: 'started the most threads' },
  'hype-person': { title: 'The Hype Person', emoji: '📣', tone: 'wholesome', category: 'social', tagline: 'gave the most reactions' },
  'crowd-favorite': { title: 'The Crowd Favorite', emoji: '🌟', tone: 'wholesome', category: 'social', tagline: 'earned the most reactions per message' },
  'emoji-artist': { title: 'The Emoji Artist', emoji: '🎨', tone: 'wholesome', category: 'style', tagline: 'used the widest range of emoji' },
  interviewer: { title: 'The Interviewer', emoji: '🎤', tone: 'wholesome', category: 'style', tagline: 'asked the most questions' },
  'link-librarian': { title: 'The Link Librarian', emoji: '🔗', tone: 'wholesome', category: 'craft', tagline: 'shared the most links' },
  'meme-dealer': { title: 'The Meme Dealer', emoji: '🖼️', tone: 'wholesome', category: 'craft', tagline: 'posted the most images' },
  'town-crier': { title: 'The Town Crier', emoji: '🔔', tone: 'spicy', category: 'social', tagline: 'rang the @channel bell the most' },
  editor: { title: 'The Perfectionist', emoji: '✏️', tone: 'spicy', category: 'craft', tagline: 'edited the most messages' },
  'caps-lock-captain': { title: 'The Caps Lock Captain', emoji: '📢', tone: 'spicy', category: 'style', tagline: 'wrote the most messages IN ALL CAPS' },
  connector: { title: 'The Connector', emoji: '🕸️', tone: 'wholesome', category: 'social', tagline: '@mentioned teammates the most' },
  'most-wanted': { title: 'Most Wanted', emoji: '🎯', tone: 'wholesome', category: 'social', tagline: 'got @mentioned the most' },
  explorer: { title: 'The Explorer', emoji: '🧭', tone: 'wholesome', category: 'craft', tagline: 'was active in the most channels' },
  'channel-founder': { title: 'The Channel Founder', emoji: '🏗️', tone: 'wholesome', category: 'craft', tagline: 'created the most channels' },
  'streak-master': { title: 'The Streak Master', emoji: '🔥', tone: 'wholesome', category: 'timing', tagline: 'kept the longest weekday streak' },
  'huddle-hero': { title: 'The Huddle Hero', emoji: '🎧', tone: 'wholesome', category: 'social', tagline: 'spent the most time in huddles' },
  'gratitude-champion': { title: 'The Gratitude Champion', emoji: '🙏', tone: 'wholesome', category: 'social', tagline: 'said thanks the most' },
  'most-thanked': { title: 'The Most Thanked', emoji: '💐', tone: 'wholesome', category: 'social', tagline: 'got thanked the most' },
  'laugh-track': { title: 'The Laugh Track', emoji: '😂', tone: 'wholesome', category: 'style', tagline: 'laughed the most' },
  'monologue-master': { title: 'The Monologue Master', emoji: '🎭', tone: 'spicy', category: 'style', tagline: 'posted the most messages in a row' },
  opener: { title: 'The Opener', emoji: '☀️', tone: 'wholesome', category: 'timing', tagline: 'had the first word of the day most often' },
  closer: { title: 'The Closer', emoji: '🌙', tone: 'wholesome', category: 'timing', tagline: 'had the last word of the day most often' },
  rookie: { title: 'Rookie of the Year', emoji: '🌱', tone: 'wholesome', category: 'volume', tagline: 'sent the most messages of anyone who joined this year' },
  'emoji-connoisseur': { title: 'The Custom Emoji Connoisseur', emoji: '🦜', tone: 'wholesome', category: 'style', tagline: 'used the most custom emoji' },
};

/** The four headline awards, in the order they close the ceremony. */
const FINALE: AwardId[] = ['first-responder', 'crowd-favorite', 'hype-person', 'yapper'];
const CATEGORY_ORDER: AwardCategory[] = ['craft', 'style', 'timing', 'social', 'volume'];

/**
 * Ceremony order: wholesome craft and style first, then timing, then social, then the spicy ones,
 * and the four headline awards last. Within a group, catalog order.
 */
export const AWARD_ORDER: AwardId[] = (() => {
  const ids = Object.keys(AWARD_CATALOG) as AwardId[];
  const body = ids.filter((id) => !FINALE.includes(id));
  const wholesome = CATEGORY_ORDER.flatMap((category) =>
    body.filter((id) => AWARD_CATALOG[id].tone === 'wholesome' && AWARD_CATALOG[id].category === category),
  );
  const spicy = body.filter((id) => AWARD_CATALOG[id].tone === 'spicy');
  return [...wholesome, ...spicy, ...FINALE];
})();

export interface AwardContext {
  /** Human messages sent by the whole team in the period. */
  totalMessages: number;
  /** "joined in March" for people who joined in the period (keyed by person id). */
  arrival: ReadonlyMap<string, string>;
}

interface Rule {
  /** The score. Higher wins unless `lowest` is set. */
  value(p: Person): number;
  eligible(p: Person): boolean;
  display(value: number, p: Person): string;
  lowest?: boolean;
}

const times = (n: number): string => plural(n, 'time');

function rules(context: AwardContext): Record<AwardId, Rule> {
  const s = (p: Person) => p.stats;
  return {
    yapper: {
      value: (p) => s(p).messages,
      eligible: () => true,
      display: (v) => plural(v, 'message'),
    },
    novelist: {
      value: (p) => s(p).words / s(p).messages,
      eligible: (p) => s(p).messages >= 50,
      display: (v) => `${formatAverage(v)} words per message`,
    },
    minimalist: {
      value: (p) => s(p).words / s(p).messages,
      eligible: (p) => s(p).messages >= 100,
      display: (v) => `${formatAverage(v)} words per message`,
      lowest: true,
    },
    'night-owl': {
      value: (p) => s(p).nightMessages,
      eligible: (p) => s(p).nightMessages >= 15,
      display: (v) => `${plural(v, 'message')} after 10pm`,
    },
    'early-bird': {
      value: (p) => s(p).earlyMessages,
      eligible: (p) => s(p).earlyMessages >= 15,
      display: (v) => `${plural(v, 'message')} before 8am`,
    },
    'weekend-warrior': {
      value: (p) => s(p).weekendMessages,
      eligible: (p) => s(p).weekendMessages >= 15,
      display: (v) => plural(v, 'weekend message'),
    },
    'first-responder': {
      value: (p) => s(p).firstReplies,
      eligible: (p) => s(p).firstReplies >= 10,
      display: (v, p) => {
        const median = s(p).medianReplySeconds;
        const base = `first to reply ${times(v)}`;
        return median === undefined ? base : `${base}, usually within ${formatDelay(median)}`;
      },
    },
    'thread-starter': {
      value: (p) => s(p).threadsStarted,
      eligible: (p) => s(p).threadsStarted >= 10,
      display: (v) => `started ${plural(v, 'thread')}`,
    },
    'hype-person': {
      value: (p) => s(p).reactionsGiven,
      eligible: (p) => s(p).reactionsGiven >= 50,
      display: (v) => `gave ${plural(v, 'reaction')}`,
    },
    'crowd-favorite': {
      value: (p) => s(p).reactionsReceived / s(p).messages,
      eligible: (p) => s(p).messages >= 100 && s(p).reactionsReceived > 0,
      display: (v) => `${formatRate(v)} reactions per message`,
    },
    'emoji-artist': {
      value: (p) => s(p).distinctEmoji,
      eligible: (p) => s(p).distinctEmoji >= 20,
      display: (v) => `used ${formatInt(v)} different emoji`,
    },
    interviewer: {
      value: (p) => s(p).questions,
      eligible: (p) => s(p).questions >= 30,
      display: (v) => `asked ${plural(v, 'question')}`,
    },
    'link-librarian': {
      value: (p) => s(p).links,
      eligible: (p) => s(p).links >= 20,
      display: (v) => `shared ${plural(v, 'link')}`,
    },
    'meme-dealer': {
      value: (p) => s(p).images,
      eligible: (p) => s(p).images >= 15,
      display: (v) => `posted ${plural(v, 'image')}`,
    },
    'town-crier': {
      value: (p) => s(p).broadcasts,
      eligible: (p) => s(p).broadcasts >= 5,
      display: (v) => `rang the bell ${times(v)}`,
    },
    editor: {
      value: (p) => s(p).edits,
      eligible: (p) => s(p).edits >= 20,
      display: (v) => `edited ${plural(v, 'message')}`,
    },
    'caps-lock-captain': {
      value: (p) => s(p).shouts,
      eligible: (p) => s(p).shouts >= 10,
      display: (v) => `SHOUTED ${formatInt(v)} ${Math.round(v) === 1 ? 'TIME' : 'TIMES'}`,
    },
    connector: {
      value: (p) => s(p).mentionsMade,
      eligible: (p) => s(p).mentionsMade >= 30,
      display: (v) => `mentioned teammates ${times(v)}`,
    },
    'most-wanted': {
      value: (p) => s(p).mentionsReceived,
      eligible: (p) => s(p).mentionsReceived >= 20,
      display: (v) => `was @mentioned ${times(v)}`,
    },
    explorer: {
      value: (p) => s(p).channelsActive,
      eligible: (p) => s(p).channelsActive >= 5,
      display: (v) => `posted in ${plural(v, 'channel')}`,
    },
    'channel-founder': {
      value: (p) => s(p).channelsCreated,
      eligible: (p) => s(p).channelsCreated >= 2,
      display: (v) => `created ${plural(v, 'channel')}`,
    },
    'streak-master': {
      value: (p) => s(p).longestStreak,
      eligible: (p) => s(p).longestStreak >= 10,
      display: (v) => `${formatInt(v)} weekdays in a row`,
    },
    'huddle-hero': {
      value: (p) => s(p).huddleMinutes,
      eligible: (p) => s(p).huddleMinutes >= 60,
      display: (v) => (v >= 120 ? `${plural(Math.round(v / 60), 'hour')} in huddles` : `${plural(v, 'minute')} in huddles`),
    },
    'gratitude-champion': {
      value: (p) => s(p).thanksGiven,
      eligible: (p) => s(p).thanksGiven >= 15,
      display: (v) => `said thanks ${times(v)}`,
    },
    'most-thanked': {
      value: (p) => s(p).thanksReceived,
      eligible: (p) => s(p).thanksReceived >= 10,
      display: (v) => `was thanked ${times(v)}`,
    },
    'laugh-track': {
      value: (p) => s(p).laughs,
      eligible: (p) => s(p).laughs >= 20,
      display: (v) => `laughed ${times(v)}`,
    },
    'monologue-master': {
      value: (p) => s(p).longestMonologue,
      eligible: (p) => s(p).longestMonologue >= 6,
      display: (v) => `${formatInt(v)} messages in a row`,
    },
    opener: {
      value: (p) => s(p).dayStarters,
      eligible: (p) => s(p).dayStarters >= 10,
      display: (v) => `had the first word ${times(v)}`,
    },
    closer: {
      value: (p) => s(p).dayClosers,
      eligible: (p) => s(p).dayClosers >= 10,
      display: (v) => `had the last word ${times(v)}`,
    },
    rookie: {
      value: (p) => s(p).messages,
      eligible: (p) => p.joinedInPeriod && s(p).messages >= 30,
      display: (v, p) => {
        const arrival = context.arrival.get(p.id);
        return arrival === undefined ? `${plural(v, 'message')} since joining` : `${arrival}, ${plural(v, 'message')} since`;
      },
    },
    'emoji-connoisseur': {
      value: (p) => s(p).customEmojiUses,
      eligible: (p) => s(p).customEmojiUses >= 15,
      display: (v) => `used custom emoji ${times(v)}`,
    },
  };
}

/** People with fewer messages than this are not in the running for anything. */
export function minimumMessages(totalMessages: number): number {
  return totalMessages < 2000 ? 10 : 25;
}

/**
 * Every award that has a qualifying winner, in ceremony order, with `featured` decided.
 * `people` must be sorted by rank (most messages first).
 */
export function computeAwards(people: readonly Person[], context: AwardContext): Award[] {
  const floor = minimumMessages(context.totalMessages);
  const inTheRunning = people.filter((p) => p.stats.messages >= floor);
  const ruleBook = rules(context);
  const awards: Award[] = [];

  for (const id of AWARD_ORDER) {
    const rule = ruleBook[id];
    const scored: { person: Person; value: number }[] = [];
    for (const person of inTheRunning) {
      if (!rule.eligible(person)) continue;
      const value = rule.value(person);
      if (!Number.isFinite(value)) continue;
      if (!rule.lowest && value <= 0) continue;
      scored.push({ person, value });
    }
    if (scored.length === 0) continue;
    // Best score first; ties go to whoever sent more messages, which is the order of `people`.
    scored.sort((a, b) => (rule.lowest ? a.value - b.value : b.value - a.value) || a.person.rank - b.person.rank);
    const entries: AwardEntry[] = scored.slice(0, 3).map(({ person, value }) => ({
      person: person.id,
      value: Number.isInteger(value) ? value : round2(value),
      display: rule.display(value, person),
    }));
    const info = AWARD_CATALOG[id];
    awards.push({
      id,
      title: info.title,
      emoji: info.emoji,
      tone: info.tone,
      category: info.category,
      tagline: info.tagline,
      winner: entries[0]!,
      runnersUp: entries.slice(1),
      featured: false,
    });
  }

  chooseFeatured(awards);
  return awards;
}

const MAX_FEATURED_WHOLESOME = 12;
const MAX_FEATURED_SPICY = 3;
const MAX_FEATURED_PER_WINNER = 2;

/**
 * Picks the default ceremony. The headline awards are always in, along with whichever of Night Owl
 * and Early Bird has the bigger number. Then wholesome awards are added in order as long as their
 * winner holds fewer than two featured awards, up to twelve; and up to three spicy awards with
 * three different winners.
 */
export function chooseFeatured(awards: Award[]): void {
  const byId = new Map<AwardId, Award>();
  for (const award of awards) {
    award.featured = false;
    byId.set(award.id, award);
  }
  const held = new Map<string, number>();
  let wholesome = 0;
  const feature = (award: Award): void => {
    award.featured = true;
    wholesome++;
    held.set(award.winner.person, (held.get(award.winner.person) ?? 0) + 1);
  };

  for (const id of ['yapper', 'hype-person', 'first-responder', 'crowd-favorite'] as const) {
    const award = byId.get(id);
    if (award) feature(award);
  }
  const owl = byId.get('night-owl');
  const bird = byId.get('early-bird');
  if (owl && bird) feature(bird.winner.value > owl.winner.value ? bird : owl);
  else if (owl) feature(owl);
  else if (bird) feature(bird);

  for (const award of awards) {
    if (wholesome >= MAX_FEATURED_WHOLESOME) break;
    if (award.featured || award.tone !== 'wholesome') continue;
    if ((held.get(award.winner.person) ?? 0) < MAX_FEATURED_PER_WINNER) feature(award);
  }

  const spicyWinners = new Set<string>();
  for (const award of awards) {
    if (spicyWinners.size >= MAX_FEATURED_SPICY) break;
    if (award.tone !== 'spicy' || spicyWinners.has(award.winner.person)) continue;
    award.featured = true;
    spicyWinners.add(award.winner.person);
  }
}
