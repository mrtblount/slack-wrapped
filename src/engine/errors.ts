/** Errors the engine raises on purpose. Their messages are written for the person who dropped the file. */

export type SlackExportErrorCode =
  /** The file is not a readable zip archive. */
  | 'not-a-zip'
  /** No channels.json: this is not a Slack workspace export. */
  | 'not-a-slack-export'
  /** The export (or the chosen period) holds no messages written by people. */
  | 'no-messages'
  /** A custom period was not two valid ISO dates. */
  | 'invalid-period';

export class SlackExportError extends Error {
  readonly code: SlackExportErrorCode;

  constructor(code: SlackExportErrorCode, message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = 'SlackExportError';
    this.code = code;
  }
}

/** The error thrown when `AnalyzeOptions.signal` aborts: the signal's own reason when it is an error. */
export function abortError(signal: AbortSignal): unknown {
  const reason: unknown = signal.reason;
  if (reason instanceof Error) return reason;
  if (typeof DOMException === 'function') return new DOMException('The analysis was cancelled.', 'AbortError');
  const error = new Error('The analysis was cancelled.');
  error.name = 'AbortError';
  return error;
}
