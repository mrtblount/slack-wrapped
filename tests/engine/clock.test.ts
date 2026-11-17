import { describe, expect, it } from 'vitest';
import { buildZoneTable, dayNumberFromIso, hourLabel, isValidTimeZone, isoFromDayNumber, offsetAt, weekdayOfDayNumber } from '../../src/engine/time';
import { ExportBuilder, person, seconds, smallTeam } from './helpers';

describe('timezone tables', () => {
  const first = dayNumberFromIso('2026-01-01')!;
  const last = dayNumberFromIso('2026-12-31')!;

  it('follows daylight saving changes to the second', () => {
    const newYork = buildZoneTable('America/New_York', first, last);
    // Spring forward: 2026-03-08 02:00 EST (07:00 UTC) becomes 03:00 EDT.
    expect(offsetAt(newYork, seconds('2026-03-08T06:59:59Z'))).toBe(-5 * 3600);
    expect(offsetAt(newYork, seconds('2026-03-08T07:00:00Z'))).toBe(-4 * 3600);
    // Fall back: 2026-11-01 02:00 EDT (06:00 UTC) becomes 01:00 EST.
    expect(offsetAt(newYork, seconds('2026-11-01T05:59:59Z'))).toBe(-4 * 3600);
    expect(offsetAt(newYork, seconds('2026-11-01T06:00:00Z'))).toBe(-5 * 3600);
    expect(offsetAt(newYork, seconds('2026-07-04T12:00:00Z'))).toBe(-4 * 3600);
  });

  it('handles zones east of UTC, half-hour zones and the southern hemisphere', () => {
    expect(offsetAt(buildZoneTable('Asia/Tokyo', first, last), seconds('2026-06-01T00:00:00Z'))).toBe(9 * 3600);
    expect(offsetAt(buildZoneTable('Asia/Kolkata', first, last), seconds('2026-06-01T00:00:00Z'))).toBe(5.5 * 3600);
    const sydney = buildZoneTable('Australia/Sydney', first, last);
    expect(offsetAt(sydney, seconds('2026-01-15T00:00:00Z'))).toBe(11 * 3600);
    expect(offsetAt(sydney, seconds('2026-07-15T00:00:00Z'))).toBe(10 * 3600);
    const berlin = buildZoneTable('Europe/Berlin', first, last);
    expect(offsetAt(berlin, seconds('2026-03-29T00:59:59Z'))).toBe(3600);
    expect(offsetAt(berlin, seconds('2026-03-29T01:00:00Z'))).toBe(7200);
    expect(offsetAt(buildZoneTable('UTC', first, last), seconds('2026-03-29T01:00:00Z'))).toBe(0);
  });

  it('uses the nearest edge outside its range', () => {
    const newYork = buildZoneTable('America/New_York', first, last);
    expect(offsetAt(newYork, seconds('2020-07-01T00:00:00Z'))).toBe(-5 * 3600);
    expect(offsetAt(newYork, seconds('2031-07-01T00:00:00Z'))).toBe(-5 * 3600);
  });

  it('has the small calendar helpers right', () => {
    expect(dayNumberFromIso('1970-01-01')).toBe(0);
    expect(dayNumberFromIso('2026-02-30')).toBeNull();
    expect(dayNumberFromIso('2026-3-9')).toBeNull();
    expect(isoFromDayNumber(dayNumberFromIso('2028-02-29')!)).toBe('2028-02-29');
    expect(weekdayOfDayNumber(dayNumberFromIso('2026-03-09')!)).toBe(0); // a Monday
    expect(weekdayOfDayNumber(dayNumberFromIso('2026-03-15')!)).toBe(6); // a Sunday
    expect([0, 1, 11, 12, 13, 23].map(hourLabel)).toEqual(['12am', '1am', '11am', '12pm', '1pm', '11pm']);
    expect(isValidTimeZone('Europe/Paris')).toBe(true);
    expect(isValidTimeZone('Mars/Phobos')).toBe(false);
    expect(isValidTimeZone(null)).toBe(false);
  });
});

describe('night owls and early birds', () => {
  it('classifies by the local clock across both daylight saving changes', async () => {
    const b = smallTeam();
    const posts: [string, 'night' | 'early' | 'day'][] = [
      ['2026-03-07T21:59:00-05:00', 'day'],
      ['2026-03-07T22:00:00-05:00', 'night'],
      ['2026-03-08T01:30:00-05:00', 'night'], // before the clocks change
      ['2026-03-08T03:30:00-04:00', 'night'], // after: 02:00 to 03:00 never happened
      ['2026-03-08T04:59:00-04:00', 'night'],
      ['2026-03-08T05:00:00-04:00', 'early'], // would be 04:00 (night) on winter time
      ['2026-03-08T07:59:00-04:00', 'early'],
      ['2026-03-08T08:00:00-04:00', 'day'], // would be 07:00 (early) on winter time
      ['2026-11-01T01:30:00-04:00', 'night'], // the first 01:30
      ['2026-11-01T01:30:00-05:00', 'night'], // the second 01:30
      ['2026-11-01T04:30:00-05:00', 'night'], // would be 05:30 (early) on summer time
      ['2026-11-01T07:30:00-05:00', 'early'], // would be 08:30 (day) on summer time
      ['2026-11-01T12:00:00-05:00', 'day'],
    ];
    for (const [instant, kind] of posts) b.post('general', 'U1', instant, kind);
    const data = await b.analyze();
    const ann = person(data, 'U1').stats;
    expect(ann.messages).toBe(13);
    expect(ann.nightMessages).toBe(posts.filter(([, kind]) => kind === 'night').length);
    expect(ann.earlyMessages).toBe(posts.filter(([, kind]) => kind === 'early').length);
    expect(ann.nightMessages).toBe(7);
    expect(ann.earlyMessages).toBe(3);
    // The team clock is the same New York clock here.
    expect(data.rhythm.byHour[1]).toBe(3);
    expect(data.rhythm.byHour[3]).toBe(1);
    expect(data.rhythm.byHour[2]).toBe(0);
    expect(data.channels[0]!.nightShare).toBeCloseTo(7 / 13, 4);
    expect(data.rhythm.byDay.find((d) => d.date === '2026-03-08')?.messages).toBe(6);
    expect(data.rhythm.byDay.find((d) => d.date === '2026-11-01')?.messages).toBe(5);
  });

  it("uses each person's own timezone, and the team's for team-level stats", async () => {
    const b = new ExportBuilder()
      .user('U1', { tz: 'America/New_York' })
      .user('U2', { tz: 'America/New_York' })
      .user('U3', { tz: 'Asia/Tokyo' })
      .user('U4', { tz: 'Europe/Berlin' })
      .user('U5', { tz: null })
      .user('U6', { tz: 'Mars/Phobos' })
      .user('U7', { tz: 'Asia/Tokyo', deleted: true })
      .user('U8', { tz: 'Asia/Tokyo', deleted: true })
      .user('U9', { tz: 'Asia/Tokyo', deleted: true })
      .user('UB1', { tz: 'Asia/Tokyo', bot: true })
      .channel('general', { general: true });
    // 09:00 in New York is 22:00 in Tokyo and 14:00 in Berlin.
    for (const user of ['U1', 'U3', 'U4', 'U5', 'U6']) b.post('general', user, '2026-03-10T09:00:00-04:00', 'morning in New York');
    // 01:00 in New York is 14:00 in Tokyo and 06:00 in Berlin.
    for (const user of ['U1', 'U3', 'U4']) b.post('general', user, '2026-03-10T01:00:00-04:00', 'middle of the night in New York');
    // Berlin changes its clocks on March 29, three weeks after New York.
    b.post('general', 'U4', '2026-03-27T23:45:00-04:00', 'Berlin, 04:45 on winter time: night');
    b.post('general', 'U4', '2026-03-28T23:30:00-04:00', 'Berlin, 05:30 on summer time: early');

    const data = await b.analyze();
    expect(data.period.timezone).toBe('America/New_York');
    expect(person(data, 'U1').stats).toMatchObject({ nightMessages: 1, earlyMessages: 0 });
    expect(person(data, 'U3').stats).toMatchObject({ nightMessages: 1, earlyMessages: 0 });
    expect(person(data, 'U3').peakHour === 22 || person(data, 'U3').peakHour === 14).toBe(true);
    expect(person(data, 'U4').stats).toMatchObject({ nightMessages: 1, earlyMessages: 2 });
    expect(person(data, 'U5').stats).toMatchObject({ nightMessages: 0, earlyMessages: 0 });
    expect(person(data, 'U5').peakHour).toBe(9);
    expect(person(data, 'U5').tz).toBeUndefined();
    expect(person(data, 'U6').peakHour).toBe(9);
    expect(person(data, 'U6').tz).toBeUndefined();
    // Team time: five messages at 09:00, three at 01:00, one at 23:45 and one at 23:30.
    expect(data.rhythm.byHour[9]).toBe(5);
    expect(data.rhythm.byHour[1]).toBe(3);
    expect(data.channels[0]!.nightShare).toBeCloseTo(5 / 10, 4);
    expect(data.channels[0]!.peakHour).toBe(9);
    expect(data.moments.recordHour).toEqual({ date: '2026-03-10', hour: 9, messages: 5 });
  });

  it('picks the most common timezone of current, human members as the team timezone', async () => {
    const b = new ExportBuilder()
      .user('U1', { tz: 'Europe/London' })
      .user('U2', { tz: 'Europe/Berlin' })
      .user('U3', { tz: 'Europe/Berlin' })
      .user('U4', { tz: 'Not/AZone' })
      .user('U5', { tz: 'Not/AZone' })
      .user('U6', { tz: 'Not/AZone' })
      .channel('general', { general: true });
    b.post('general', 'U1', '2026-06-10T12:00:00+01:00', 'noon in London, 13:00 in Berlin');
    const data = await b.analyze();
    expect(data.period.timezone).toBe('Europe/Berlin');
    expect(data.rhythm.busiestHour).toBe(13);
    expect(person(data, 'U1').peakHour).toBe(12);
  });

  it('counts weekends and weekdays on the author\'s own calendar', async () => {
    const b = new ExportBuilder().user('U1').user('U2').user('U3', { tz: 'Asia/Tokyo' }).channel('general', { general: true });
    // Friday noon in New York is Saturday 01:00 in Tokyo.
    b.post('general', 'U1', '2026-03-13T12:00:00-04:00', 'friday');
    b.post('general', 'U3', '2026-03-13T12:00:00-04:00', 'saturday for me');
    // Sunday 20:00 in New York is Monday 09:00 in Tokyo.
    b.post('general', 'U1', '2026-03-15T20:00:00-04:00', 'sunday');
    b.post('general', 'U3', '2026-03-15T20:00:00-04:00', 'monday for me');
    const data = await b.analyze();
    expect(person(data, 'U1').stats.weekendMessages).toBe(1);
    expect(person(data, 'U3').stats.weekendMessages).toBe(1);
    expect(person(data, 'U3').peakWeekday === 5 || person(data, 'U3').peakWeekday === 0).toBe(true);
    // Team calendar: two on Friday, two on Sunday.
    expect(data.rhythm.byWeekday).toEqual([0, 0, 0, 0, 2, 0, 2]);
    expect(data.rhythm.heatmap[4]![12]).toBe(2);
    expect(data.rhythm.heatmap[6]![20]).toBe(2);
  });
});

describe('streaks, monologues and bookends', () => {
  it('counts the longest run of weekdays; weekends neither break it nor add to it', async () => {
    const b = smallTeam();
    // Mon 9 to Fri 13, a Saturday, Mon 16 to Wed 18, nothing Thursday, then Fri 20.
    for (const day of ['09', '10', '11', '12', '13', '14', '16', '17', '18', '20']) {
      b.post('general', 'U1', `2026-03-${day}T10:00:00-04:00`, 'here');
      b.post('general', 'U1', `2026-03-${day}T15:00:00-04:00`, 'still here');
    }
    b.post('general', 'U2', '2026-03-14T10:00:00-04:00', 'saturday only');
    b.post('general', 'U2', '2026-03-15T10:00:00-04:00', 'sunday only');
    const data = await b.analyze();
    expect(person(data, 'U1').stats).toMatchObject({ longestStreak: 8, activeDays: 10, weekendMessages: 2 });
    expect(person(data, 'U1').busiestDay).toEqual({ date: '2026-03-09', messages: 2 });
    expect(person(data, 'U1').firstMessageDate).toBe('2026-03-09');
    expect(person(data, 'U2').stats).toMatchObject({ longestStreak: 0, activeDays: 2, weekendMessages: 2 });
    expect(data.totals.activeDays).toBe(11);
    expect(data.rhythm.byWeekday).toEqual([4, 4, 4, 2, 4, 3, 1]);
    expect(data.rhythm.quietestWeekday).toBe(6);
  });

  it('measures monologues: top-level messages in a row, less than ten minutes apart', async () => {
    const b = smallTeam().user('UBOT', { bot: true }).channel('random');
    const day = (time: string) => `2026-03-10T${time}-04:00`;
    // Four in a row, with a thread reply from Bob in between that does not interrupt the channel.
    const first = b.root('general', 'U1', day('09:00:00'), 'one', 1);
    b.post('general', 'U1', day('09:02:00'), 'two');
    b.reply('general', 'U2', day('09:03:00'), first, 'a reply in the thread');
    b.post('general', 'U1', day('09:04:00'), 'three');
    b.post('general', 'U1', day('09:13:59'), 'four, just inside ten minutes');
    b.post('general', 'U1', day('09:23:59'), 'ten minutes later: a new run');
    b.post('general', 'U2', day('09:25:00'), 'bob interrupts');
    b.post('general', 'U2', day('09:26:00'), 'bob again');
    b.add('general', day('09:27:00'), { user: 'UBOT', text: 'a bot interrupts' });
    b.post('general', 'U2', day('09:28:00'), 'bob after the bot');
    // Another channel does not interrupt either.
    b.post('random', 'U2', day('09:01:00'), 'elsewhere');
    const data = await b.analyze();
    expect(person(data, 'U1').stats.longestMonologue).toBe(4);
    expect(person(data, 'U2').stats.longestMonologue).toBe(2);
  });

  it('credits the first and last word of the day only in channels with five or more messages that day', async () => {
    const b = smallTeam().user('U3', { name: 'cat' }).channel('random').channel('quiet');
    const day = (date: string, time: string) => `2026-03-${date}T${time}-04:00`;
    // general, Mar 10: five messages. Ann opens, Cat closes.
    b.post('general', 'U1', day('10', '08:00:00'), 'a');
    b.post('general', 'U2', day('10', '09:00:00'), 'b');
    b.post('general', 'U2', day('10', '10:00:00'), 'c');
    b.post('general', 'U1', day('10', '11:00:00'), 'd');
    b.post('general', 'U3', day('10', '23:30:00'), 'e, late but still March 10 in New York');
    // general, Mar 11: four messages. Nobody gets credit.
    for (const time of ['08:00:00', '09:00:00', '10:00:00', '11:00:00']) b.post('general', 'U2', day('11', time), 'x');
    // random, Mar 10: five messages, all Bob. He opens and closes.
    for (const time of ['08:30:00', '09:30:00', '10:30:00', '11:30:00', '12:30:00']) b.post('random', 'U2', day('10', time), 'y');
    // quiet, Mar 10: a bot and joins do not count towards the five.
    for (const time of ['08:00:00', '09:00:00', '10:00:00', '11:00:00']) b.post('quiet', 'U3', day('10', time), 'z');
    b.add('quiet', day('10', '12:00:00'), { subtype: 'bot_message', bot_id: 'B1', text: 'bot' });
    b.add('quiet', day('10', '13:00:00'), { subtype: 'channel_join', user: 'U1', text: 'joined' });
    const data = await b.analyze();
    expect(person(data, 'U1').stats).toMatchObject({ dayStarters: 1, dayClosers: 0 });
    expect(person(data, 'U2').stats).toMatchObject({ dayStarters: 1, dayClosers: 1 });
    expect(person(data, 'U3').stats).toMatchObject({ dayStarters: 0, dayClosers: 1 });
  });
});
