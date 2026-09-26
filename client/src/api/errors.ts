export type ApiErrorKind = 'http' | 'network' | 'timeout';

/** The only error type the API layer throws (cancellations keep the browser's AbortError). */
export class ApiError extends Error {
  readonly kind: ApiErrorKind;
  /** HTTP status, for kind "http". */
  readonly status?: number;
  /** Parsed JSON body of an error response, when the server sent JSON. */
  readonly body?: unknown;

  constructor(kind: ApiErrorKind, message: string, details: { status?: number; body?: unknown; cause?: unknown } = {}) {
    super(message, { cause: details.cause });
    this.name = 'ApiError';
    this.kind = kind;
    this.status = details.status;
    this.body = details.body;
  }
}

export const isApiError = (error: unknown): error is ApiError => error instanceof ApiError;

export const isNotFound = (error: unknown): boolean => isApiError(error) && error.kind === 'http' && error.status === 404;

export const isAbortError = (error: unknown): boolean => error instanceof DOMException && error.name === 'AbortError';

export type FieldErrors<F extends string> = {
  /** First message for each known form field, e.g. { email: "Enter a valid email address." }. */
  fields: Partial<Record<F, string>>;
  /** True when something went wrong that can't be shown under a field (show the general message). */
  general: boolean;
};

/**
 * Reads Django REST Framework validation errors ({ field: ["message", ...] }) from a failed request.
 * Anything that isn't a 400 with field messages for the given fields counts as a general error.
 */
export function fieldErrors<F extends string>(error: unknown, fields: readonly F[]): FieldErrors<F> {
  const result: FieldErrors<F> = { fields: {}, general: true };
  if (!isApiError(error) || error.status !== 400 || typeof error.body !== 'object' || error.body === null) {
    return result;
  }
  const body = error.body as Record<string, unknown>;
  let other = false;
  for (const [key, value] of Object.entries(body)) {
    const message = Array.isArray(value) ? value.find((v): v is string => typeof v === 'string') : typeof value === 'string' ? value : undefined;
    if ((fields as readonly string[]).includes(key) && message) {
      result.fields[key as F] = message;
    } else {
      other = true;
    }
  }
  result.general = other || Object.keys(result.fields).length === 0;
  return result;
}
