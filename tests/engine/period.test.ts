import { describe, expect, it } from 'vitest';
import { analyzeSlackExport, memorySource } from '../../src/engine/index';
import { ExportBuilder, person, smallTeam } from './helpers';

describe('choosing the period', () => {
  it('auto: January 1 of the latest year through the latest dated file', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2025-11-03T10:00:00-05:00', 'last year');
    b.post('general', 'U1', '2026-02-03T10:00:00-05:00', 'this year');
    b.post('general', 'U2', '2026-12-09T10:00:00-05:00', 'latest');
    const data = await b.analyze();
    expect(data.period).toEqual({ start: '2026-01-01', end: '2026-12-09', label: '2026', days: 343, timezone: 'America/New_York' });
    expect(data.totals.messages).toBe(2);
    expect(data.rhythm.byDay).toHaveLength(343);
    expect(data.rhythm.byDay.at(-1)).toEqual({ date: '2026-12-09', messages: 1 });
    expect(data.rhythm.byMonth).toEqual([0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
  });

  it('auto: an export taken in early January reports the whole previous year', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2026-06-01T10:00:00-04:00', 'june');
    b.post('general', 'U1', '2026-12-31T10:00:00-05:00', 'new year eve');
    b.post('general', 'U2', '2027-01-05T10:00:00-05:00', 'back at work');
    const data = await b.analyze();
    expect(data.period).toMatchObject({ start: '2026-01-01', end: '2026-12-31', label: '2026', days: 365 });
    expect(data.totals.messages).toBe(2);
    expect(person(data, 'U1').stats.messages).toBe(2);
    expect(data.people.some((p) => p.id === 'U2')).toBe(false);
  });

  it('auto: January 20 still means last year, January 21 means this year', async () => {
    const jan20 = smallTeam();
    jan20.post('general', 'U1', '2026-08-01T10:00:00-04:00', 'summer');
    jan20.post('general', 'U1', '2027-01-20T10:00:00-05:00', 'jan 20');
    expect((await jan20.analyze()).period).toMatchObject({ start: '2026-01-01', end: '2026-12-31' });

    const jan21 = smallTeam();
    jan21.post('general', 'U1', '2026-08-01T10:00:00-04:00', 'summer');
    jan21.post('general', 'U1', '2027-01-21T10:00:00-05:00', 'jan 21');
    expect((await jan21.analyze()).period).toMatchObject({ start: '2027-01-01', end: '2027-01-21', label: '2027', days: 21 });
  });

  it('auto: a workspace born this January is not sent back to an empty last year', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2027-01-04T10:00:00-05:00', 'first day');
    b.post('general', 'U2', '2027-01-12T10:00:00-05:00', 'second week');
    const data = await b.analyze();
    expect(data.period).toMatchObject({ start: '2027-01-01', end: '2027-01-12', label: '2027' });
    expect(data.totals.messages).toBe(2);
  });

  it('accepts a custom period, in either order, and labels a span of years', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2025-11-03T10:00:00-05:00', 'a');
    b.post('general', 'U1', '2026-02-03T10:00:00-05:00', 'b');
    b.post('general', 'U2', '2026-12-09T10:00:00-05:00', 'c');
    const data = await b.analyze({ period: { start: '2025-07-01', end: '2026-06-30' } });
    expect(data.period).toMatchObject({ start: '2025-07-01', end: '2026-06-30', label: '2025–2026', days: 365 });
    expect(data.totals.messages).toBe(2);
    const swapped = await b.analyze({ period: { start: '2026-06-30', end: '2025-07-01' } });
    expect(swapped.period).toMatchObject({ start: '2025-07-01', end: '2026-06-30' });
    await expect(b.analyze({ period: { start: '2026-02-30', end: '2026-03-01' } })).rejects.toMatchObject({ code: 'invalid-period' });
    await expect(b.analyze({ period: { start: 'last year', end: 'now' } })).rejects.toMatchObject({ code: 'invalid-period' });
    await expect(b.analyze({ period: { start: '2030-01-01', end: '2030-12-31' } })).rejects.toMatchObject({ code: 'no-messages' });
  });

  it('classifies each message by its own timestamp in the team timezone, not by its file name', async () => {
    const b = smallTeam();
    // Day files are cut on Pacific days, so the file for Dec 31 holds New York's first hours of Jan 1.
    b.post('general', 'U1', '2025-12-31T23:30:00-05:00', 'still last year in New York');
    b.post('general', 'U1', '2026-01-01T00:30:00-05:00', 'new year in New York');
    b.post('general', 'U2', '2026-12-31T23:30:00-05:00', 'last minutes of the year');
    b.post('general', 'U2', '2027-01-01T01:00:00-05:00', 'next year already');
    const files = b.files();
    expect(Object.keys(files).filter((path) => path.startsWith('general/')).sort()).toEqual(['general/2025-12-31.json', 'general/2026-12-31.json']);

    const data = await analyzeSlackExport(memorySource(files), { period: { start: '2026-01-01', end: '2026-12-31' } });
    expect(data.totals.messages).toBe(2);
    expect(data.rhythm.byDay[0]).toEqual({ date: '2026-01-01', messages: 1 });
    expect(data.rhythm.byDay.at(-1)).toEqual({ date: '2026-12-31', messages: 1 });
    expect(data.moments.firstMessage).toMatchObject({ date: '2026-01-01', text: 'new year in New York' });
    expect(data.coverage.messagesScanned).toBe(4);
  });

  it('only reads day files from one day before the period to one day after it', async () => {
    const b = smallTeam();
    for (const date of ['2025-12-29', '2025-12-30', '2025-12-31', '2026-01-01', '2026-06-15', '2026-12-31', '2027-01-01', '2027-01-02', '2027-01-03']) {
      b.post('random', 'U1', `${date}T12:00:00-05:00`, date);
    }
    b.channel('random');
    const files = b.files();
    const read: string[] = [];
    const source = memorySource(files);
    const spy = { ...source, readText: (path: string) => (read.push(path), source.readText(path)) };
    const data = await analyzeSlackExport(spy, { period: { start: '2026-01-01', end: '2026-12-31' } });
    expect(data.totals.messages).toBe(3);
    const dayFilesRead = [...new Set(read.filter((path) => path.startsWith('random/')))].sort();
    // The window, plus the very first and last file of the export (for the export's true date range).
    expect(dayFilesRead).toEqual([
      'random/2025-12-29.json',
      'random/2025-12-31.json',
      'random/2026-01-01.json',
      'random/2026-06-15.json',
      'random/2026-12-31.json',
      'random/2027-01-01.json',
      'random/2027-01-03.json',
    ]);
    expect(data.coverage.firstTs).toBe(Date.parse('2025-12-29T12:00:00-05:00') / 1000);
    expect(data.coverage.lastTs).toBe(Date.parse('2027-01-03T12:00:00-05:00') / 1000);
  });

  it('warns when the export starts after the period does', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2026-03-14T10:00:00-04:00', 'first ever');
    b.post('general', 'U2', '2026-12-01T10:00:00-05:00', 'latest');
    const data = await b.analyze();
    expect(data.coverage.warnings).toContain('This export begins on March 14, 2026, so nothing before that date is counted.');

    const full = smallTeam();
    full.post('general', 'U1', '2025-12-01T10:00:00-05:00', 'earlier');
    full.post('general', 'U2', '2026-12-01T10:00:00-05:00', 'latest');
    expect((await full.analyze()).coverage.warnings.some((w) => w.includes('begins on'))).toBe(false);
  });
});

describe('which channels are read', () => {
  const build = (): ExportBuilder => {
    const b = smallTeam().channel('secret-plans', { private: true, id: 'G1' });
    b.post('general', 'U1', '2026-03-10T10:00:00-04:00', 'public');
    b.post('secret-plans', 'U2', '2026-03-10T11:00:00-04:00', 'private');
    b.post('D0123ABC', 'U1', '2026-03-10T12:00:00-04:00', 'a direct message');
    b.post('mpdm-ann--bob--cat-1', 'U1', '2026-03-10T12:30:00-04:00', 'a group direct message');
    b.post('not-in-channels-json', 'U1', '2026-03-10T13:00:00-04:00', 'orphan folder');
    b.file('dms.json', JSON.stringify([{ id: 'D0123ABC', members: ['U1', 'U2'] }]));
    b.file('mpims.json', JSON.stringify([{ id: 'G9', name: 'mpdm-ann--bob--cat-1', members: ['U1', 'U2'] }]));
    b.file('integration_logs.json', '[]');
    b.file('canvases.json', '[]');
    return b;
  };

  it('reads public channels only by default, and says what was left out', async () => {
    const data = await build().analyze();
    expect(data.totals.messages).toBe(1);
    expect(data.channels.map((c) => c.name)).toEqual(['general']);
    expect(data.coverage.includesPrivate).toBe(false);
    expect(data.coverage.warnings[0]).toBe('Only public channels were counted. The private channels and direct messages in this export were left out.');
  });

  it('includes private channels only when asked, and never direct messages', async () => {
    const b = build().channel('mpdm-ann--bob--cat-1', { private: true, id: 'G9' });
    const data = await b.analyze({ includePrivateChannels: true });
    expect(data.totals.messages).toBe(2);
    expect(data.channels.map((c) => c.name).sort()).toEqual(['general', 'secret-plans']);
    expect(data.coverage.includesPrivate).toBe(true);
  });

  it('warns that a standard export has public channels only', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2026-03-10T10:00:00-04:00', 'public');
    const data = await b.analyze({ includePrivateChannels: true });
    expect(data.coverage.includesPrivate).toBe(false);
    expect(data.coverage.warnings[0]).toBe('This export contains public channels only. Private channels and direct messages are not part of it.');
  });

  it('looks through a folder that wraps the export, whatever the source', async () => {
    const b = smallTeam();
    b.post('general', 'U1', '2026-03-10T10:00:00-04:00', 'hello');
    const wrapped: Record<string, string> = { 'notes.json': '{}' };
    for (const [path, content] of Object.entries(b.files())) wrapped[`Acme Slack export/${path}`] = content;
    const data = await analyzeSlackExport(memorySource(wrapped));
    expect(data.totals.messages).toBe(1);
    expect(data.channels.map((c) => c.name)).toEqual(['general']);
    expect(data.workspace.name).toBe('Acme');

    // What a browser hands over when someone drops the folder that holds the unzipped export.
    const dropped: Record<string, string> = {};
    for (const [path, content] of Object.entries(b.files())) dropped[`FizzBuzz Industries Slack export Jan 1 2026 - Mar 10 2026/${path}`] = content;
    const fromFolder = await analyzeSlackExport(memorySource(dropped, 'Downloads'), { workspaceName: 'Your team' });
    expect(fromFolder.totals.messages).toBe(1);
    expect(fromFolder.workspace.name).toBe('FizzBuzz Industries');
  });

  it('finds a channel folder named by id, and matches names across Unicode forms', async () => {
    const b = new ExportBuilder().user('U1').channel('café', { id: 'C0CAFE' }).channel('renamed', { id: 'C0ID' });
    b.post('café', 'U1', '2026-03-10T10:00:00-04:00', 'decomposed folder name');
    b.post('C0ID', 'U1', '2026-03-10T11:00:00-04:00', 'folder named by id');
    const data = await b.analyze();
    expect(data.channels.map((c) => c.name).sort()).toEqual(['café', 'renamed']);
  });
});
