/**
 * Team Wrapped analysis engine.
 *
 * Reads a Slack workspace export through an `ExportSource` and returns a complete `WrappedData`.
 * Pure TypeScript with no DOM and no network: it runs unchanged in a browser Web Worker and in Node.
 * Nothing here logs or transmits message text.
 *
 *   const data = await analyzeSlackExport(zipSource(file), { onProgress });
 *
 * For a folder on disk (Node only) import `dirSource` from './node'.
 */

import type { AnalyzeOptions, ExportSource, WrappedData } from './types';
import { analyze } from './analyze';

/**
 * Analyses a Slack export.
 *
 * Rejects with an error that can be recognised by its `name`:
 *  - `NotASlackExportError` when there is no readable channels.json (after looking through a wrapping folder);
 *  - `EmptyExportError` when the export holds no messages from people in the chosen period;
 *  - `AbortError` when `options.signal` aborts;
 *  - `SlackExportError` (with `code` 'not-a-zip' or 'invalid-period') for a file that is not a zip, or a bad period.
 * The first two extend `SlackExportError` and carry `code` 'not-a-slack-export' and 'no-messages'.
 */
export function analyzeSlackExport(source: ExportSource, options?: AnalyzeOptions): Promise<WrappedData> {
  return analyze(source, options);
}

export { memorySource, workspaceNameFromLabel, zipSource } from './sources';
export { AWARD_CATALOG, AWARD_ORDER, type AwardInfo } from './awards';
export { CHANNEL_AWARD_CATALOG } from './channel-awards';
export { EmptyExportError, NotASlackExportError, SlackExportError, type SlackExportErrorCode } from './errors';
export { SCHEMA_VERSION } from './types';
export type * from './types';
