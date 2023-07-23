import { useEffect } from 'react';
import useCallbackRef from './use-callback-ref';

type TargetType = EventTarget | null | (() => EventTarget | null);
type OptionsType = boolean | AddEventListenerOptions;

export function useEventListener<K extends keyof DocumentEventMap>(
  target: TargetType,
  event: K,
  handler?: (event: DocumentEventMap[K]) => void,
  options?: OptionsType,
): VoidFunction;

export function useEventListener<K extends keyof WindowEventMap>(
  target: TargetType,
  event: K,
  handler?: (event: WindowEventMap[K]) => void,
  options?: OptionsType,
): VoidFunction;

export function useEventListener<K extends keyof GlobalEventHandlersEventMap>(
  target: TargetType,
  event: K,
  handler?: (event: GlobalEventHandlersEventMap[K]) => void,
  options?: OptionsType,
): VoidFunction;

/**
 * A hook that adds an event listener to the target.
 */
export function useEventListener(
  target: TargetType,
  event: string,
  handler: ((event: Event) => void) | undefined,
  options?: OptionsType,
) {
  const listener = useCallbackRef(handler);

  useEffect(() => {
    const element = typeof target === 'function' ? target() : target ?? document;

    if (!handler || !element) return;

    element.addEventListener(event, listener, options);
    return () => {
      element.removeEventListener(event, listener, options);
    };
  }, [event, target, options, listener, handler]);

  return () => {
    const node = typeof target === 'function' ? target() : target ?? document;
    node?.removeEventListener(event, listener, options);
  };
}
