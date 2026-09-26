import { useCallback, useEffect, useRef, useState, type DependencyList } from 'react';

import { isAbortError } from '@/api';

export type ApiState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: unknown };

/**
 * Runs `fetcher` on mount and whenever `deps` change, cancelling the previous request,
 * so an old response can never overwrite a newer one. `reload()` runs it again (for "Try again").
 */
export function useApi<T>(fetcher: (signal: AbortSignal) => Promise<T>, deps: DependencyList): ApiState<T> & { reload: () => void } {
  const [state, setState] = useState<ApiState<T>>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);
  const fetcherRef = useRef(fetcher);

  useEffect(() => {
    fetcherRef.current = fetcher;
  });

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: 'loading' });
    fetcherRef.current(controller.signal).then(
      (data) => {
        if (!controller.signal.aborted) setState({ status: 'success', data });
      },
      (error: unknown) => {
        if (!controller.signal.aborted && !isAbortError(error)) setState({ status: 'error', error });
      },
    );
    return () => controller.abort();
    // `deps` is the caller's dependency list; the latest fetcher is read from the ref.
  }, [...deps, attempt]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);
  return { ...state, reload };
}
