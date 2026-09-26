import { API_BASE_URL } from './config';
import { ApiError } from './errors';

const TIMEOUT_MS = 15_000;

type QueryValue = string | number | undefined | null;

export type RequestOptions = {
  method?: 'GET' | 'POST';
  query?: Record<string, QueryValue>;
  body?: unknown;
  signal?: AbortSignal;
};

/** Django routes all end with "/"; without it every request is answered with a redirect first. */
function buildUrl(path: string, query: Record<string, QueryValue> = {}): string {
  let clean = '/' + path.replace(/^\/+/, '');
  if (!clean.endsWith('/')) clean += '/';
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null && value !== '') params.set(key, String(value));
  }
  const search = params.toString();
  return API_BASE_URL + clean + (search ? `?${search}` : '');
}

/** Adds a timeout on top of the caller's signal (AbortSignal.any is missing in some older browsers). */
function withTimeout(signal?: AbortSignal): { signal: AbortSignal; timeout: AbortSignal } {
  const timeout = AbortSignal.timeout(TIMEOUT_MS);
  if (!signal) return { signal: timeout, timeout };
  if (typeof AbortSignal.any === 'function') return { signal: AbortSignal.any([signal, timeout]), timeout };
  return { signal, timeout };
}

async function readJson(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return undefined;
  }
}

/**
 * The single place that talks to the API. Resolves with the parsed JSON body.
 * Throws ApiError for HTTP errors, network failures and timeouts; a caller's cancellation rejects with AbortError.
 */
export async function request<T>(path: string, { method = 'GET', query, body, signal }: RequestOptions = {}): Promise<T> {
  const { signal: combined, timeout } = withTimeout(signal);
  let response: Response;
  let data: unknown;
  try {
    response = await fetch(buildUrl(path, query), {
      method,
      headers: body === undefined ? { Accept: 'application/json' } : { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: combined,
    });
    data = await readJson(response);
  } catch (error) {
    if (signal?.aborted) throw error;
    if (timeout.aborted) throw new ApiError('timeout', 'The server took too long to answer.', { cause: error });
    throw new ApiError('network', 'Could not reach the server.', { cause: error });
  }
  if (!response.ok) {
    throw new ApiError('http', `The server answered with status ${response.status}.`, { status: response.status, body: data });
  }
  return data as T;
}
