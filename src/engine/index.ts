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
 * Rejects with a `SlackExportError` (see `code`) when the input is not a usable Slack export or
 * holds no messages from people in the period, and with the signal's abort reason when
 * `options.signal` aborts.
 */
export function analyzeSlackExport(source: ExportSource, options?: AnalyzeOptions): Promise<WrappedData> {
  return analyze(source, options);
}

export { memorySource, workspaceNameFromLabel, zipSource } from './sources';
export { AWARD_CATALOG, AWARD_ORDER, type AwardInfo } from './awards';
export { CHANNEL_AWARD_CATALOG } from './channel-awards';
export { SlackExportError, type SlackExportErrorCode } from './errors';
export { SCHEMA_VERSION } from './types';
export type * from './types';
