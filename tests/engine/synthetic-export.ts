/**
 * Writes a large synthetic Slack export zip for checking the engine's speed and memory.
 * Not a test: run it by hand, then time the analysis with the CLI.
 *
 *   npx tsx tests/engine/synthetic-export.ts /tmp/big.zip --messages 200000
 *   npx tsx src/engine/cli.ts /tmp/big.zip --no-text
 *
 * Options: --messages N (default 200000)  --channels N (80)  --people N (150)  --days N (330)  --seed N (1)
 *
 * The content is random words: it looks nothing like a real team, but the JSON has the shape and
 * size of a real export (user_profile, blocks, reactions, threads, files, bots, join events), and
 * day files are cut on Pacific days like Slack's.
 */

import { createWriteStream } from 'node:fs';
import { Writable } from 'node:stream';
import { TextReader, ZipWriter } from '@zip.js/zip.js/lib/zip-core-native.js';

const args = process.argv.slice(2);
const output = args.find((arg) => !arg.startsWith('--'));
const option = (name: string, fallback: number): number => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 ? Number(args[index + 1]) : fallback;
};
if (!output) {
  console.error('Usage: npx tsx tests/engine/synthetic-export.ts <out.zip> [--messages N] [--channels N] [--people N] [--days N] [--seed N]');
  process.exit(2);
}
const MESSAGES = option('messages', 200_000);
const CHANNELS = option('channels', 80);
const PEOPLE = option('people', 150);
const DAYS = option('days', 330);

let state = option('seed', 1) >>> 0;
/** mulberry32: a small seeded generator, so runs are repeatable. */
function random(): number {
  state = (state + 0x6d2b79f5) >>> 0;
  let t = state;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
const pick = <T>(list: readonly T[]): T => list[Math.floor(random() * list.length)]!;
/** Index in 0..n-1, heavily favouring the low ones (a rough Zipf). */
const skewed = (n: number): number => Math.min(n - 1, Math.floor(n * random() ** 3));

const SYLLABLES = ['ka', 'lo', 'mi', 'ter', 'san', 'du', 'vel', 'pra', 'no', 'shi', 'bur', 'el', 'qui', 'ton', 'ra', 'fe', 'gro', 'zu', 'pim', 'dax'];
const WORDS: string[] = [];
for (let i = 0; i < 6000; i++) {
  let word = '';
  const parts = 1 + Math.floor(random() * 3);
  for (let j = 0; j < parts; j++) word += pick(SYLLABLES);
  WORDS.push(word);
}
const COMMON = ['the', 'and', 'that', 'this', 'with', 'for', 'you', 'have', 'not', 'are', 'but', 'what', 'can', 'will', 'just', 'thanks', 'please', 'haha', 'lol', 'ok'];
const EMOJI = ['tada', '+1', 'heart', 'joy', 'eyes', 'fire', 'raised_hands', 'pray', 'rocket', '100', 'party-parrot', 'shipit', 'thinking_face', 'white_check_mark', '+1::skin-tone-3'];
const ZONES = ['America/New_York', 'America/New_York', 'America/New_York', 'America/Los_Angeles', 'America/Chicago', 'Europe/London', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Tokyo', 'Australia/Sydney'];
const ZONE_HOURS: Record<string, number> = { 'America/New_York': -5, 'America/Los_Angeles': -8, 'America/Chicago': -6, 'Europe/London': 0, 'Europe/Berlin': 1, 'Asia/Kolkata': 5.5, 'Asia/Tokyo': 9, 'Australia/Sydney': 10 };

const users = Array.from({ length: PEOPLE }, (_, index) => {
  const id = `U${String(index + 1).padStart(8, '0')}`;
  const zone = pick(ZONES);
  const first = pick(WORDS);
  const last = pick(WORDS);
  return {
    id,
    team_id: 'T0SYNTHETIC',
    name: `${first}.${last}`,
    deleted: index % 23 === 22,
    real_name: `${first} ${last}`,
    tz: zone,
    profile: { real_name: `${first} ${last}`, display_name: index % 3 === 0 ? '' : first, title: 'Synthetic person', image_72: `https://avatars.example/${id}_72.png`, image_192: `https://avatars.example/${id}_192.png`, team: 'T0SYNTHETIC' },
    is_bot: false,
  };
});
const bot = { id: 'UBOT0001', team_id: 'T0SYNTHETIC', name: 'deploybot', deleted: false, real_name: 'Deploy Bot', profile: { real_name: 'Deploy Bot', display_name: 'deploybot', bot_id: 'B0000001' }, is_bot: true };

const FIRST_DAY = Date.UTC(2026, 0, 1) / 86400000;
const channels = Array.from({ length: CHANNELS }, (_, index) => ({
  id: `C${String(index + 1).padStart(8, '0')}`,
  name: index === 0 ? 'general' : `${pick(WORDS)}-${index}`,
  created: index % 5 === 4 ? (FIRST_DAY + Math.floor(random() * DAYS)) * 86400 + 50000 : 1600000000 + index,
  creator: users[skewed(PEOPLE)]!.id,
  is_archived: false,
  is_general: index === 0,
  members: [],
  topic: { value: '', creator: '', last_set: 0 },
  purpose: { value: `Talk about ${pick(WORDS)}.`, creator: '', last_set: 0 },
}));

function sentence(): string {
  const length = 2 + Math.floor(random() ** 2 * 40);
  const words: string[] = [];
  for (let i = 0; i < length; i++) words.push(random() < 0.45 ? pick(COMMON) : WORDS[skewed(WORDS.length)]!);
  let text = words.join(' ');
  const roll = random();
  if (roll < 0.12) text += '?';
  else if (roll < 0.2) text += '!';
  if (random() < 0.08) text += ` <@${users[skewed(PEOPLE)]!.id}>`;
  if (random() < 0.06) text += ` <https://example.com/${pick(WORDS)}/${Math.floor(random() * 1e6)}|${pick(WORDS)} doc>`;
  if (random() < 0.1) text += ` :${pick(EMOJI).split('::')[0]}:`;
  if (random() < 0.02) text += ' `kubectl get pods` ';
  if (random() < 0.01) text = text.toUpperCase();
  if (random() < 0.004) text = `<!here> ${text}`;
  return text;
}

function reactions(): unknown[] {
  const list: unknown[] = [];
  const kinds = 1 + Math.floor(random() * 3);
  for (let i = 0; i < kinds; i++) {
    const count = 1 + Math.floor(random() ** 3 * 12);
    list.push({ name: pick(EMOJI), users: Array.from({ length: count }, () => users[skewed(PEOPLE)]!.id), count });
  }
  return list;
}

async function main(): Promise<void> {
  const started = performance.now();
  const writer = new ZipWriter(Writable.toWeb(createWriteStream(output!)) as WritableStream<Uint8Array>, { useWebWorkers: false, level: 3 });
  const add = (path: string, value: unknown): Promise<unknown> => writer.add(path, new TextReader(JSON.stringify(value)));
  await add('channels.json', channels);
  await add('users.json', [...users, bot]);
  await add('integration_logs.json', { logs: [] });

  // Share the messages out: a few busy channels, a long tail of quiet ones.
  const weights = channels.map((_, index) => 1 / (index + 1) ** 0.8);
  const weightTotal = weights.reduce((sum, w) => sum + w, 0);
  let written = 0;
  let files = 0;
  let serial = 0;
  for (let c = 0; c < CHANNELS; c++) {
    const channel = channels[c]!;
    const perDay = (MESSAGES * weights[c]!) / weightTotal / DAYS;
    const members = Array.from({ length: Math.max(3, Math.round(PEOPLE / (1 + c / 4))) }, () => users[skewed(PEOPLE)]!);
    let openThreads: { ts: string; user: string }[] = [];
    for (let d = 0; d < DAYS; d++) {
      const weekday = (FIRST_DAY + d + 3) % 7;
      const mean = perDay * (weekday >= 5 ? 0.25 : 1.15);
      // Poisson-ish: round with a random carry so quiet channels still get the odd message.
      const count = Math.floor(mean) + (random() < mean % 1 ? 1 : 0);
      if (count === 0) continue;
      const dayStart = (FIRST_DAY + d) * 86400 + 8 * 3600; // Pacific midnight in winter
      const times: number[] = [];
      for (let i = 0; i < count; i++) {
        const author = members[skewed(members.length)]!;
        // People post around the middle of their own working day, with the odd night owl.
        const localHour = random() < 0.06 ? random() * 24 : 9 + random() * 9;
        const utcHour = (localHour - ZONE_HOURS[author.tz]! + 48) % 24;
        const offsetInDay = ((utcHour - 8 + 24) % 24) * 3600 + Math.floor(random() * 3600);
        times.push(dayStart + offsetInDay);
      }
      times.sort((a, b) => a - b);
      const list: Record<string, unknown>[] = [];
      for (const time of times) {
        const author = members[skewed(members.length)]!;
        const ts = `${time}.${String(++serial % 1000000).padStart(6, '0')}`;
        const roll = random();
        if (roll < 0.01) {
          list.push({ type: 'message', subtype: 'channel_join', ts, user: author.id, text: `<@${author.id}> has joined the channel` });
          continue;
        }
        if (roll < 0.03) {
          list.push({ type: 'message', subtype: 'bot_message', ts, bot_id: 'B0000001', username: 'deploybot', text: `Deployed ${pick(WORDS)}`, attachments: [{ fallback: 'deploy', color: '36a64f' }] });
          continue;
        }
        const text = sentence();
        const message: Record<string, unknown> = {
          client_msg_id: `${serial.toString(16)}-4b1f-4b1f-9c1f-${Math.floor(random() * 1e12).toString(16)}`,
          type: 'message',
          text,
          user: author.id,
          ts,
          blocks: [{ type: 'rich_text', block_id: serial.toString(36), elements: [{ type: 'rich_text_section', elements: [{ type: 'text', text }] }] }],
          team: 'T0SYNTHETIC',
          user_team: 'T0SYNTHETIC',
          source_team: 'T0SYNTHETIC',
          user_profile: { avatar_hash: 'abcdef123456', image_72: author.profile.image_72, first_name: author.real_name.split(' ')[0], real_name: author.real_name, display_name: author.profile.display_name, team: 'T0SYNTHETIC', name: author.name, is_restricted: false, is_ultra_restricted: false },
        };
        if (random() < 0.25) message.reactions = reactions();
        if (random() < 0.04) message.edited = { user: author.id, ts };
        if (random() < 0.03) message.files = [{ id: `F${serial}`, name: 'image.png', mimetype: random() < 0.7 ? 'image/png' : 'application/pdf', filetype: 'png', mode: 'hosted' }];
        if (openThreads.length > 0 && random() < 0.35) {
          const root = openThreads[Math.floor(random() * openThreads.length)]!;
          message.thread_ts = root.ts;
          message.parent_user_id = root.user;
        } else if (random() < 0.2) {
          message.thread_ts = ts;
          message.reply_count = 1 + Math.floor(random() * 6);
          message.reply_users_count = 1;
          openThreads.push({ ts, user: author.id });
          if (openThreads.length > 12) openThreads = openThreads.slice(-12);
        }
        list.push(message);
      }
      const date = new Date((FIRST_DAY + d) * 86400000).toISOString().slice(0, 10);
      await add(`${channel.name}/${date}.json`, list);
      written += list.length;
      files++;
      if (files % 5000 === 0) process.stderr.write(`\r${files} files, ${written} messages`);
    }
  }
  await writer.close();
  process.stderr.write('\r');
  console.log(`Wrote ${output}: ${files.toLocaleString('en-US')} day files, ${written.toLocaleString('en-US')} message objects, in ${((performance.now() - started) / 1000).toFixed(1)} s`);
}

await main();
