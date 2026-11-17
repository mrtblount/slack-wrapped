import { describe, expect, it } from 'vitest';
import { person, smallTeam } from './helpers';

const at = (day: string, time: string) => `2026-03-${day}T${time}-04:00`;

describe('threads', () => {
  it('counts roots, replies, first replies and reply speed', async () => {
    const b = smallTeam().user('U3', { name: 'cat', displayName: 'cat' }).user('UBOT', { name: 'alerts', bot: true });

    // T1: Ann starts, Bob answers after 90 seconds, Ann replies in her own thread.
    const t1 = b.root('general', 'U1', at('10', '10:00:00'), 'who broke the build?', 2);
    b.reply('general', 'U2', at('10', '10:01:30'), t1, 'me, sorry', { parent_user_id: 'U1' });
    b.reply('general', 'U1', at('10', '10:05:00'), t1, 'no worries', { parent_user_id: 'U1' });

    // T2: Bob starts, Ann answers after 30 seconds.
    const t2 = b.root('general', 'U2', at('10', '11:00:00'), 'lunch?', 1);
    b.reply('general', 'U1', at('10', '11:00:30'), t2, 'yes');

    // T3: Bob starts, Ann answers 25 hours later: a reply, but not a "first reply".
    const t3 = b.root('general', 'U2', at('10', '12:00:00'), 'anyone?', 1);
    b.reply('general', 'U1', at('11', '13:00:00'), t3, 'sorry, late');

    // T4: Ann talks to herself in a thread. It is still a thread she started.
    const t4 = b.root('general', 'U1', at('10', '14:00:00'), 'note to self', 1);
    b.reply('general', 'U1', at('10', '14:01:00'), t4, 'done');

    // T5: a bot starts, Bob answers after two minutes. Counts for Bob, but it is not a team thread.
    const t5 = b.addRoot('general', at('10', '15:00:00'), { subtype: 'bot_message', bot_id: 'B1', text: 'ALERT: disk full', reply_count: 1 });
    b.add('general', at('10', '15:00:01'), { subtype: 'bot_message', bot_id: 'B1', text: 'not a root' });
    b.reply('general', 'U2', at('10', '15:02:00'), t5, 'on it');

    // T6: a reply to a thread whose root is older than the export window.
    b.reply('general', 'U3', at('10', '15:30:00'), '1700000000.000100', 'reviving this', { parent_user_id: 'U1' });

    // T7: no reply_count on the root; six replies observed from Ann and Cat. Bob started it.
    const t7 = b.addRoot('general', at('12', '16:00:00'), { user: 'U2', text: 'big <https://example.com|announcement> thread :tada:' });
    const repliesToT7: [string, string][] = [['U1', '16:01:00'], ['U3', '16:02:00'], ['U1', '16:03:00'], ['U3', '16:04:00'], ['U2', '16:05:00'], ['U1', '16:06:00']];
    for (const [user, time] of repliesToT7) b.reply('general', user, at('12', time), t7, 'reply');

    // T8: a plain message that looks nothing like a thread.
    b.post('general', 'U3', at('10', '17:00:00'), 'just a message');

    const data = await b.analyze();
    const ann = person(data, 'U1').stats;
    const bob = person(data, 'U2').stats;
    const cat = person(data, 'U3').stats;

    expect(ann.threadsStarted).toBe(2); // T1, T4
    expect(bob.threadsStarted).toBe(3); // T2, T3, T7
    expect(cat.threadsStarted).toBe(0);
    expect(data.totals.threads).toBe(5);

    expect(ann.replies).toBe(1 + 1 + 1 + 1 + 3); // T1, T2, T3, T4, three in T7
    expect(bob.replies).toBe(1 + 1 + 1); // T1, T5, T7
    expect(cat.replies).toBe(1 + 2); // T6, T7
    expect(data.totals.replies).toBe(13);

    expect(ann.firstReplies).toBe(2); // T2 (30 s), T7 (60 s)
    expect(ann.medianReplySeconds).toBe(45);
    expect(bob.firstReplies).toBe(2); // T1 (90 s), T5 (120 s)
    expect(bob.medianReplySeconds).toBe(105);
    expect(cat.firstReplies).toBe(0);
    expect(cat.medianReplySeconds).toBeUndefined();

    expect(data.moments.biggestThread).toEqual({
      channelId: 'CGENERAL',
      channelName: 'general',
      starter: 'U2',
      starterName: 'bob',
      date: '2026-03-12',
      replies: 6,
      participants: 3,
      text: 'big announcement thread 🎉',
    });

    const general = data.channels[0]!;
    expect(general.threads).toBe(5);
    expect(general.threadShare).toBeCloseTo(13 / data.totals.messages, 4);
    expect(data.totals.botMessages).toBe(2);
  });

  it('uses reply_count when it is larger than what was seen', async () => {
    const b = smallTeam();
    const small = b.root('general', 'U1', at('10', '10:00:00'), 'small', 2);
    b.reply('general', 'U2', at('10', '10:01:00'), small, 'a');
    b.reply('general', 'U2', at('10', '10:02:00'), small, 'b');
    b.root('general', 'U2', at('10', '11:00:00'), 'the replies were deleted or fall outside the export', 9, { reply_users_count: 4, reply_users: ['U1', 'U7', 'U8', 'U9'] });
    const data = await b.analyze();
    expect(data.moments.biggestThread).toMatchObject({ starter: 'U2', replies: 9, participants: 5 });
    expect(data.totals.threads).toBe(2);
  });

  it('gives thanks in a thread to whoever is named, or else to the thread starter', async () => {
    const b = smallTeam().user('U3', { name: 'cat', displayName: 'cat' });
    const thread = b.root('general', 'U1', at('10', '10:00:00'), 'I fixed the printer', 3);
    b.reply('general', 'U2', at('10', '10:01:00'), thread, 'thanks!');
    b.reply('general', 'U3', at('10', '10:02:00'), thread, 'thank you <@U2> for reporting it');
    b.reply('general', 'U1', at('10', '10:03:00'), thread, 'thanks all');
    b.post('general', 'U2', at('10', '11:00:00'), 'thanks <@U1> and <@U3>, and thanks <@U2>');
    b.post('general', 'U3', at('10', '12:00:00'), 'thanks to nobody in particular');
    const data = await b.analyze();
    expect(person(data, 'U1').stats).toMatchObject({ thanksGiven: 1, thanksReceived: 2 }); // Bob's reply, Bob's message
    expect(person(data, 'U2').stats).toMatchObject({ thanksGiven: 2, thanksReceived: 1 }); // Cat's reply names Bob
    expect(person(data, 'U3').stats).toMatchObject({ thanksGiven: 2, thanksReceived: 1 }); // Bob's message
    expect(data.words.thanks).toBe(5);
  });

  it('does not credit a reply to a deleted message or count the tombstone as a thread', async () => {
    const b = smallTeam();
    const gone = b.addRoot('general', at('10', '10:00:00'), { subtype: 'tombstone', user: 'USLACKBOT', text: 'This message was deleted.', hidden: true, reply_count: 1 });
    await expect(b.analyze()).rejects.toMatchObject({ code: 'no-messages' });

    b.reply('general', 'U2', at('10', '10:05:00'), gone, 'thanks', { parent_user_id: 'U1' });
    const data = await b.analyze();
    expect(data.totals).toMatchObject({ messages: 1, threads: 0, replies: 1 });
    expect(person(data, 'U2').stats).toMatchObject({ firstReplies: 0, replies: 1, thanksGiven: 1 });
    expect(data.moments.biggestThread).toBeUndefined();
  });
});
