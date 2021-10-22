import { RefObject, useEffect } from 'react';

export default function useOnClickOutside<T extends HTMLElement>(ref: RefObject<T>, handler: (e:MouseEvent) => void) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
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
    [ref, handler],
  );
}
