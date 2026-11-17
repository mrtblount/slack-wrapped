import { describe, expect, it } from 'vitest';
import { analyzeSlackExport, memorySource, SlackExportError } from '../../src/engine/index';
import { ExportBuilder, findBadValues, person, smallTeam } from './helpers';

const DAY = '2026-03-10';
const at = (time: string) => `${DAY}T${time}-04:00`;

describe('what counts as a message from a person', () => {
  it('counts plain messages and the three human subtypes, with or without a type', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'plain');
    const root = b.root('general', 'U1', at('09:01:00'), 'a thread', 1);
    b.reply('general', 'U2', at('09:02:00'), root, 'also sent to channel', { subtype: 'thread_broadcast' });
    b.post('general', 'U1', at('09:03:00'), 'waves', { subtype: 'me_message' });
    b.post('general', 'U2', at('09:04:00'), '', { subtype: 'file_share', files: [{ id: 'F1', mimetype: 'image/png' }] });
    b.post('general', 'U1', at('09:05:00'), 'no type field', { type: undefined });
    b.post('general', 'U2', at('09:06:00'), 'an old upload', { bot_id: null });
    const data = await b.analyze();
    expect(data.totals.messages).toBe(7);
    expect(data.totals.botMessages).toBe(0);
    expect(person(data, 'U1').stats.messages).toBe(4);
    expect(person(data, 'U2').stats.messages).toBe(3);
  });

  it('never counts bots as people', async () => {
    const b = smallTeam().user('UBOT', { name: 'deploybot', bot: true });
    b.post('general', 'U1', at('09:00:00'), 'the only human message');
    b.add('general', at('09:01:00'), { subtype: 'bot_message', bot_id: 'B1', username: 'jenkins', text: 'build passed' });
    b.add('general', at('09:02:00'), { user: 'UBOT', text: 'deployed' });
    b.add('general', at('09:03:00'), { user: 'U2', bot_id: 'B2', text: '', attachments: [{ footer: 'Posted using /giphy' }] });
    b.add('general', at('09:04:00'), { user: 'USLACKBOT', text: 'a reminder' });
    b.add('general', at('09:05:00'), { user: 'U555', user_profile: { is_bot: true, real_name: 'Outside Bot' }, text: 'from a connected workspace' });
    b.add('general', at('09:06:00'), { user: 'UBOT', subtype: 'thread_broadcast', thread_ts: '1.000001', text: 'bot reply' });
    const data = await b.analyze();
    expect(data.totals.messages).toBe(1);
    expect(data.totals.botMessages).toBe(6);
    expect(data.people.map((p) => p.id)).toEqual(['U1']);
    expect(data.coverage.messagesScanned).toBe(7);
  });

  it('treats every system subtype as neither a person nor a bot', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'hello');
    const system: Record<string, unknown>[] = [
      { subtype: 'channel_join', user: 'U2', text: '<@U2> has joined the channel' },
      { subtype: 'channel_leave', user: 'U2', text: '<@U2> has left the channel' },
      { subtype: 'channel_topic', user: 'U1', text: 'set the channel topic: x', topic: 'x' },
      { subtype: 'channel_purpose', user: 'U1', text: 'set the channel purpose: y' },
      { subtype: 'channel_name', user: 'U1', text: 'renamed the channel' },
      { subtype: 'channel_archive', user: 'U1', text: 'archived the channel' },
      { subtype: 'channel_unarchive', user: 'U1', text: 'un-archived the channel' },
      { subtype: 'channel_posting_permissions', user: 'U1', text: 'changed who can post' },
      { subtype: 'channel_convert_to_private', user: 'U1', text: 'made this channel private' },
      { subtype: 'channel_convert_to_public', user: 'U1', text: 'made this channel public' },
      { subtype: 'pinned_item', user: 'U1', text: 'pinned a message' },
      { subtype: 'unpinned_item', user: 'U1', text: 'unpinned a message' },
      { subtype: 'bot_add', user: 'U1', bot_id: 'B9', text: 'added an integration' },
      { subtype: 'bot_remove', user: 'U1', bot_id: 'B9', text: 'removed an integration' },
      { subtype: 'reminder_add', user: 'U1', text: 'set up a reminder' },
      { subtype: 'joiner_notification', user: 'U2', text: 'joined the workspace' },
      { subtype: 'joiner_notification_for_inviter', user: 'U2', text: 'accepted your invitation' },
      { subtype: 'sh_room_created', user: 'U1', text: 'started a call', room: { id: 'R1', date_start: 1, date_end: 100 } },
      { subtype: 'tombstone', user: 'USLACKBOT', text: 'This message was deleted.', hidden: true },
      { subtype: 'reply_broadcast', user: 'U1', text: '' },
      { subtype: 'file_comment', text: 'commented on a file', comment: { user: 'U1' } },
      { subtype: 'huddle_thread', user: 'USLACKBOT', text: 'A huddle started', room: { id: 'R2', date_start: 1773150000, date_end: 1773150600, participant_history: ['U1'] } },
      { subtype: 'some_future_event', user: 'U1', text: 'something Slack invents next year' },
      { type: 'not_a_message', user: 'U1', text: 'a different kind of object' },
    ];
    system.forEach((fields, index) => b.add('general', at(`10:${String(index).padStart(2, '0')}:00`), fields));
    const data = await b.analyze();
    expect(data.totals.messages).toBe(1);
    expect(data.totals.botMessages).toBe(0);
    expect(data.people.map((p) => p.id)).toEqual(['U1']);
    expect(person(data, 'U1').stats.words).toBe(1);
    expect(data.coverage.messagesScanned).toBe(1 + system.length);
  });

  it('names unknown authors from the message, or calls them a former member', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'hi <@U404>, welcome');
    b.post('general', 'U900', at('09:01:00'), 'hello from a connected workspace', {
      user_profile: { display_name: '', real_name: 'Zed Zulu', image_72: 'https://avatars.example/zed.png' },
    });
    b.post('general', 'U900', at('09:02:00'), 'second message');
    b.post('general', 'U901', at('09:03:00'), 'I left long ago', { reactions: [{ name: 'wave', users: ['U902'], count: 1 }] });
    const data = await b.analyze();
    expect(data.totals.messages).toBe(4);
    expect(person(data, 'U900').name).toBe('Zed Zulu');
    expect(person(data, 'U900').avatar).toBe('https://avatars.example/zed.png');
    expect(person(data, 'U900').stats.messages).toBe(2);
    expect(person(data, 'U901').name).toBe('Former member');
    expect(data.totals.reactions).toBe(1);
    expect(data.people.some((p) => p.id === 'U902' || p.id === 'U404')).toBe(false);
    expect(findBadValues(data)).toEqual([]);
  });

  it('prefers display name, then real name, then handle', async () => {
    const b = new ExportBuilder()
      .user('U1', { name: 'ann', realName: 'Ann Archer', displayName: 'annie', title: 'Head of Plants' })
      .user('U2', { name: 'bob', realName: 'Bob Baker', displayName: '' })
      .channel('general', { general: true });
    b.post('general', 'U1', at('09:00:00'), 'one');
    b.post('general', 'U2', at('09:01:00'), 'two');
    const data = await b.analyze();
    expect(person(data, 'U1')).toMatchObject({ name: 'annie', realName: 'Ann Archer', title: 'Head of Plants', tz: 'America/New_York' });
    expect(person(data, 'U2').name).toBe('Bob Baker');
    expect(person(data, 'U2').title).toBeUndefined();
  });
});

describe('files, edits and mentions', () => {
  it('counts files and images in every shape exports have used', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'two pictures and a pdf', {
      files: [
        { id: 'F1', mimetype: 'image/png' },
        { id: 'F2', mimetype: 'image/gif' },
        { id: 'F3', mimetype: 'application/pdf' },
        { id: 'F4', mode: 'tombstone' },
      ],
      upload: false,
    });
    b.post('general', 'U1', at('09:01:00'), '<@U1|ann> uploaded a file: <https://files.example/F5|chart.jpg> and commented: look at this', {
      subtype: 'file_share',
      file: { id: 'F5', mimetype: 'image/jpeg' },
      upload: true,
    });
    b.post('general', 'U2', at('09:02:00'), '', { files: [{ id: 'F6', filetype: 'png' }, { id: 'F7', filetype: 'gdoc' }] });
    b.post('general', 'U2', at('09:03:00'), 'no file here', { upload: true });
    const data = await b.analyze();
    expect(person(data, 'U1').stats).toMatchObject({ files: 4, images: 3, words: 8, links: 0, mentionsMade: 0 });
    expect(person(data, 'U2').stats).toMatchObject({ files: 2, images: 1 });
    expect(data.totals.files).toBe(6);
  });

  it('counts edits and mentions, ignoring self-mentions and bots', async () => {
    const b = smallTeam().user('UBOT', { bot: true });
    b.post('general', 'U1', at('09:00:00'), 'hey <@U2> and <@U2> and <@U1> and <@UBOT> and <@U404>', { edited: { user: 'U1', ts: '1773147700.000000' } });
    b.post('general', 'U2', at('09:01:00'), 'hi <@U1>');
    const data = await b.analyze();
    expect(person(data, 'U1').stats).toMatchObject({ edits: 1, mentionsMade: 2, mentionsReceived: 1 });
    expect(person(data, 'U2').stats).toMatchObject({ edits: 0, mentionsMade: 1, mentionsReceived: 1 });
    expect(data.totals.mentions).toBe(3);
  });
});

describe('robustness', () => {
  it('skips a day file that is not valid JSON, or not a list, and says so', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'fine');
    b.file('general/2026-03-11.json', '[{"type":"message","user":"U1","ts":"17731');
    b.file('general/2026-03-12.json', '{"not":"a list"}');
    const data = await b.analyze();
    expect(data.totals.messages).toBe(1);
    expect(data.coverage.skippedFiles).toBe(2);
    expect(data.coverage.filesScanned).toBe(1);
    expect(data.coverage.warnings.some((w) => w.includes('2 day files could not be read'))).toBe(true);
  });

  it('ignores entries that are not message objects, and messages without a usable ts', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'fine');
    b.file(
      'general/2026-03-11.json',
      JSON.stringify([
        null,
        5,
        'text',
        [],
        { type: 'message', user: 'U1', text: 'no ts at all' },
        { type: 'message', user: 'U1', ts: 'yesterday', text: 'nonsense ts' },
        { type: 'message', user: 'U1', ts: 1773237600.5, text: 'numeric ts is accepted' },
        { type: 'message', user: 'U2', ts: '1773237700.000100', text: null, reactions: 'nope', files: 7, edited: null, thread_ts: null },
        { type: 'message', user: 42, ts: '1773237800.000100', text: 'user is not a string' },
      ]),
    );
    const data = await b.analyze();
    expect(data.totals.messages).toBe(3);
    expect(person(data, 'U2').stats).toMatchObject({ messages: 1, words: 0, files: 0, edits: 0 });
    expect(findBadValues(data)).toEqual([]);
  });

  it('handles messages that are out of order inside a file', async () => {
    const b = smallTeam();
    b.file(
      'general/2026-03-10.json',
      JSON.stringify([
        { type: 'message', user: 'U2', ts: '1773151260.000300', text: 'third' },
        { type: 'message', user: 'U1', ts: '1773151200.000100', text: 'first' },
        { type: 'message', user: 'U1', ts: '1773151230.000200', text: 'second' },
      ]),
    );
    const data = await b.analyze();
    expect(person(data, 'U1').stats.longestMonologue).toBe(2);
    expect(data.moments.firstMessage?.text).toBe('first');
  });

  it('fills every field for an export with one channel and two people', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'hello');
    b.post('general', 'U2', at('09:05:00'), 'hi');
    const data = await b.analyze(undefined, 'Acme Inc Slack export Jan 1 2026 - Mar 10 2026.zip');
    expect(findBadValues(data)).toEqual([]);
    expect(data.schema).toBe(1);
    expect(data.platform).toBe('slack');
    expect(Date.parse(data.generatedAt)).not.toBeNaN();
    expect(data.workspace.name).toBe('Acme Inc');
    expect(data.workspace.id).toMatch(/^[0-9a-f]{32}$/);
    expect(data.totals).toMatchObject({ messages: 2, words: 2, activePeople: 2, activeChannels: 1, activeDays: 1, messagesPerActiveDay: 2, novels: 0 });
    expect(data.people).toHaveLength(2);
    expect(data.channels).toHaveLength(1);
    expect(data.rhythm.byMonth).toHaveLength(12);
    expect(data.rhythm.byWeekday).toHaveLength(7);
    expect(data.rhythm.byHour).toHaveLength(24);
    expect(data.rhythm.heatmap).toHaveLength(7);
    expect(data.rhythm.heatmap.every((row) => row.length === 24)).toBe(true);
    expect(data.rhythm.byDay).toHaveLength(data.period.days);
    expect(data.rhythm.byDay[0]).toEqual({ date: '2026-01-01', messages: 0 });
    expect(data.rhythm.byDay.reduce((sum, d) => sum + d.messages, 0)).toBe(2);
    expect(data.moments.busiestDay).toMatchObject({ date: DAY, messages: 2, topChannel: { id: 'CGENERAL', name: 'general' } });
    expect(data.moments.busiestDay.topPeople.sort()).toEqual(['U1', 'U2']);
    expect(data.moments.recordHour).toEqual({ date: DAY, hour: 9, messages: 2 });
    expect(data.moments.firstMessage).toEqual({ date: DAY, person: 'U1', personName: 'ann', channelName: 'general', text: 'hello' });
    expect(data.moments.topMessages).toEqual([]);
    expect(data.huddles).toBeNull();
    expect(data.awards).toEqual([]);
    expect(data.channelAwards.map((a) => a.id)).toEqual(['busiest']);
    expect(data.personality.id).toBe('steady-hands');
    expect(data.personality.traits.length).toBeGreaterThanOrEqual(3);
    expect(data.coverage.includesPrivate).toBe(false);
    expect(JSON.parse(JSON.stringify(data))).toEqual(data);
  });

  it('rejects things that are not a Slack export with a clear error', async () => {
    await expect(analyzeSlackExport(memorySource({ 'readme.txt': 'hello' }))).rejects.toMatchObject({ code: 'not-a-slack-export' });
    await expect(analyzeSlackExport(memorySource({ 'channels.json': '{broken' }))).rejects.toBeInstanceOf(SlackExportError);
    await expect(
      analyzeSlackExport(memorySource({ 'channels.json': '[{"id":"C1","name":"general"}]', 'users.json': '[]' })),
    ).rejects.toMatchObject({ code: 'no-messages' });
  });

  it('works without users.json, and says so', async () => {
    const b = smallTeam();
    b.post('general', 'U1', at('09:00:00'), 'hello', { user_profile: { display_name: 'annie' } });
    const files = b.files();
    expect(files['users.json']).toBeDefined();
    delete files['users.json'];
    const data = await analyzeSlackExport(memorySource(files));
    expect(data.people[0]).toMatchObject({ id: 'U1', name: 'annie' });
    expect(data.period.timezone).toBe('UTC');
    expect(data.coverage.warnings.some((w) => w.includes('users.json'))).toBe(true);
  });
});
