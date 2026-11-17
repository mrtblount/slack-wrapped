/** Awards for channels. One channel can hold at most two; a third goes to the next best channel. */

import type { ChannelAward, ChannelStat } from './types';
import { formatInt, formatPercent, formatRate, plural } from './format';
import { monthName } from './time';

type ChannelAwardId = ChannelAward['id'];

export const CHANNEL_AWARD_CATALOG: Record<ChannelAwardId, { title: string; emoji: string; tagline: string }> = {
  busiest: { title: 'The Main Stage', emoji: '🎪', tagline: 'where most of the talking happened' },
  'night-shift': { title: 'The Night Shift', emoji: '🌃', tagline: 'came alive after dark' },
  'thread-city': { title: 'Thread City', emoji: '🏙️', tagline: 'where every message grows a thread' },
  'reaction-magnet': { title: 'The Reaction Magnet', emoji: '🧲', tagline: 'pulled in the most reactions per message' },
  newcomer: { title: 'Best New Channel', emoji: '🐣', tagline: 'the busiest brand-new channel' },
  'ghost-town': { title: 'The Ghost Town', emoji: '👻', tagline: 'opened with high hopes, then went quiet' },
  'tight-knit': { title: 'The Tight-Knit Crew', emoji: '🤝', tagline: 'had the most conversation per person' },
};

const MAX_AWARDS_PER_CHANNEL = 2;
/** A channel has to have existed this long before the period ends to be called a ghost town. */
const GHOST_TOWN_MIN_AGE_DAYS = 30;

export interface ChannelAwardContext {
  /** Day number (days since 1970-01-01, team time) each channel was created, by channel id. */
  createdDay: ReadonlyMap<string, number>;
  /** Day number of the last day of the period. */
  endDay: number;
}

function createdMonth(channel: ChannelStat, context: ChannelAwardContext): string | undefined {
  const day = context.createdDay.get(channel.id);
  if (day === undefined) return undefined;
  return monthName(new Date(day * 86400000).getUTCMonth());
}

/** `channels` must be sorted with the most messages first. */
export function computeChannelAwards(channels: readonly ChannelStat[], context: ChannelAwardContext): ChannelAward[] {
  const held = new Map<string, number>();
  const awards: ChannelAward[] = [];

  const give = (id: ChannelAwardId, ranked: ChannelStat[], display: (c: ChannelStat) => string): void => {
    const channel = ranked.find((c) => (held.get(c.id) ?? 0) < MAX_AWARDS_PER_CHANNEL);
    if (!channel) return;
    held.set(channel.id, (held.get(channel.id) ?? 0) + 1);
    awards.push({ id, ...CHANNEL_AWARD_CATALOG[id], channel: { id: channel.id, name: channel.name }, display: display(channel) });
  };
  /** Highest `score` first; equal scores keep the busier channel ahead. */
  const ranked = (pool: ChannelStat[], score: (c: ChannelStat) => number): ChannelStat[] =>
    pool
      .map((channel, index) => ({ channel, index, value: score(channel) }))
      .sort((a, b) => b.value - a.value || a.index - b.index)
      .map((entry) => entry.channel);

  give('busiest', [...channels], (c) => plural(c.messages, 'message'));

  give(
    'night-shift',
    ranked(channels.filter((c) => c.messages >= 200 && c.nightShare > 0), (c) => c.nightShare),
    (c) => `${formatPercent(c.nightShare)} of messages after 10pm`,
  );

  give(
    'thread-city',
    ranked(channels.filter((c) => c.messages >= 200 && c.threadShare > 0), (c) => c.threadShare),
    (c) => `${formatPercent(c.threadShare)} of messages in threads`,
  );

  give(
    'reaction-magnet',
    ranked(channels.filter((c) => c.messages >= 100 && c.reactionsPerMessage > 0), (c) => c.reactionsPerMessage),
    (c) => `${formatRate(c.reactionsPerMessage)} reactions per message`,
  );

  const born = channels.filter((c) => c.createdInPeriod);
  give('newcomer', born, (c) => {
    const month = createdMonth(c, context);
    return month === undefined ? plural(c.messages, 'message') : `created in ${month}, ${plural(c.messages, 'message')} since`;
  });

  // Fewest messages first; between equals, the one that has been quiet the longest.
  const ageOf = (c: ChannelStat): number => context.endDay - (context.createdDay.get(c.id) ?? context.endDay);
  give(
    'ghost-town',
    born
      .filter((c) => c.messages < 15 && ageOf(c) >= GHOST_TOWN_MIN_AGE_DAYS)
      .sort((a, b) => a.messages - b.messages || ageOf(b) - ageOf(a)),
    (c) => {
      const month = createdMonth(c, context);
      return month === undefined ? plural(c.messages, 'message') : `${plural(c.messages, 'message')} since ${month}`;
    },
  );

  give(
    'tight-knit',
    ranked(channels.filter((c) => c.people >= 3 && c.messages >= 200), (c) => c.messages / c.people),
    (c) => `${formatInt(Math.round(c.messages / c.people))} messages per person`,
  );

  return awards;
}
