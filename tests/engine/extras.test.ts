import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { analyze } from '../../src/engine/analyze';
import { CHANNEL_AWARD_CATALOG, computeChannelAwards } from '../../src/engine/channel-awards';
import { analyzeSlackExport, memorySource } from '../../src/engine/index';
import { choosePersonality, type PersonalityInput } from '../../src/engine/personality';
import type { ChannelStat, Progress } from '../../src/engine/types';
import { dayNumberFromIso } from '../../src/engine/time';
import { pruneCounts, remapCounts, Vocabulary } from '../../src/engine/vocab';
import { ExportBuilder, findBadValues, person, seconds, smallTeam } from './helpers';

describe('huddles', () => {
  it('credits every participant with the full duration, in both shapes exports use', async () => {
    const b = smallTeam().user('U3', { name: 'cat' }).channel('random');
    b.post('general', 'U1', '2026-03-10T09:00:00-04:00', 'hello');
    b.post('general', 'U2', '2026-03-10T09:01:00-04:00', 'hi');
    const start = seconds('2026-03-10T10:00:00-04:00');
    // The documented shape.
    b.add('general', '2026-03-10T10:00:00-04:00', {
      subtype: 'huddle_thread', user: 'USLACKBOT', text: 'A huddle started',
      room: { id: 'R1', created_by: 'U1', date_start: start, date_end: start + 30 * 60, participant_history: ['U1', 'U2'], has_ended: true },
    });
    // What real exports contain: no subtype, empty text, and the creator missing from the history.
    b.add('general', '2026-03-10T11:00:00-04:00', {
      user: 'USLACKBOT', text: '', user_profile: { real_name: 'Slackbot' },
      room: { id: 'R2', created_by: 'U1', date_start: start + 3600, date_end: start + 3600 + 45 * 60, participants: [], participant_history: ['U2', 'U3', 'U2'], has_ended: true, call_family: 'huddle' },
    });
    // The same huddle listed again in another channel.
    b.add('random', '2026-03-10T10:00:00-04:00', {
      subtype: 'huddle_thread', user: 'USLACKBOT', text: 'A huddle started',
      room: { id: 'R1', created_by: 'U1', date_start: start, date_end: start + 30 * 60, participant_history: ['U1', 'U2'] },
    });
    // Still running when the export was made.
    b.add('general', '2026-03-10T12:00:00-04:00', { user: 'USLACKBOT', text: '', room: { id: 'R3', created_by: 'U2', date_start: start + 7200, date_end: 0, participant_history: ['U2'], has_ended: false, call_family: 'huddle' } });
    // No history: the creator gets the time.
    b.add('general', '2026-03-10T13:00:00-04:00', { subtype: 'huddle_thread', user: 'USLACKBOT', text: '', room: { id: 'R4', created_by: 'U1', date_start: start + 10800, date_end: start + 10800 + 600 } });
    // An old-style call is not a huddle, and neither is one outside the period.
    b.add('general', '2026-03-10T14:00:00-04:00', { subtype: 'sh_room_created', user: 'U1', text: 'started a call', room: { id: 'R5', date_start: start, date_end: start + 9000, participant_history: ['U1'] } });
    b.add('general', '2025-06-10T14:00:00-04:00', { subtype: 'huddle_thread', user: 'USLACKBOT', text: '', room: { id: 'R6', date_start: 1, date_end: 9001, participant_history: ['U1'] } });

    const data = await b.analyze();
    expect(data.huddles).toEqual({ count: 4, totalMinutes: 85, longestMinutes: 45, topPeople: [{ id: 'U2', minutes: 75 }, { id: 'U1', minutes: 40 }] });
    expect(person(data, 'U1').stats.huddleMinutes).toBe(40);
    expect(person(data, 'U2').stats.huddleMinutes).toBe(75);
    expect(data.totals).toMatchObject({ messages: 2, botMessages: 0 });
    expect(findBadValues(data)).toEqual([]);
  });
});

describe('who joined during the period', () => {
  const build = (): ExportBuilder => {
    const b = new ExportBuilder().channel('all-hands', { general: true }).channel('random');
    for (const id of ['U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8']) b.user(id, { name: `user${id}` });
    const join = (user: string, when: string) => b.add('all-hands', when, { subtype: 'channel_join', user, text: `<@${user}> has joined the channel` });
    const posts = (channel: string, user: string, date: string, count: number) => {
      for (let i = 0; i < count; i++) b.post(channel, user, `${date}T10:${String(i).padStart(2, '0')}:00-05:00`, 'hello');
    };
    posts('all-hands', 'U1', '2025-10-01', 2); // U1 has been around since last year
    join('U2', '2026-03-15T09:00:00-04:00'); // joined in March
    posts('random', 'U2', '2026-03-20', 35);
    join('U3', '2026-01-10T09:00:00-05:00'); // joined in the first 30 days
    posts('random', 'U3', '2026-06-01', 12);
    join('U4', '2025-06-01T09:00:00-04:00'); // joined long before
    posts('random', 'U4', '2026-06-02', 12);
    posts('random', 'U5', '2026-05-10', 40); // no join event, first seen in May
    posts('random', 'U6', '2026-02-10', 12); // no join event, seen early in the year
    posts('all-hands', 'U7', '2025-11-11', 1); // spoke in the general channel last year
    posts('random', 'U7', '2026-06-03', 12);
    posts('random', 'U8', '2026-02-01', 12); // was already posting before the join event
    join('U8', '2026-04-01T09:00:00-04:00');
    posts('all-hands', 'U1', '2026-11-20', 12);
    return b;
  };

  it('uses join events in the general channel, and otherwise a late first message', async () => {
    const data = await build().analyze();
    expect(data.period).toMatchObject({ start: '2026-01-01', end: '2026-11-20' });
    const joined = Object.fromEntries(data.people.map((p) => [p.id, p.joinedInPeriod]));
    expect(joined).toEqual({ U1: false, U2: true, U3: false, U4: false, U5: true, U6: false, U7: false, U8: false });
    const rookie = data.awards.find((a) => a.id === 'rookie')!;
    expect(rookie.winner).toEqual({ person: 'U5', value: 40, display: 'first showed up in May, 40 messages since' });
    expect(rookie.runnersUp).toEqual([{ person: 'U2', value: 35, display: 'joined in March, 35 messages since' }]);
  });

  it('measures the first 30 days from where the data starts, for a workspace born mid-year', async () => {
    const b = smallTeam().user('U3', { name: 'cat' }).user('U4', { name: 'dan' });
    const join = (user: string, when: string) => b.add('general', when, { subtype: 'channel_join', user, text: `<@${user}> has joined the channel` });
    join('U1', '2026-06-01T09:00:00-04:00');
    b.post('general', 'U1', '2026-06-01T10:00:00-04:00', 'first message of a brand new workspace');
    join('U2', '2026-06-20T09:00:00-04:00'); // 19 days in: a founding member
    b.post('general', 'U2', '2026-06-20T10:00:00-04:00', 'hello');
    join('U3', '2026-07-01T09:00:00-04:00'); // exactly 30 days in: still not "more than 30"
    b.post('general', 'U3', '2026-07-01T10:00:00-04:00', 'hello');
    join('U4', '2026-07-02T09:00:00-04:00'); // 31 days in
    b.post('general', 'U4', '2026-07-02T10:00:00-04:00', 'hello');
    const data = await b.analyze();
    expect(Object.fromEntries(data.people.map((p) => [p.id, p.joinedInPeriod]))).toEqual({ U1: false, U2: false, U3: false, U4: true });
  });

  it('does not guess when the export has nothing from before the period', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2026-01-05T10:00:00-05:00', 'hello');
    for (let i = 0; i < 40; i++) b.post('general', 'U2', `2026-06-01T10:${String(i).padStart(2, '0')}:00-04:00`, 'hello');
    const data = await b.analyze();
    expect(person(data, 'U2').joinedInPeriod).toBe(false);
    expect(data.awards.some((a) => a.id === 'rookie')).toBe(false);
  });
});

describe('channel awards', () => {
  const channel = (name: string, fields: Partial<ChannelStat>): ChannelStat => ({
    id: `C-${name}`, name, messages: 0, people: 1, threads: 0, reactions: 0, createdInPeriod: false, topPeople: [],
    nightShare: 0, threadShare: 0, reactionsPerMessage: 0, ...fields,
  });
  const endDay = dayNumberFromIso('2026-12-31')!;
  const created = (entries: Record<string, string>) => new Map(Object.entries(entries).map(([name, date]) => [`C-${name}`, dayNumberFromIso(date)!]));

  it('gives each award to the best channel that qualifies', () => {
    const channels = [
      channel('general', { messages: 5000, people: 40, nightShare: 0.02, threadShare: 0.2, reactionsPerMessage: 0.5 }),
      channel('eng', { messages: 3000, people: 10, nightShare: 0.2, threadShare: 0.6, reactionsPerMessage: 0.4 }),
      channel('memes', { messages: 900, people: 30, nightShare: 0.1, threadShare: 0.05, reactionsPerMessage: 3.25 }),
      channel('launch', { messages: 800, people: 12, createdInPeriod: true, nightShare: 0.05, threadShare: 0.3, reactionsPerMessage: 1 }),
      channel('duo', { messages: 600, people: 2, nightShare: 0.5, threadShare: 0.1 }),
      channel('trio', { messages: 450, people: 3, nightShare: 0.01, threadShare: 0.1 }),
      channel('night-desk', { messages: 199, people: 4, nightShare: 0.9, threadShare: 0.9, reactionsPerMessage: 0.1 }),
      channel('tiny-reacts', { messages: 99, people: 4, reactionsPerMessage: 9 }),
      channel('side-project', { messages: 4, people: 2, createdInPeriod: true }),
      channel('book-club', { messages: 2, people: 1, createdInPeriod: true }),
      channel('brand-new', { messages: 1, people: 1, createdInPeriod: true }),
    ];
    const awards = computeChannelAwards(channels, {
      endDay,
      createdDay: created({ launch: '2026-04-02', 'side-project': '2026-03-01', 'book-club': '2026-05-20', 'brand-new': '2026-12-20' }),
    });
    expect(awards.map((a) => [a.id, a.channel.name, a.display])).toEqual([
      ['busiest', 'general', '5,000 messages'],
      ['night-shift', 'duo', '50% of messages after 10pm'],
      ['thread-city', 'eng', '60% of messages in threads'],
      ['reaction-magnet', 'memes', '3.3 reactions per message'],
      ['newcomer', 'launch', 'created in April, 800 messages since'],
      ['ghost-town', 'book-club', '2 messages since May'],
      ['tight-knit', 'eng', '300 messages per person'],
    ]);
    for (const a of awards) expect(a).toMatchObject(CHANNEL_AWARD_CATALOG[a.id]);
    expect(awards[0]!.channel).toEqual({ id: 'C-general', name: 'general' });
  });

  it('lets one channel hold at most two awards and passes the third to the next best', () => {
    const channels = [
      channel('everything', { messages: 5000, people: 3, nightShare: 0.9, threadShare: 0.9, reactionsPerMessage: 9 }),
      channel('second', { messages: 400, people: 4, nightShare: 0.3, threadShare: 0.5, reactionsPerMessage: 2 }),
      channel('third', { messages: 300, people: 5, nightShare: 0.2, threadShare: 0.4, reactionsPerMessage: 1 }),
    ];
    const awards = computeChannelAwards(channels, { endDay, createdDay: new Map() });
    expect(awards.map((a) => [a.id, a.channel.name])).toEqual([
      ['busiest', 'everything'],
      ['night-shift', 'everything'],
      ['thread-city', 'second'],
      ['reaction-magnet', 'second'],
      ['tight-knit', 'third'],
    ]);
  });

  it('skips awards nobody qualifies for', () => {
    const awards = computeChannelAwards([channel('general', { messages: 50, people: 2 })], { endDay, createdDay: new Map() });
    expect(awards.map((a) => a.id)).toEqual(['busiest']);
    expect(computeChannelAwards([], { endDay, createdDay: new Map() })).toEqual([]);
  });

  it('marks channels created in the period and counts them', async () => {
    const b = smallTeam().channel('launch', { created: '2026-02-01T12:00:00-05:00', creator: 'U2' }).channel('old', { created: '2024-02-01T12:00:00-05:00' }).channel('empty-new', { created: '2026-02-02T12:00:00-05:00', creator: 'U2' });
    b.post('general', 'U1', '2026-03-10T10:00:00-04:00', 'hello');
    b.post('launch', 'U2', '2026-03-10T10:00:00-04:00', 'we are live');
    b.post('old', 'U2', '2026-03-10T11:00:00-04:00', 'still here');
    const data = await b.analyze();
    expect(data.totals.newChannels).toBe(2);
    expect(person(data, 'U2').stats.channelsCreated).toBe(2);
    const launch = data.channels.find((c) => c.name === 'launch')!;
    expect(launch).toMatchObject({ createdInPeriod: true, creator: 'U2', messages: 1, people: 1, topPeople: [{ id: 'U2', messages: 1 }] });
    expect(data.channels.find((c) => c.name === 'old')!.createdInPeriod).toBe(false);
    expect(data.channelAwards.find((a) => a.id === 'newcomer')).toMatchObject({ channel: { name: 'launch' }, display: 'created in February, 1 message since' });
  });
});

describe('team personality', () => {
  const base: PersonalityInput = {
    messages: 10_000, words: 120_000, replies: 2500, reactions: 5000, nightMessages: 300, earlyMessages: 400,
    typedEmoji: 800, emojiDistinct: 210, emojiTotal: 5800, busiestHour: 11, busiestWeekday: 1,
  };
  const id = (changes: Partial<PersonalityInput>): string => choosePersonality({ ...base, ...changes }).id;

  it('names the strongest habit, or the steady hands when there is none', () => {
    expect(id({})).toBe('steady-hands');
    expect(id({ nightMessages: 1500 })).toBe('night-owls');
    expect(id({ earlyMessages: 1500 })).toBe('early-birds');
    expect(id({ replies: 5000 })).toBe('thread-heads');
    expect(id({ reactions: 14_000 })).toBe('hype-machine');
    expect(id({ typedEmoji: 4000 })).toBe('emoji-maximalists');
    expect(id({ words: 260_000 })).toBe('novelists');
    expect(id({ words: 50_000 })).toBe('rapid-fire');
    // Two habits: the one further past its threshold wins.
    expect(id({ nightMessages: 1100, replies: 9000 })).toBe('thread-heads');
    expect(id({ messages: 40, words: 40, replies: 40, nightMessages: 40 })).toBe('steady-hands');
  });

  it('backs every archetype with three or four traits and a short description', () => {
    for (const changes of [{}, { nightMessages: 1500 }, { earlyMessages: 1500 }, { replies: 5000 }, { reactions: 14_000 }, { typedEmoji: 4000 }, { words: 260_000 }, { words: 50_000 }]) {
      const personality = choosePersonality({ ...base, ...changes });
      expect(personality.title).toMatch(/^The /);
      expect(personality.traits.length).toBeGreaterThanOrEqual(3);
      expect(personality.traits.length).toBeLessThanOrEqual(4);
      expect(personality.traits).toContainEqual({ label: 'Peak hour', value: '11am' });
      expect(personality.traits).toContainEqual({ label: 'Busiest day', value: 'Tuesday' });
      expect(personality.description.length).toBeGreaterThan(20);
      expect(personality.description).not.toMatch(/NaN|undefined|Infinity/);
      expect(personality.description.split('.').length).toBeLessThanOrEqual(4);
    }
    expect(choosePersonality({ ...base, replies: 5000 }).description).toContain('50%');
    expect(choosePersonality({ ...base, messages: 0, words: 0, replies: 0, reactions: 0, nightMessages: 0, earlyMessages: 0, typedEmoji: 0, emojiDistinct: 0, emojiTotal: 0 }).description).not.toMatch(/NaN/);
  });
});

describe('words', () => {
  it('finds a signature word: used at least 12 times and four times more than by everyone else', async () => {
    const b = smallTeam().user('U3', { name: 'cat' });
    for (let i = 0; i < 15; i++) b.post('general', 'U1', `2026-03-10T10:${String(i).padStart(2, '0')}:00-04:00`, 'the kubernetes thing needs another coffee');
    for (let i = 0; i < 30; i++) b.post('general', 'U2', `2026-03-11T10:${String(i).padStart(2, '0')}:00-04:00`, 'another coffee before the standup meeting please');
    for (let i = 0; i < 11; i++) b.post('general', 'U3', `2026-03-12T10:${String(i).padStart(2, '0')}:00-04:00`, 'spreadsheet time');
    b.post('general', 'U3', '2026-03-12T11:00:00-04:00', 'one kubernetes question about the meeting');
    const data = await b.analyze();
    expect(person(data, 'U1').signatureWord).toMatchObject({ word: 'kubernetes', count: 15 });
    expect(person(data, 'U1').signatureWord!.lift).toBeGreaterThanOrEqual(4);
    expect(person(data, 'U2').signatureWord).toMatchObject({ word: 'standup', count: 30 });
    expect(person(data, 'U3').signatureWord).toBeUndefined(); // "spreadsheet" only 11 times
    expect(data.words.top.slice(0, 2)).toEqual([{ word: 'coffee', count: 45 }, { word: 'meeting', count: 31 }]);
    expect(data.words.top.some((w) => ['the', 'another', 'before', 'needs', 'ann', 'bob', 'general'].includes(w.word))).toBe(false);
    expect(data.moments.longestMessage).toEqual({ person: 'U2', words: 7, channelName: 'general', date: '2026-03-11' });
  });

  it('drops people\'s names and channel names from the word stats', async () => {
    const b = new ExportBuilder().user('U1', { name: 'priya', realName: 'Priya Raman', displayName: 'pri' }).user('U2', { name: 'sam', realName: 'Samuel Okafor' }).channel('general', { general: true }).channel('pizza');
    for (let i = 0; i < 5; i++) b.post('general', 'U1', `2026-03-10T10:0${i}:00-04:00`, 'Samuel and Okafor love pizza and tacos in general, says Priya Raman');
    const data = await b.analyze();
    expect(data.words.top).toEqual([{ word: 'love', count: 5 }, { word: 'tacos', count: 5 }]);
  });

  it('finds the words that made the busiest day different', async () => {
    const b = smallTeam().channel('incidents');
    for (let day = 1; day <= 20; day++) {
      const date = `2026-02-${String(day).padStart(2, '0')}`;
      b.post('general', 'U1', `${date}T10:00:00-05:00`, 'coffee and planning for the roadmap');
      b.post('general', 'U2', `${date}T10:05:00-05:00`, 'roadmap review with coffee');
    }
    for (let i = 0; i < 12; i++) {
      const minute = String(i).padStart(2, '0');
      b.post('incidents', i % 3 === 0 ? 'U1' : 'U2', `2026-03-03T14:${minute}:00-05:00`, 'the database outage continues, restarting the database after the outage with coffee');
    }
    b.post('general', 'U1', '2026-03-03T09:00:00-05:00', 'coffee and planning for the roadmap');
    const data = await b.analyze();
    expect(data.moments.busiestDay).toMatchObject({ date: '2026-03-03', messages: 13, topChannel: { id: 'CINCIDENTS', name: 'incidents' }, topPeople: ['U2', 'U1'] });
    expect(data.moments.busiestDay.topWords.slice(0, 2)).toEqual(['database', 'outage']);
    expect(data.moments.busiestDay.topWords).not.toContain('coffee');
    expect(data.moments.busiestDay.topWords.length).toBeLessThanOrEqual(5);
  });

  it('counts questions, exclamations, thanks and laughs for the team', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2026-03-10T10:00:00-04:00', 'Is it done? Really?');
    b.post('general', 'U1', '2026-03-10T10:01:00-04:00', 'It is done! Thanks!!');
    b.post('general', 'U2', '2026-03-10T10:02:00-04:00', 'hahaha lol');
    b.post('general', 'U2', '2026-03-10T10:03:00-04:00', 'haha :joy:');
    b.post('general', 'U2', '2026-03-10T10:04:00-04:00', 'WE ARE SO DONE WITH THIS');
    const data = await b.analyze();
    expect(data.words).toMatchObject({ questions: 1, exclamations: 1, thanks: 1 });
    expect(data.words.laughStyles).toEqual([{ style: 'haha', count: 2 }, { style: 'lol', count: 1 }, { style: '😂', count: 1 }]);
    expect(person(data, 'U1').stats).toMatchObject({ questions: 1, thanksGiven: 1, laughs: 0, shouts: 0 });
    expect(person(data, 'U2').stats).toMatchObject({ questions: 0, laughs: 4, shouts: 1 });
  });
});

describe('bounded memory for words', () => {
  it('forgets the rarest words when the vocabulary is full, keeping the common ones exact', () => {
    const vocabulary = new Vocabulary(10);
    for (let i = 0; i < 50; i++) vocabulary.add('common');
    for (let i = 0; i < 20; i++) vocabulary.add('frequent');
    const before = vocabulary.add('frequent');
    for (const rare of ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8']) vocabulary.add(rare);
    expect(vocabulary.full).toBe(true);
    const remap = vocabulary.compact();
    expect(vocabulary.size).toBeLessThanOrEqual(6);
    expect(vocabulary.countOf('common')).toBe(50);
    expect(vocabulary.countOf('frequent')).toBe(21);
    expect(vocabulary.countOf('a1')).toBe(0);
    expect(vocabulary.total).toBe(79);
    expect(remap[before]).toBeGreaterThanOrEqual(0);
    const personal = remapCounts(new Map([[before, 7], [5, 1]]), remap);
    expect([...personal.values()]).toEqual([7]);
    expect(vocabulary.top(2)).toEqual([{ word: 'common', count: 50 }, { word: 'frequent', count: 21 }]);
    expect(vocabulary.add('a1')).toBe(vocabulary.size - 1);
  });

  it('prunes one person\'s rarest words', () => {
    const counts = new Map<number, number>();
    for (let id = 0; id < 100; id++) counts.set(id, id < 10 ? 50 : 1);
    pruneCounts(counts, 50);
    expect(counts.size).toBe(10);
    expect([...counts.values()].every((count) => count === 50)).toBe(true);
  });

  it('still reports the right top words and signature word with tiny limits', async () => {
    const b = smallTeam();
    let unique = 0;
    /** A word nobody has used before: zzax, zzbx, ... */
    const filler = (): string => {
      let n = unique++;
      let letters = '';
      do {
        letters = String.fromCharCode(97 + (n % 26)) + letters;
        n = Math.floor(n / 26);
      } while (n > 0);
      return `zz${letters}x`;
    };
    for (let i = 0; i < 40; i++) {
      const time = `2026-03-10T10:${String(i).padStart(2, '0')}:00-04:00`;
      b.post('general', 'U1', time, `terraform ${filler()} ${filler()} ${filler()} deploy`);
      b.post('general', 'U2', time, `deploy ${filler()} ${filler()} ${filler()} pizza`);
    }
    const data = await analyze(memorySource(b.files()), {}, { maxVocabulary: 40, maxPersonVocabulary: 20 });
    expect(data.words.top[0]).toEqual({ word: 'deploy', count: 80 });
    expect(data.words.top.slice(1, 3).map((w) => w.word).sort()).toEqual(['pizza', 'terraform']);
    expect(person(data, 'U1').signatureWord).toMatchObject({ word: 'terraform', count: 40 });
    expect(person(data, 'U2').signatureWord).toMatchObject({ word: 'pizza', count: 40 });
    expect(findBadValues(data)).toEqual([]);
  });
});

describe('progress and cancelling', () => {
  const manyDays = (): ExportBuilder => {
    const b = smallTeam();
    for (let i = 0; i < 130; i++) {
      const date = new Date(Date.UTC(2026, 0, 2 + i)).toISOString().slice(0, 10);
      b.post('general', i % 2 === 0 ? 'U1' : 'U2', `${date}T12:00:00-05:00`, 'hello');
    }
    return b;
  };

  it('reports progress about every 50 files and finishes with "done"', async () => {
    const events: Progress[] = [];
    const data = await manyDays().analyze({ onProgress: (p) => events.push(p) });
    expect(events[0]).toEqual({ phase: 'listing', filesTotal: 0, filesDone: 0, messages: 0 });
    expect(events.at(-1)).toMatchObject({ phase: 'done', filesTotal: 130, filesDone: 130, messages: 130 });
    const reading = events.filter((e) => e.phase === 'reading');
    expect(reading.map((e) => e.filesDone)).toEqual([0, 50, 100]);
    expect(reading[1]).toMatchObject({ filesTotal: 130, current: 'general', messages: 50 });
    expect(events.map((e) => e.phase).filter((phase, index, all) => phase !== all[index - 1])).toEqual(['listing', 'reading', 'computing', 'done']);
    expect(data.coverage).toMatchObject({ filesScanned: 130, messagesScanned: 130, skippedFiles: 0 });
  });

  it('stops when the signal aborts, before or during the run', async () => {
    const already = new AbortController();
    already.abort();
    await expect(manyDays().analyze({ signal: already.signal })).rejects.toMatchObject({ name: 'AbortError' });

    const controller = new AbortController();
    let seen = 0;
    const run = manyDays().analyze({
      signal: controller.signal,
      onProgress: (p) => {
        seen = p.filesDone;
        if (p.phase === 'reading' && p.filesDone >= 50) controller.abort();
      },
    });
    await expect(run).rejects.toMatchObject({ name: 'AbortError' });
    expect(seen).toBe(50);

    // Whatever reason the caller aborts with, what comes out is named AbortError and keeps the reason.
    const reason = new Error('the user closed the tab');
    const withReason = new AbortController();
    withReason.abort(reason);
    const thrown = await manyDays().analyze({ signal: withReason.signal }).catch((error: unknown) => error);
    expect(thrown).toBeInstanceOf(Error);
    expect(thrown).toMatchObject({ name: 'AbortError', message: 'the user closed the tab', cause: reason });

    const withText = new AbortController();
    withText.abort('tab closed');
    await expect(manyDays().analyze({ signal: withText.signal })).rejects.toMatchObject({ name: 'AbortError', message: 'tab closed' });

    const timedOut = AbortSignal.timeout(1);
    await new Promise((resolve) => setTimeout(resolve, 20));
    await expect(manyDays().analyze({ signal: timedOut })).rejects.toMatchObject({ name: 'AbortError' });
  });
});

describe('workspace and people ids', () => {
  const sha = (input: string): string => createHash('sha256').update(input).digest('hex').slice(0, 32);

  it('hashes the most common team id', async () => {
    const b = new ExportBuilder().user('U1', { teamId: 'T0ACME' }).user('U2', { teamId: 'T0ACME' }).user('U3', { teamId: 'T0OTHER' }).channel('general', { general: true });
    b.post('general', 'U1', '2026-03-10T10:00:00-04:00', 'hello');
    const data = await b.analyze();
    expect(data.workspace.id).toBe(sha('T0ACME'));
    expect(data.workspace.id).toHaveLength(32);
  });

  it('falls back to the sorted user ids when there is no team id', async () => {
    const b = new ExportBuilder().user('U2', { teamId: null }).user('U1', { teamId: null }).user('U3', { teamId: null }).channel('general', { general: true });
    b.post('general', 'U1', '2026-03-10T10:00:00-04:00', 'hello');
    expect((await b.analyze()).workspace.id).toBe(sha('U1,U2,U3'));
  });

  it('gives every person a stable colour index from 0 to 11', async () => {
    const fnv1a = (id: string): number => {
      let hash = 0x811c9dc5n;
      for (const char of id) hash = ((hash ^ BigInt(char.charCodeAt(0))) * 0x01000193n) & 0xffffffffn;
      return Number(hash % 12n);
    };
    const b = new ExportBuilder().channel('general', { general: true });
    const ids = Array.from({ length: 40 }, (_, index) => `U0${(index * 7919).toString(36).toUpperCase()}`);
    ids.forEach((id, index) => {
      b.user(id);
      b.post('general', id, `2026-03-10T10:${String(index).padStart(2, '0')}:00-04:00`, 'hello');
    });
    const first = await b.analyze();
    const second = await analyzeSlackExport(memorySource(b.files()));
    for (const p of first.people) {
      expect(p.color).toBe(fnv1a(p.id));
      expect(p.color).toBe(second.people.find((other) => other.id === p.id)!.color);
    }
    expect(new Set(first.people.map((p) => p.color)).size).toBeGreaterThan(6);
  });
});

describe('sha-256', () => {
  it('gives the same digest with and without WebCrypto', async () => {
    const { sha256Hex, sha256HexPlain } = await import('../../src/engine/hash');
    const samples = ['', 'abc', 'T0ACME', 'U1,U2,U3', 'ü€😀', 'a'.repeat(55), 'a'.repeat(56), 'a'.repeat(63), 'a'.repeat(64), 'a'.repeat(65), 'x'.repeat(1000)];
    for (const sample of samples) {
      const expected = createHash('sha256').update(sample).digest('hex');
      expect(sha256HexPlain(sample), `plain: ${sample.length} chars`).toBe(expected);
      expect(await sha256Hex(sample), `webcrypto: ${sample.length} chars`).toBe(expected);
    }
  });
});
