import {
  Dispatch, SetStateAction, useEffect, useMemo, useState,
} from 'react';

function useControllableState<S>(value: S | undefined, defaultValue: S | undefined): [S | undefined, Dispatch<SetStateAction<S | undefined>>] {
  const [state, setState] = useState<S | undefined>(value || defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setState(value);
    }
  }, [value]);

  const stateSetter = useMemo(() => value !== undefined ? (() => {}) : setState, [value]);

  return [state, stateSetter];
}

export default useControllableState;
