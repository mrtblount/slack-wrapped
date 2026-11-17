# slack-wrapped

Turn a Slack workspace export into a year in review: totals, rhythms, best moments, and awards picked by
the data ("The Night Owl", "The First Responder", "The Hype Person"). It runs on your machine, in Node or
in a browser. Nothing is uploaded, and there is no Slack app to install.

This is the analysis engine behind [Team Wrapped](https://teamwrapped.com), which draws the result as an
animated awards show for your year-end all-hands. The engine is published here so you can read every line
that touches your data.

Not affiliated with Slack. Slack is a trademark of Slack Technologies, LLC.

## Try it

```sh
npx github:mrtblount/slack-wrapped "Acme Inc Slack export Jan 1 2026 - Dec 9 2026.zip"
```

It accepts the zip Slack gives you, or the folder it unzips into, and prints a report. This is an excerpt
for the fictional sample workspace you can download from
[teamwrapped.com](https://teamwrapped.com/sample/FizzBuzz%20Industries%20Slack%20export%20Jan%201%202026%20-%20Nov%2013%202026.zip):

```text
Team Wrapped: FizzBuzz Industries, 2026
Period     2026-01-01 to 2026-11-13 (317 days, times in America/New_York)

Totals
------
16,302 messages from 34 people in 36 channels
170,615 words (1.9 novels), 966,684 characters
14,306 reactions, 2,093 threads with 7,078 replies

Rhythm
------
Busiest month March, busiest day Wednesday, quietest Sunday, peak hour 9am

Awards (31; * = in the default ceremony)
----------------------------------------
* 🦉 The Night Owl [wholesome, timing]
    Mira posted the most after 10pm: 412 messages after 10pm
    then Matze (54 messages after 10pm); Hamish (21 messages after 10pm)
* 🚑 The First Responder [wholesome, social]
    Imani was first to reply more often than anyone: first to reply 303 times, usually within 2 min
* 🗣️ The Yapper [wholesome, volume]
    Priya sent the most messages: 1,182 messages
    then Imani (1,001 messages); Zuri (763 messages)

Moments
-------
Busiest day   2026-03-18: 308 messages (mostly #leafy-2-launch)
              words of the day: orders, sold, batch, bricks, four
Biggest thread 178 replies from 32 people in #general on 2026-05-12, started by Hank
              "The Brooklyn office coffee machine has made its last cup. It went with a noise I can only describe as a sigh.…"
```

Options:

| Option | What it does |
|---|---|
| `--json out.json` | Also write the full result as JSON |
| `--from 2026-01-01 --to 2026-12-31` | Report a custom period instead of the automatic one |
| `--private` | Include private channels when the export has them (direct messages are always ignored) |
| `--name "Acme Inc"` | Workspace name to show (default: taken from the file name) |
| `--no-text` | Leave message text out of the report |

## Getting an export

Only Workspace Owners and Admins can export, on every Slack plan. In Slack: **Admin → Workspace settings →
Security → Import & export data → Export**, or go straight to `your-workspace.slack.com/services/export`.
Choose a date range from January 1 to today, start the export, and download the zip when Slack emails you.
The standard export contains public channels only. There is a step-by-step guide with pictures at
[teamwrapped.com/how-to-export-slack-data](https://teamwrapped.com/how-to-export-slack-data).

## What it computes

- **Totals:** messages, words, reactions, threads, files, links, mentions, active people and channels.
- **Rhythm:** by month, weekday and hour, a weekday × hour heatmap, and every day of the period.
- **Moments:** the busiest day and what it was about, the biggest thread, the most-reacted messages, the
  busiest single hour.
- **Emoji and words:** top emoji (reactions and typed), custom emoji, the team's vocabulary, how it laughs.
- **People:** per-person stats and up to 31 awards, each going to the true top scorer, with runners-up and
  a default ceremony chosen to favour different winners.
- **Channels:** channel superlatives (busiest, night shift, thread city and more).
- **Team personality:** one archetype backed by a few numbers.

Bots and system events never count as people. Night and early-morning stats use each person's own timezone.
It does not measure productivity and should not be used for that.

## Use it as a library

```ts
import { analyzeSlackExport, zipSource } from 'slack-wrapped';

// In a browser (ideally inside a Web Worker): `file` is the zip from an <input type="file">.
const data = await analyzeSlackExport(zipSource(file, file.name), {
  onProgress: (p) => console.log(p.phase, p.filesDone, '/', p.filesTotal),
});
console.log(data.totals.messages, data.awards.map((a) => a.title));
```

```ts
// In Node, for an unzipped folder:
import { analyzeSlackExport } from 'slack-wrapped';
import { dirSource } from 'slack-wrapped/node';

const data = await analyzeSlackExport(dirSource('./acme-export'));
```

The result type, `WrappedData`, is documented field by field in
[`src/engine/types.ts`](src/engine/types.ts). It is plain JSON.

## How it treats your data

- The export is read through an `ExportSource` (a zip, a folder, or files in memory). The engine has no
  network code and never logs message text.
- A zip is read entry by entry from its central directory, so even a multi-gigabyte export is not loaded
  into memory at once. A 2-million-message export (225,000 files) takes about 20 seconds in Node.
- The only message text kept in the result is a handful of the most-reacted messages and the biggest
  thread's opening line, cut to 280 characters.

## What real exports look like

Slack's export format has a few surprises, found while testing against real exports from 2016 to 2023.
They are written up in [`SLACK-EXPORT-FORMAT.md`](SLACK-EXPORT-FORMAT.md), for anyone building on the same
files. The short version: day files are cut on Pacific time whatever your workspace's timezone, huddles
have no subtype, the `upload` flag cannot be trusted, and join events cover only a few members.

## Development

```sh
npm install
npm test          # vitest
npm run build     # bundles dist/
```

## Licence

MIT. Emoji shortcodes come from [emoji-data](https://github.com/iamcal/emoji-data) (MIT).
