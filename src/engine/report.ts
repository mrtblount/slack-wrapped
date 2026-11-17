/** A plain-text rendering of WrappedData, used by the command-line tool. */

import type { Award, AwardEntry, WrappedData } from './types';
import { formatInt } from './format';
import { hourLabel, monthName, weekdayName } from './time';

function pad(value: string, width: number): string {
  return value.length >= width ? value : value + ' '.repeat(width - value.length);
}

function padLeft(value: string, width: number): string {
  return value.length >= width ? value : ' '.repeat(width - value.length) + value;
}

function clip(value: string, width: number): string {
  return value.length <= width ? value : `${value.slice(0, width - 1)}…`;
}

function emojiLabel(emoji: { name: string; char?: string }): string {
  return emoji.char ?? `:${emoji.name}:`;
}

export function renderReport(data: WrappedData, showText = true): string {
  const out: string[] = [];
  const line = (text = ''): void => {
    out.push(text);
  };
  const heading = (title: string): void => {
    line();
    line(title);
    line('-'.repeat(title.length));
  };
  const names = new Map(data.people.map((p) => [p.id, p.name]));
  const who = (id: string | null): string => (id === null ? 'someone' : (names.get(id) ?? id));
  const entry = (e: AwardEntry): string => `${who(e.person)} (${e.display})`;
  const { totals, period, rhythm } = data;

  line(`Team Wrapped: ${data.workspace.name}, ${period.label}`);
  line(`Period     ${period.start} to ${period.end} (${formatInt(period.days)} days, times in ${period.timezone})`);
  line(`Workspace  ${data.workspace.id}`);

  heading('Totals');
  line(`${formatInt(totals.messages)} messages from ${formatInt(totals.activePeople)} people in ${formatInt(totals.activeChannels)} channels`);
  line(`${formatInt(totals.words)} words (${totals.novels} novels), ${formatInt(totals.characters)} characters`);
  line(`${formatInt(totals.reactions)} reactions, ${formatInt(totals.threads)} threads with ${formatInt(totals.replies)} replies`);
  line(`${formatInt(totals.files)} files, ${formatInt(totals.links)} links, ${formatInt(totals.mentions)} mentions`);
  line(`${formatInt(totals.activeDays)} active days, ${totals.messagesPerActiveDay} messages per active day`);
  line(`${formatInt(totals.newChannels)} channels created, ${formatInt(totals.botMessages)} bot messages (not counted above)`);

  heading('Rhythm');
  line(`Busiest month ${monthName(rhythm.busiestMonth)}, busiest day ${weekdayName(rhythm.busiestWeekday)}, quietest ${weekdayName(rhythm.quietestWeekday)}, peak hour ${hourLabel(rhythm.busiestHour)}`);
  line(`By month   ${rhythm.byMonth.map((n) => formatInt(n)).join('  ')}`);
  line(`By weekday ${rhythm.byWeekday.map((n) => formatInt(n)).join('  ')}`);

  heading('Top 10 people (messages, words, words per message, reactions received and given)');
  line(`${pad('', 4)}${pad('name', 24)}${padLeft('messages', 9)}${padLeft('words', 10)}${padLeft('avg', 6)}${padLeft('got', 8)}${padLeft('gave', 8)}  awards`);
  for (const p of data.people.slice(0, 10)) {
    line(
      `${padLeft(String(p.rank), 2)}. ${pad(clip(p.name, 23), 24)}${padLeft(formatInt(p.stats.messages), 9)}${padLeft(formatInt(p.stats.words), 10)}${padLeft(String(p.stats.avgWords), 6)}${padLeft(formatInt(p.stats.reactionsReceived), 8)}${padLeft(formatInt(p.stats.reactionsGiven), 8)}  ${p.awards.join(', ')}`,
    );
    const extras: string[] = [];
    if (p.signatureWord) extras.push(`signature word "${p.signatureWord.word}" (${p.signatureWord.count}×, lift ${p.signatureWord.lift})`);
    if (p.topEmoji.length > 0) extras.push(`emoji ${p.topEmoji.map((e) => emojiLabel(e.emoji)).join(' ')}`);
    if (p.peakHour !== undefined) extras.push(`peak ${hourLabel(p.peakHour)}`);
    if (p.joinedInPeriod) extras.push('joined this period');
    if (extras.length > 0) line(`    ${extras.join(' · ')}`);
  }

  heading(`Awards (${data.awards.length}; * = in the default ceremony)`);
  const describe = (award: Award): void => {
    line(`${award.featured ? '*' : ' '} ${award.emoji} ${award.title} [${award.tone}, ${award.category}]`);
    line(`    ${who(award.winner.person)} ${award.tagline}: ${award.winner.display}`);
    if (award.runnersUp.length > 0) line(`    then ${award.runnersUp.map(entry).join('; ')}`);
  };
  data.awards.forEach(describe);
  if (data.awards.length === 0) line('(none: nobody met the thresholds)');

  heading('Channel awards');
  for (const award of data.channelAwards) {
    line(`${award.emoji} ${award.title}: #${award.channel.name}, ${award.tagline} (${award.display})`);
  }
  if (data.channelAwards.length === 0) line('(none)');

  heading('Top channels');
  for (const c of data.channels.slice(0, 10)) {
    line(
      `#${pad(clip(c.name, 27), 28)}${padLeft(formatInt(c.messages), 9)} messages  ${padLeft(String(c.people), 4)} people  threads ${Math.round(c.threadShare * 100)}%  night ${Math.round(c.nightShare * 100)}%  ${c.reactionsPerMessage} reactions/msg${c.createdInPeriod ? '  (new)' : ''}`,
    );
  }

  heading('Moments');
  const busiest = data.moments.busiestDay;
  line(`Busiest day   ${busiest.date}: ${formatInt(busiest.messages)} messages${busiest.topChannel ? ` (mostly #${busiest.topChannel.name})` : ''}`);
  if (busiest.topWords.length > 0) line(`              words of the day: ${busiest.topWords.join(', ')}`);
  if (busiest.topPeople.length > 0) line(`              loudest: ${busiest.topPeople.map(who).join(', ')}`);
  const record = data.moments.recordHour;
  if (record) line(`Record hour   ${record.date} at ${hourLabel(record.hour)}: ${formatInt(record.messages)} messages`);
  const thread = data.moments.biggestThread;
  if (thread) {
    line(`Biggest thread ${formatInt(thread.replies)} replies from ${thread.participants} people in #${thread.channelName} on ${thread.date}, started by ${thread.starterName}`);
    if (showText && thread.text !== '') line(`              "${clip(thread.text, 110)}"`);
  }
  const first = data.moments.firstMessage;
  if (first) {
    line(`First message ${first.date} by ${first.personName} in #${first.channelName}`);
    if (showText && first.text !== '') line(`              "${clip(first.text, 110)}"`);
  }
  const longest = data.moments.longestMessage;
  if (longest) line(`Longest message ${formatInt(longest.words)} words by ${who(longest.person)} in #${longest.channelName} on ${longest.date}`);
  if (data.moments.topMessages.length > 0) line('Most-reacted messages');
  for (const message of data.moments.topMessages) {
    line(`  ${formatInt(message.reactions)} reactions ${message.topReactions.map((r) => `${emojiLabel(r.emoji)}×${r.count}`).join(' ')}: ${message.personName} in #${message.channelName} on ${message.date}`);
    if (showText && message.text !== '') line(`      "${clip(message.text, 110)}"`);
  }

  heading('Emoji and words');
  line(`${formatInt(data.emoji.total)} emoji used, ${formatInt(data.emoji.distinct)} different`);
  line(`Top emoji     ${data.emoji.top.map((e) => `${emojiLabel(e.emoji)}×${formatInt(e.count)}`).join('  ')}`);
  line(`Top reactions ${data.emoji.topReactions.map((e) => `${emojiLabel(e.emoji)}×${formatInt(e.count)}`).join('  ')}`);
  if (data.emoji.topCustom.length > 0) line(`Top custom    ${data.emoji.topCustom.map((e) => `:${e.name}:×${formatInt(e.count)}`).join('  ')}`);
  line(`Top words     ${data.words.top.slice(0, 20).map((w) => `${w.word} ${formatInt(w.count)}`).join(', ')}`);
  line(`${formatInt(data.words.questions)} questions, ${formatInt(data.words.exclamations)} exclamations, ${formatInt(data.words.thanks)} thank-yous`);
  if (data.words.laughStyles.length > 0) line(`Laughs        ${data.words.laughStyles.map((l) => `${l.style} ${formatInt(l.count)}`).join(', ')}`);

  if (data.huddles) {
    heading('Huddles');
    line(`${formatInt(data.huddles.count)} huddles, ${formatInt(data.huddles.totalMinutes)} minutes in total, longest ${formatInt(data.huddles.longestMinutes)} minutes`);
    if (data.huddles.topPeople.length > 0) line(`Most time: ${data.huddles.topPeople.map((p) => `${who(p.id)} ${formatInt(p.minutes)} min`).join(', ')}`);
  }

  heading(`Personality: ${data.personality.title}`);
  line(data.personality.description);
  line(data.personality.traits.map((t) => `${t.label}: ${t.value}`).join(' · '));

  heading('Coverage');
  line(`${formatInt(data.coverage.filesScanned)} files and ${formatInt(data.coverage.messagesScanned)} message objects read, ${formatInt(data.coverage.skippedFiles)} files skipped`);
  if (data.coverage.firstTs !== undefined && data.coverage.lastTs !== undefined) {
    line(`Export spans ${new Date(data.coverage.firstTs * 1000).toISOString().slice(0, 10)} to ${new Date(data.coverage.lastTs * 1000).toISOString().slice(0, 10)} (UTC)`);
  }
  for (const warning of data.coverage.warnings) line(`! ${warning}`);
  return out.join('\n');
}
