import { describe, expect, it } from 'vitest';
import { AWARD_CATALOG, AWARD_ORDER, chooseFeatured, computeAwards, minimumMessages } from '../../src/engine/awards';
import type { Award, AwardId, Person, PersonStats } from '../../src/engine/types';
import { person, smallTeam } from './helpers';

const ZERO: PersonStats = {
  messages: 0, words: 0, avgWords: 0, reactionsGiven: 0, reactionsReceived: 0, threadsStarted: 0, replies: 0,
  firstReplies: 0, questions: 0, links: 0, files: 0, images: 0, mentionsMade: 0, mentionsReceived: 0, broadcasts: 0,
  edits: 0, shouts: 0, nightMessages: 0, earlyMessages: 0, weekendMessages: 0, activeDays: 0, longestStreak: 0,
  channelsActive: 0, channelsCreated: 0, distinctEmoji: 0, customEmojiUses: 0, thanksGiven: 0, thanksReceived: 0,
  laughs: 0, longestMonologue: 0, huddleMinutes: 0, dayStarters: 0, dayClosers: 0,
};

/** People in rank order: pass them with the most messages first. */
function team(...members: [id: string, stats: Partial<PersonStats>, extra?: Partial<Person>][]): Person[] {
  return members.map(([id, stats, extra], index) => ({
    id,
    name: id,
    color: 0,
    rank: index + 1,
    percentile: 0,
    stats: { ...ZERO, ...stats },
    topChannels: [],
    topEmoji: [],
    joinedInPeriod: false,
    awards: [],
    ...extra,
  }));
}

const award = (awards: Award[], id: AwardId): Award | undefined => awards.find((a) => a.id === id);
const run = (people: Person[], totalMessages = 100_000, arrival = new Map<string, string>()) => computeAwards(people, { totalMessages, arrival });

describe('the catalog', () => {
  it('has the 31 awards with their titles, emoji, tone and category', () => {
    const expected: Record<AwardId, [string, string, 'wholesome' | 'spicy', string]> = {
      yapper: ['The Yapper', '🗣️', 'wholesome', 'volume'],
      novelist: ['The Novelist', '📚', 'wholesome', 'style'],
      minimalist: ['The Minimalist', '🤏', 'wholesome', 'style'],
      'night-owl': ['The Night Owl', '🦉', 'wholesome', 'timing'],
      'early-bird': ['The Early Bird', '🌅', 'wholesome', 'timing'],
      'weekend-warrior': ['The Weekend Warrior', '🏕️', 'spicy', 'timing'],
      'first-responder': ['The First Responder', '🚑', 'wholesome', 'social'],
      'thread-starter': ['The Conversation Starter', '🧵', 'wholesome', 'social'],
      'hype-person': ['The Hype Person', '📣', 'wholesome', 'social'],
      'crowd-favorite': ['The Crowd Favorite', '🌟', 'wholesome', 'social'],
      'emoji-artist': ['The Emoji Artist', '🎨', 'wholesome', 'style'],
      interviewer: ['The Interviewer', '🎤', 'wholesome', 'style'],
      'link-librarian': ['The Link Librarian', '🔗', 'wholesome', 'craft'],
      'meme-dealer': ['The Meme Dealer', '🖼️', 'wholesome', 'craft'],
      'town-crier': ['The Town Crier', '🔔', 'spicy', 'social'],
      editor: ['The Perfectionist', '✏️', 'spicy', 'craft'],
      'caps-lock-captain': ['The Caps Lock Captain', '📢', 'spicy', 'style'],
      connector: ['The Connector', '🕸️', 'wholesome', 'social'],
      'most-wanted': ['Most Wanted', '🎯', 'wholesome', 'social'],
      explorer: ['The Explorer', '🧭', 'wholesome', 'craft'],
      'channel-founder': ['The Channel Founder', '🏗️', 'wholesome', 'craft'],
      'streak-master': ['The Streak Master', '🔥', 'wholesome', 'timing'],
      'huddle-hero': ['The Huddle Hero', '🎧', 'wholesome', 'social'],
      'gratitude-champion': ['The Gratitude Champion', '🙏', 'wholesome', 'social'],
      'most-thanked': ['The Most Thanked', '💐', 'wholesome', 'social'],
      'laugh-track': ['The Laugh Track', '😂', 'wholesome', 'style'],
      'monologue-master': ['The Monologue Master', '🎭', 'spicy', 'style'],
      opener: ['The Opener', '☀️', 'wholesome', 'timing'],
      closer: ['The Closer', '🌙', 'wholesome', 'timing'],
      rookie: ['Rookie of the Year', '🌱', 'wholesome', 'volume'],
      'emoji-connoisseur': ['The Custom Emoji Connoisseur', '🦜', 'wholesome', 'style'],
    };
    expect(Object.keys(AWARD_CATALOG).sort()).toEqual(Object.keys(expected).sort());
    for (const [id, [title, emoji, tone, category]] of Object.entries(expected)) {
      expect(AWARD_CATALOG[id as AwardId], id).toMatchObject({ title, emoji, tone, category });
      expect(AWARD_CATALOG[id as AwardId].tagline, id).toMatch(/^[a-z@]/);
    }
  });

  it('orders the ceremony: craft, style, timing, social, then spicy, then the four headline awards', () => {
    expect(AWARD_ORDER).toEqual([
      'link-librarian', 'meme-dealer', 'explorer', 'channel-founder',
      'novelist', 'minimalist', 'emoji-artist', 'interviewer', 'laugh-track', 'emoji-connoisseur',
      'night-owl', 'early-bird', 'streak-master', 'opener', 'closer',
      'thread-starter', 'connector', 'most-wanted', 'huddle-hero', 'gratitude-champion', 'most-thanked',
      'rookie',
      'weekend-warrior', 'town-crier', 'editor', 'caps-lock-captain', 'monologue-master',
      'first-responder', 'crowd-favorite', 'hype-person', 'yapper',
    ]);
  });
});

describe('who wins', () => {
  it('writes the display strings', () => {
    const star: Partial<PersonStats> = {
      messages: 14203, words: 14203 * 38, nightMessages: 412, earlyMessages: 301, weekendMessages: 214,
      firstReplies: 318, medianReplySeconds: 240, threadsStarted: 240, reactionsGiven: 5210, reactionsReceived: 25565,
      distinctEmoji: 412, questions: 1204, links: 640, images: 380, broadcasts: 84, edits: 512, shouts: 96,
      mentionsMade: 2104, mentionsReceived: 3402, channelsActive: 48, channelsCreated: 14, longestStreak: 89,
      huddleMinutes: 112 * 60, thanksGiven: 640, thanksReceived: 214, laughs: 1840, longestMonologue: 23,
      dayStarters: 140, dayClosers: 122, customEmojiUses: 802,
    };
    const people = team(
      ['star', star],
      ['rookie', { messages: 2410, words: 24100 }, { joinedInPeriod: true }],
      ['quiet', { messages: 1000, words: 3100 }],
    );
    const awards = run(people, 100_000, new Map([['rookie', 'joined in March']]));
    const shown = Object.fromEntries(awards.map((a) => [a.id, `${a.winner.person}: ${a.winner.display}`]));
    expect(shown).toEqual({
      yapper: 'star: 14,203 messages',
      novelist: 'star: 38 words per message',
      minimalist: 'quiet: 3.1 words per message',
      'night-owl': 'star: 412 messages after 10pm',
      'early-bird': 'star: 301 messages before 8am',
      'weekend-warrior': 'star: 214 weekend messages',
      'first-responder': 'star: first to reply 318 times, usually within 4 min',
      'thread-starter': 'star: started 240 threads',
      'hype-person': 'star: gave 5,210 reactions',
      'crowd-favorite': 'star: 1.8 reactions per message',
      'emoji-artist': 'star: used 412 different emoji',
      interviewer: 'star: asked 1,204 questions',
      'link-librarian': 'star: shared 640 links',
      'meme-dealer': 'star: posted 380 images',
      'town-crier': 'star: rang the bell 84 times',
      editor: 'star: edited 512 messages',
      'caps-lock-captain': 'star: SHOUTED 96 TIMES',
      connector: 'star: mentioned teammates 2,104 times',
      'most-wanted': 'star: was @mentioned 3,402 times',
      explorer: 'star: posted in 48 channels',
      'channel-founder': 'star: created 14 channels',
      'streak-master': 'star: 89 weekdays in a row',
      'huddle-hero': 'star: 112 hours in huddles',
      'gratitude-champion': 'star: said thanks 640 times',
      'most-thanked': 'star: was thanked 214 times',
      'laugh-track': 'star: laughed 1,840 times',
      'monologue-master': 'star: 23 messages in a row',
      opener: 'star: had the first word 140 times',
      closer: 'star: had the last word 122 times',
      rookie: 'rookie: joined in March, 2,410 messages since',
      'emoji-connoisseur': 'star: used custom emoji 802 times',
    });
    expect(awards.map((a) => a.id)).toEqual(AWARD_ORDER);
    expect(award(awards, 'crowd-favorite')!.winner.value).toBe(1.8);
    expect(award(awards, 'yapper')!.runnersUp.map((e) => [e.person, e.display])).toEqual([['rookie', '2,410 messages'], ['quiet', '1,000 messages']]);
    for (const a of awards) expect(a).toMatchObject(AWARD_CATALOG[a.id]);
  });

  it('applies each award\'s own threshold', () => {
    const cases: [AwardId, Partial<PersonStats>, Partial<PersonStats>][] = [
      ['novelist', { messages: 50, words: 1000 }, { messages: 49, words: 5000 }],
      ['minimalist', { messages: 100, words: 300 }, { messages: 99, words: 100 }],
      ['night-owl', { nightMessages: 15 }, { nightMessages: 14 }],
      ['early-bird', { earlyMessages: 15 }, { earlyMessages: 14 }],
      ['weekend-warrior', { weekendMessages: 15 }, { weekendMessages: 14 }],
      ['first-responder', { firstReplies: 10, medianReplySeconds: 42 }, { firstReplies: 9 }],
      ['thread-starter', { threadsStarted: 10 }, { threadsStarted: 9 }],
      ['hype-person', { reactionsGiven: 50 }, { reactionsGiven: 49 }],
      ['crowd-favorite', { messages: 100, reactionsReceived: 30 }, { messages: 99, reactionsReceived: 900 }],
      ['emoji-artist', { distinctEmoji: 20 }, { distinctEmoji: 19 }],
      ['interviewer', { questions: 30 }, { questions: 29 }],
      ['link-librarian', { links: 20 }, { links: 19 }],
      ['meme-dealer', { images: 15 }, { images: 14 }],
      ['town-crier', { broadcasts: 5 }, { broadcasts: 4 }],
      ['editor', { edits: 20 }, { edits: 19 }],
      ['caps-lock-captain', { shouts: 10 }, { shouts: 9 }],
      ['connector', { mentionsMade: 30 }, { mentionsMade: 29 }],
      ['most-wanted', { mentionsReceived: 20 }, { mentionsReceived: 19 }],
      ['explorer', { channelsActive: 5 }, { channelsActive: 4 }],
      ['channel-founder', { channelsCreated: 2 }, { channelsCreated: 1 }],
      ['streak-master', { longestStreak: 10 }, { longestStreak: 9 }],
      ['huddle-hero', { huddleMinutes: 60 }, { huddleMinutes: 59 }],
      ['gratitude-champion', { thanksGiven: 15 }, { thanksGiven: 14 }],
      ['most-thanked', { thanksReceived: 10 }, { thanksReceived: 9 }],
      ['laugh-track', { laughs: 20 }, { laughs: 19 }],
      ['monologue-master', { longestMonologue: 6 }, { longestMonologue: 5 }],
      ['opener', { dayStarters: 10 }, { dayStarters: 9 }],
      ['closer', { dayClosers: 10 }, { dayClosers: 9 }],
      ['emoji-connoisseur', { customEmojiUses: 15 }, { customEmojiUses: 14 }],
    ];
    for (const [id, enough, notEnough] of cases) {
      const base = { messages: 400, words: 4000 };
      expect(award(run(team(['p', { ...base, ...enough }])), id)?.winner.person, `${id} at the threshold`).toBe('p');
      expect(award(run(team(['p', { ...base, ...notEnough }])), id), `${id} below the threshold`).toBeUndefined();
    }
    // Rookie: joined in the period and at least 30 messages.
    expect(award(run(team(['p', { messages: 30 }, { joinedInPeriod: true }])), 'rookie')?.winner.display).toBe('30 messages since joining');
    expect(award(run(team(['p', { messages: 29 }, { joinedInPeriod: true }])), 'rookie')).toBeUndefined();
    expect(award(run(team(['p', { messages: 300 }])), 'rookie')).toBeUndefined();
    expect(award(run(team(['p', { messages: 300, huddleMinutes: 90 }])), 'huddle-hero')?.winner.display).toBe('90 minutes in huddles');
    expect(award(run(team(['p', { messages: 300, firstReplies: 12, medianReplySeconds: 7300 }])), 'first-responder')?.winner.display).toBe('first to reply 12 times, usually within 2 hr');
    expect(award(run(team(['p', { messages: 300, firstReplies: 12, medianReplySeconds: 42 }])), 'first-responder')?.winner.display).toBe('first to reply 12 times, usually within 42 sec');
  });

  it('keeps people with too few messages out of everything', () => {
    expect(minimumMessages(1999)).toBe(10);
    expect(minimumMessages(2000)).toBe(25);
    const people = team(['busy', { messages: 500, nightMessages: 20 }], ['night-visitor', { messages: 24, nightMessages: 24 }]);
    expect(award(run(people, 5000), 'night-owl')?.winner.person).toBe('busy');
    expect(award(run(people, 5000), 'night-owl')?.runnersUp).toEqual([]);
    expect(award(run(people, 1500), 'night-owl')?.winner.person).toBe('night-visitor');
    const tiny = team(['a', { messages: 9, nightMessages: 9 }]);
    expect(run(tiny, 9)).toEqual([]);
  });

  it('gives the award to the true top scorer, breaking ties by messages, with up to two runners-up who also qualify', () => {
    const people = team(
      ['a', { messages: 900, links: 40 }],
      ['b', { messages: 800, links: 75 }],
      ['c', { messages: 700, links: 75 }],
      ['d', { messages: 600, links: 30 }],
      ['e', { messages: 500, links: 19 }],
    );
    const links = award(run(people), 'link-librarian')!;
    expect(links.winner).toEqual({ person: 'b', value: 75, display: 'shared 75 links' });
    expect(links.runnersUp.map((e) => e.person)).toEqual(['c', 'a']);
    const few = award(run(team(['a', { messages: 900, links: 40 }], ['b', { messages: 800, links: 19 }])), 'link-librarian')!;
    expect(few.runnersUp).toEqual([]);
  });

  it('picks the lowest average for the Minimalist, among people with 100 messages', () => {
    const people = team(['wordy', { messages: 500, words: 9000 }], ['terse', { messages: 300, words: 600 }], ['silent', { messages: 60, words: 0 }]);
    expect(award(run(people), 'minimalist')!.winner).toEqual({ person: 'terse', value: 2, display: '2.0 words per message' });
    expect(award(run(people), 'novelist')!.winner).toEqual({ person: 'wordy', value: 18, display: '18 words per message' });
  });
});

describe('the default ceremony', () => {
  /** Builds a full set of awards with chosen winners. */
  function ceremony(winner: (id: AwardId) => string, values: Partial<Record<AwardId, number>> = {}): Award[] {
    return AWARD_ORDER.map((id) => ({
      id,
      ...AWARD_CATALOG[id],
      winner: { person: winner(id), value: values[id] ?? 100, display: '' },
      runnersUp: [],
      featured: true,
    }));
  }
  const featured = (awards: Award[]): AwardId[] => awards.filter((a) => a.featured).map((a) => a.id);

  it('always features the headline awards, then walks the wholesome ones in order up to twelve, plus three spicy', () => {
    const awards = ceremony((id) => `winner-of-${id}`);
    chooseFeatured(awards);
    expect(featured(awards)).toEqual([
      'link-librarian', 'meme-dealer', 'explorer', 'channel-founder', 'novelist', 'minimalist', 'emoji-artist',
      'night-owl',
      'weekend-warrior', 'town-crier', 'editor',
      'first-responder', 'crowd-favorite', 'hype-person', 'yapper',
    ]);
    expect(awards.filter((a) => a.featured && a.tone === 'wholesome')).toHaveLength(12);
  });

  it('features whichever of Night Owl and Early Bird has the larger number', () => {
    const awards = ceremony((id) => `winner-of-${id}`, { 'night-owl': 300, 'early-bird': 301 });
    chooseFeatured(awards);
    expect(featured(awards)).toContain('early-bird');
    expect(featured(awards)).not.toContain('night-owl');
    const onlyBird = ceremony((id) => `winner-of-${id}`).filter((a) => a.id !== 'night-owl');
    chooseFeatured(onlyBird);
    expect(featured(onlyBird)).toContain('early-bird');
  });

  it('does not feature a third award for the same winner, apart from the headline awards', () => {
    const awards = ceremony(() => 'the-one-who-wins-everything');
    chooseFeatured(awards);
    expect(featured(awards)).toEqual(['night-owl', 'weekend-warrior', 'first-responder', 'crowd-favorite', 'hype-person', 'yapper']);

    const spread = ceremony((id) => (['link-librarian', 'meme-dealer', 'explorer', 'channel-founder'].includes(id) ? 'crafty' : `winner-of-${id}`));
    chooseFeatured(spread);
    expect(featured(spread).slice(0, 4)).toEqual(['link-librarian', 'meme-dealer', 'novelist', 'minimalist']);
    expect(spread.filter((a) => a.featured && a.tone === 'wholesome')).toHaveLength(12);
  });

  it('features spicy awards only for three different winners', () => {
    const awards = ceremony((id) => (id === 'town-crier' || id === 'weekend-warrior' ? 'loud' : `winner-of-${id}`));
    chooseFeatured(awards);
    expect(featured(awards).filter((id) => AWARD_CATALOG[id].tone === 'spicy')).toEqual(['weekend-warrior', 'editor', 'caps-lock-captain']);
  });

  it('copes with only a few awards', () => {
    const awards = ceremony((id) => `winner-of-${id}`).filter((a) => ['yapper', 'editor', 'explorer'].includes(a.id));
    chooseFeatured(awards);
    expect(featured(awards)).toEqual(['explorer', 'editor', 'yapper']);
  });
});

describe('awards from a real analysis', () => {
  it('names winners, runners-up and records the award on the person', async () => {
    const b = smallTeam();
    for (let i = 0; i < 30; i++) {
      const minute = String(i).padStart(2, '0');
      b.post('general', 'U1', `2026-03-10T23:${minute}:00-04:00`, `late message number ${i} with a question?`);
    }
    for (let i = 0; i < 12; i++) b.post('general', 'U2', `2026-03-11T12:${String(i).padStart(2, '0')}:00-04:00`, 'ok');
    const data = await b.analyze();
    const ids = data.awards.map((a) => a.id);
    expect(ids).toEqual(['interviewer', 'night-owl', 'monologue-master', 'yapper']);
    expect(data.awards.find((a) => a.id === 'yapper')).toMatchObject({
      winner: { person: 'U1', value: 30, display: '30 messages' },
      runnersUp: [{ person: 'U2', value: 12, display: '12 messages' }],
      featured: true,
    });
    expect(data.awards.find((a) => a.id === 'night-owl')?.winner).toEqual({ person: 'U1', value: 30, display: '30 messages after 10pm' });
    expect(person(data, 'U1').awards).toEqual(ids);
    expect(person(data, 'U2').awards).toEqual([]);
    expect(person(data, 'U1').percentile).toBe(100);
    expect(person(data, 'U2').percentile).toBe(0);
    expect(person(data, 'U1').rank).toBe(1);
  });
});
