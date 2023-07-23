import React, { useState } from 'react';
import useCallbackRef from './use-callback-ref';

export interface IUseControllableStateConfig<T> {
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
  shouldUpdate?: (prev: T, next: T) => boolean;
}

/**
 * Returns a stateful value, and a function to update it.
 */
function useControllableState<T>(valueProp: T | undefined, {
  defaultValue,
  onChange,
  shouldUpdate = (prev, next) => prev !== next,
}: IUseControllableStateConfig<T>) {
  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);

  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledState;

  const setValue = useCallbackRef(
    (next: React.SetStateAction<T>) => {
      const setter = next as (prevState?: T) => T;
      const nextValue = typeof next === 'function' ? setter(value) : next;

      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      if (!isControlled) {
        setUncontrolledState(nextValue);
      }

      onChangeProp(nextValue);
    },
    [isControlled, onChangeProp, value, shouldUpdateProp],
  );

  return [value, setValue, isControlled] as [T, React.Dispatch<React.SetStateAction<T>>, boolean];
}

export default useControllableState;
