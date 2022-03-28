import { RefObject, useEffect } from 'react';

export default function useOnClickOutside<T extends HTMLElement>(refs: RefObject<T>[], handler: (e:MouseEvent) => void) {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!refs.some((ref) => ref.current && ref.current.contains(event.target as Node))) {
          handler(event);
        }
      };
      if (typeof window !== 'undefined') {
        window.document.addEventListener('mousedown', listener);
        window.document.addEventListener('touchstart', listener);
      }
      return () => {
        if (typeof window !== 'undefined') {
          window.document.removeEventListener('mousedown', listener);
          window.document.removeEventListener('touchstart', listener);
        }
      };
    },
    [refs, handler],
  );
}
