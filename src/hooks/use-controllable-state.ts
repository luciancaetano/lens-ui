import {
  Dispatch, SetStateAction, useEffect, useMemo, useState,
} from 'react';

function useControllableState<S, R = S>(value: S | undefined, defaultValue: S | undefined, initialDefault?: S): [R, Dispatch<SetStateAction<S | undefined>>] {
  const [state, setState] = useState<S | undefined>(value || defaultValue || initialDefault);

  useEffect(() => {
    if (value !== undefined) {
      setState(value);
    }
  }, [value]);

  const stateSetter = useMemo(() => value !== undefined ? (() => {}) : setState, [value]);

  if (!state && initialDefault) {
    return [initialDefault as unknown as R, stateSetter];
  }

  return [state as unknown as R, stateSetter];
}

export default useControllableState;
