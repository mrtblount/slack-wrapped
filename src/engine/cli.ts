/**
 * Prints a plain-text report for a Slack export. A manual test tool for the engine.
 *
 *   npx tsx src/engine/cli.ts <export.zip | folder> [--json out.json]
 *
 * Options:
 *   --json <file>        also write the full WrappedData as JSON
 *   --from <date> --to <date>   report a custom period (ISO dates) instead of the automatic one
 *   --private            include private channels when the export has them
 *   --name <name>        workspace name to show (default: taken from the file name)
 *   --no-text            leave message text out of the report
 *
 * Everything runs on this machine. Nothing is uploaded.
 */

import { openAsBlob, statSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import { analyzeSlackExport, SlackExportError, zipSource } from './index';
import { dirSource } from './node';
import { renderReport } from './report';
import type { AnalyzeOptions, WrappedData } from './types';
import { formatInt } from './format';

interface Arguments {
  input?: string;
  json?: string;
  from?: string;
  to?: string;
  name?: string;
  includePrivate: boolean;
  showText: boolean;
  help: boolean;
}

function parseArguments(argv: string[]): Arguments {
  const parsed: Arguments = { includePrivate: false, showText: true, help: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]!;
    const value = (): string => {
      const next = argv[++i];
      if (next === undefined) throw new Error(`${arg} needs a value`);
      return next;
    };
    if (arg === '--json') parsed.json = value();
    else if (arg === '--from') parsed.from = value();
    else if (arg === '--to') parsed.to = value();
    else if (arg === '--name') parsed.name = value();
    else if (arg === '--private') parsed.includePrivate = true;
    else if (arg === '--no-text') parsed.showText = false;
    else if (arg === '--help' || arg === '-h') parsed.help = true;
    else if (arg.startsWith('--')) throw new Error(`Unknown option ${arg}`);
    else if (parsed.input === undefined) parsed.input = arg;
    else throw new Error(`Unexpected argument ${arg}`);
  }
  return parsed;
}

const USAGE = `Usage: slack-wrapped <export.zip | folder> [--json out.json]
       [--from 2026-01-01 --to 2026-12-31] [--private] [--name "Acme Inc"] [--no-text]
(from a source checkout: npx tsx src/engine/cli.ts <export.zip | folder> ...)`;

async function main(): Promise<number> {
  let args: Arguments;
  try {
    args = parseArguments(process.argv.slice(2));
  } catch (error) {
    console.error(`${(error as Error).message}\n${USAGE}`);
    return 2;
  }
  if (args.help || args.input === undefined) {
    console.log(USAGE);
    return args.help ? 0 : 2;
  }

  let isDirectory: boolean;
  try {
    isDirectory = statSync(args.input).isDirectory();
  } catch {
    console.error(`Cannot find ${args.input}`);
    return 2;
  }
  const source = isDirectory ? dirSource(args.input) : zipSource(await openAsBlob(args.input), basename(args.input));

  const options: AnalyzeOptions = { includePrivateChannels: args.includePrivate };
  if (args.name !== undefined) options.workspaceName = args.name;
  if (args.from !== undefined || args.to !== undefined) {
    if (args.from === undefined || args.to === undefined) {
      console.error('Give both --from and --to.');
      return 2;
    }
    options.period = { start: args.from, end: args.to };
  }
  const showProgress = process.stderr.isTTY === true;
  if (showProgress) {
    options.onProgress = (p) => {
      process.stderr.write(`\r${p.phase} ${formatInt(p.filesDone)}/${formatInt(p.filesTotal)} files, ${formatInt(p.messages)} messages   `);
    };
  }

  const started = performance.now();
  let data: WrappedData;
  try {
    data = await analyzeSlackExport(source, options);
  } catch (error) {
    if (showProgress) process.stderr.write('\n');
    if (error instanceof SlackExportError) {
      console.error(error.message);
      return 1;
    }
    throw error;
  }
  const seconds = (performance.now() - started) / 1000;
  if (showProgress) process.stderr.write('\r' + ' '.repeat(70) + '\r');

  console.log(renderReport(data, args.showText));
  console.log();
  console.log(`Analysed in ${seconds.toFixed(1)} s, peak memory ${Math.round(process.resourceUsage().maxRSS / 1024)} MB.`);
  if (args.json !== undefined) {
    writeFileSync(args.json, JSON.stringify(data, null, 2));
    console.log(`Wrote ${args.json}`);
  }
  return 0;
}

main().then(
  (code) => {
    process.exitCode = code;
  },
  (error) => {
    console.error(error);
    process.exitCode = 1;
  },
);
