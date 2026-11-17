import { describe, expect, it } from 'vitest';
import shortcodes from '../../src/engine/data/emoji-shortcodes.json';
import { person, smallTeam } from './helpers';

const HEART = (shortcodes as Record<string, string>).heart!;

const at = (time: string) => `2026-03-10T${time}-04:00`;
const givers = (count: number) => Array.from({ length: count }, (_, index) => `UX${index}`);

describe('reactions and emoji', () => {
  it('counts reactions given and received, folding skin tones and aliases', async () => {
    const b = smallTeam().user('U3', { name: 'cat', displayName: 'cat' }).user('UBOT', { bot: true });
    b.post('general', 'U1', at('09:00:00'), 'we shipped :tada: :tada: :shipit:', {
      reactions: [
        { name: '+1', users: ['U2', 'U3'], count: 2 },
        { name: '+1::skin-tone-3', users: ['U9'], count: 1 },
        { name: 'thumbsup', users: ['U8'], count: 1 },
        { name: 'party-parrot', users: ['U2'], count: 1 },
        { name: 'tada', users: ['U1', 'UBOT'], count: 2 },
        { name: 'heart', users: ['U2'], count: 3 },
      ],
    });
    b.post('general', 'U2', at('09:01:00'), 'nice 👍', { reactions: [{ name: 'raised_hands::skin-tone-4', users: ['U1'], count: 1 }] });
    b.add('general', at('09:02:00'), { user: 'UBOT', text: 'deployed', reactions: [{ name: 'rocket', users: ['U1', 'U2'], count: 2 }] });
    b.add('general', at('09:03:00'), { subtype: 'channel_join', user: 'U3', text: 'joined', reactions: [{ name: 'wave', users: ['U1'], count: 1 }] });
    b.post('general', 'U3', at('09:04:00'), 'hello');

    const data = await b.analyze();
    const ann = person(data, 'U1');
    const bob = person(data, 'U2');
    const cat = person(data, 'U3');

    // Only reactions on messages from people count: 10 on Ann's, 1 on Bob's.
    expect(data.totals.reactions).toBe(11);
    expect(data.channels[0]!.reactions).toBe(11);
    expect(data.channels[0]!.reactionsPerMessage).toBeCloseTo(11 / 3, 2);

    expect(ann.stats.reactionsReceived).toBe(9); // her own :tada: does not count as received
    expect(ann.stats.reactionsGiven).toBe(2); // her own :tada:, and one on Bob's message
    expect(bob.stats.reactionsReceived).toBe(1);
    expect(bob.stats.reactionsGiven).toBe(3);
    expect(cat.stats.reactionsGiven).toBe(1);

    // +1 = 2 + 1 (skin tone) + 1 (alias) reactions + 1 typed as Unicode.
    expect(data.emoji.top[0]).toEqual({ emoji: { name: '+1', char: '👍' }, count: 5 });
    expect(data.emoji.top[1]).toEqual({ emoji: { name: 'tada', char: '🎉' }, count: 4 });
    expect(data.emoji.topReactions[0]).toEqual({ emoji: { name: '+1', char: '👍' }, count: 4 });
    expect(data.emoji.topCustom).toEqual([{ name: 'party-parrot', count: 1 }, { name: 'shipit', count: 1 }]);
    expect(data.emoji.distinct).toBe(6); // +1, tada, heart, party-parrot, shipit, raised_hands
    expect(data.emoji.total).toBe(5 + 4 + 3 + 1 + 1 + 1);
    expect(data.emoji.top.find((e) => e.emoji.name === 'party-parrot')?.emoji.char).toBeUndefined();

    expect(ann.stats.distinctEmoji).toBe(3); // tada, shipit, raised_hands
    expect(ann.stats.customEmojiUses).toBe(1);
    expect(ann.topEmoji[0]).toEqual({ emoji: { name: 'tada', char: '🎉' }, count: 3 });
    expect(bob.stats.distinctEmoji).toBe(3); // +1, party-parrot, heart
    expect(bob.stats.customEmojiUses).toBe(1);
    expect(bob.topEmoji[0]).toEqual({ emoji: { name: '+1', char: '👍' }, count: 2 });
  });

  it('keeps the five most-reacted messages, at most two per author, cleaned and cut', async () => {
    const b = smallTeam().user('U3', { name: 'cat', displayName: 'cat' });
    const post = (user: string, time: string, text: string, reactions: number, extra: Record<string, unknown> = {}) =>
      b.post('general', user, at(time), text, { reactions: [{ name: 'tada', users: givers(reactions), count: reactions }], ...extra });
    post('U1', '09:00:00', 'ann ten <@U2>', 10);
    post('U1', '09:01:00', 'ann nine', 9);
    post('U1', '09:02:00', 'ann eight', 8);
    post('U2', '09:03:00', 'bob seven', 7);
    post('U2', '09:04:00', `bob six ${'long '.repeat(80)}`, 6);
    post('U2', '09:05:00', 'bob five', 5);
    post('U3', '09:06:00', '', 4, { files: [{ id: 'F1', mimetype: 'image/png' }] });
    post('U3', '09:07:00', 'cat three', 3);
    b.post('general', 'U3', at('09:08:00'), 'cat mixed', {
      reactions: [
        { name: 'a1', users: ['U1'], count: 1 },
        { name: 'heart', users: ['U1', 'U2'], count: 2 },
        { name: 'fire', users: ['U1'], count: 1 },
        { name: 'eyes', users: ['U1'], count: 1 },
        { name: '100', users: ['U1'], count: 1 },
        { name: 'heart::skin-tone-2', users: ['U3'], count: 1 },
      ],
    });
    b.post('general', 'U1', at('09:09:00'), 'no reactions at all');

    const data = await b.analyze();
    const top = data.moments.topMessages;
    expect(top.map((m) => [m.person, m.reactions])).toEqual([['U1', 10], ['U1', 9], ['U2', 7], ['U3', 7], ['U2', 6]]);
    expect(top[0]).toMatchObject({ personName: 'ann', channelId: 'CGENERAL', channelName: 'general', date: '2026-03-10', text: 'ann ten @bob' });
    expect(top[0]!.topReactions).toEqual([{ emoji: { name: 'tada', char: '🎉' }, count: 10 }]);
    expect(top[3]!.text).toBe('cat mixed');
    expect(top[3]!.topReactions).toHaveLength(4);
    expect(top[3]!.topReactions[0]).toEqual({ emoji: { name: 'heart', char: HEART }, count: 3 });
    expect(Array.from(top[4]!.text)).toHaveLength(280);
    expect(top[4]!.text.endsWith('…')).toBe(true);
  });

  it('describes a top message that has no words', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), '', { files: [{ id: 'F1', mimetype: 'image/png' }], reactions: [{ name: 'heart', users: ['U2'], count: 1 }] });
    b.post('general', 'U2', at('09:01:00'), '', { files: [{ id: 'F2', mimetype: 'application/pdf' }], reactions: [{ name: 'eyes', users: ['U1'], count: 1 }] });
    const data = await b.analyze();
    expect(data.moments.topMessages.map((m) => m.text)).toEqual(['(shared an image)', '(shared a file)']);
  });
});
