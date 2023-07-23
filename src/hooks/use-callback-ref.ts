import React, { useCallback, useEffect, useRef } from 'react';

/**
 * Returns a memoized callback ref.
 * @param callback The callback to memoize.
 * @param deps The dependencies to use when memoizing the callback.
 * @returns A memoized callback ref.
 * @example
 * const callbackRef = useCallbackRef((value: string) => {
 *  console.log(value);
 * });
 */
export default function useCallbackRef<T extends(
  ...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = [],
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
}
