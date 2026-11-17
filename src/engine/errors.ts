/**
 * Errors the engine raises on purpose. Their messages are written for the person who dropped the file.
 *
 * Each can be told apart by `name` (which survives being copied across a Web Worker boundary by hand)
 * and by `code`:
 *
 *   name                    code                    when
 *   NotASlackExportError    'not-a-slack-export'    there is no readable channels.json
 *   EmptyExportError        'no-messages'           nothing written by people in the period
 *   SlackExportError        'not-a-zip'             the file is not a zip archive
 *   SlackExportError        'invalid-period'        the custom period is not two dates
 *   AbortError              (none)                  `AnalyzeOptions.signal` aborted
 */

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

/** The input is not a Slack workspace export: it has no channels.json, or one that cannot be read. */
export class NotASlackExportError extends SlackExportError {
  constructor(message: string, options?: { cause?: unknown }) {
    super('not-a-slack-export', message, options);
    this.name = 'NotASlackExportError';
  }
}

/** The export is fine but holds no messages written by people in the chosen period. */
export class EmptyExportError extends SlackExportError {
  constructor(message: string, options?: { cause?: unknown }) {
    super('no-messages', message, options);
    this.name = 'EmptyExportError';
  }
}

/**
 * The error thrown when `AnalyzeOptions.signal` aborts. Its `name` is always 'AbortError': the signal's
 * own reason when that already is one (the default), otherwise a new AbortError that carries the
 * reason's message and keeps the reason as its `cause`.
 */
export function abortError(signal: AbortSignal): Error {
  const reason: unknown = signal.reason;
  if (reason instanceof Error && reason.name === 'AbortError') return reason;
  const message =
    reason instanceof Error && reason.message !== ''
      ? reason.message
      : typeof reason === 'string' && reason !== ''
        ? reason
        : 'The analysis was cancelled.';
  let error: Error;
  if (typeof DOMException === 'function') {
    error = new DOMException(message, 'AbortError');
  } else {
    error = new Error(message);
    error.name = 'AbortError';
  }
  if (reason !== undefined) Object.defineProperty(error, 'cause', { value: reason, configurable: true, writable: true });
  return error;
}
