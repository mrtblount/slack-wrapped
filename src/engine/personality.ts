/**
 * The team's personality: one archetype chosen from habits that can be measured, with the numbers
 * that back it up. Thresholds are absolute, set well above what an ordinary team does, so most teams
 * that have a strong habit get named for it and the rest are the Steady Hands.
 */

import type { TeamPersonality } from './types';
import { formatAverage, formatInt, formatPercent, formatRate } from './format';
import { hourLabel, weekdayName } from './time';

export interface PersonalityInput {
  messages: number;
  words: number;
  /** Thread replies. */
  replies: number;
  reactions: number;
  /** Messages sent 22:00–04:59 / 05:00–07:59 on each author's own clock. */
  nightMessages: number;
  earlyMessages: number;
  /** Emoji typed in messages (not reactions). */
  typedEmoji: number;
  emojiDistinct: number;
  emojiTotal: number;
  /** 0..23, team time. */
  busiestHour: number;
  /** 0 = Monday. */
  busiestWeekday: number;
}

type Trait = { label: string; value: string };

/** Below this many messages there is not enough to call a habit. */
const MIN_MESSAGES = 50;

const THRESHOLDS = {
  nightShare: 0.1,
  earlyShare: 0.12,
  threadShare: 0.45,
  reactionsPerMessage: 1,
  typedEmojiPerMessage: 0.25,
  longAverage: 20,
  shortAverage: 7,
};

export function choosePersonality(input: PersonalityInput): TeamPersonality {
  const messages = Math.max(1, input.messages);
  const nightShare = input.nightMessages / messages;
  const earlyShare = input.earlyMessages / messages;
  const threadShare = input.replies / messages;
  const reactionsPerMessage = input.reactions / messages;
  const typedEmojiPerMessage = input.typedEmoji / messages;
  const averageWords = input.words / messages;

  const peak: Trait = { label: 'Peak hour', value: hourLabel(input.busiestHour) };
  const day: Trait = { label: 'Busiest day', value: weekdayName(input.busiestWeekday) };
  const threads: Trait = { label: 'In threads', value: formatPercent(threadShare) };
  const reactions: Trait = { label: 'Reactions per message', value: formatRate(reactionsPerMessage) };
  const average: Trait = { label: 'Average message', value: `${formatAverage(averageWords)} words` };

  const candidates: { strength: number; personality: TeamPersonality }[] = [
    {
      strength: nightShare / THRESHOLDS.nightShare,
      personality: {
        id: 'night-owls',
        title: 'The Night Owls',
        description: `Your best conversations happen after dark. ${formatPercent(nightShare)} of your messages were sent between 10pm and 5am.`,
        traits: [{ label: 'After 10pm', value: formatPercent(nightShare) }, peak, day, threads],
      },
    },
    {
      strength: earlyShare / THRESHOLDS.earlyShare,
      personality: {
        id: 'early-birds',
        title: 'The Early Birds',
        description: `Up before the coffee is. ${formatPercent(earlyShare)} of your messages were sent before 8am.`,
        traits: [{ label: 'Before 8am', value: formatPercent(earlyShare) }, peak, day, reactions],
      },
    },
    {
      strength: threadShare / THRESHOLDS.threadShare,
      personality: {
        id: 'thread-heads',
        title: 'The Thread-Heads',
        description: `Nothing stays in the main channel for long. ${formatPercent(threadShare)} of everything you wrote is tucked into a thread.`,
        traits: [threads, peak, day, reactions],
      },
    },
    {
      strength: reactionsPerMessage / THRESHOLDS.reactionsPerMessage,
      personality: {
        id: 'hype-machine',
        title: 'The Hype Machine',
        description: `Post something and the reactions roll in: ${formatRate(reactionsPerMessage)} per message. Nobody celebrates alone here.`,
        traits: [reactions, { label: 'Reactions given', value: formatInt(input.reactions) }, peak, day],
      },
    },
    {
      strength: typedEmojiPerMessage / THRESHOLDS.typedEmojiPerMessage,
      personality: {
        id: 'emoji-maximalists',
        title: 'The Emoji Maximalists',
        description: `Why type it when you can emoji it? You used ${formatInt(input.emojiDistinct)} different emoji a total of ${formatInt(input.emojiTotal)} times.`,
        traits: [{ label: 'Different emoji', value: formatInt(input.emojiDistinct) }, { label: 'Emoji used', value: formatInt(input.emojiTotal) }, peak, day],
      },
    },
    {
      strength: averageWords / THRESHOLDS.longAverage,
      personality: {
        id: 'novelists',
        title: 'The Novelists',
        description: `Short answers are for other teams. Your average message runs ${formatAverage(averageWords)} words.`,
        traits: [average, peak, day, threads],
      },
    },
    {
      strength: averageWords > 0 ? THRESHOLDS.shortAverage / averageWords : 0,
      personality: {
        id: 'rapid-fire',
        title: 'The Rapid-Fire Crew',
        description: `Short, fast and constant. Your average message is ${formatAverage(averageWords)} words long.`,
        traits: [average, peak, day, reactions],
      },
    },
  ];

  let best: { strength: number; personality: TeamPersonality } | undefined;
  if (input.messages >= MIN_MESSAGES) {
    for (const candidate of candidates) {
      if (candidate.strength >= 1 && (best === undefined || candidate.strength > best.strength)) best = candidate;
    }
  }
  if (best !== undefined) return best.personality;

  return {
    id: 'steady-hands',
    title: 'The Steady Hands',
    description: `No 3am chaos and no walls of text. Just a steady hum of conversation that peaks around ${hourLabel(input.busiestHour)}.`,
    traits: [average, peak, day, threads],
  };
}
