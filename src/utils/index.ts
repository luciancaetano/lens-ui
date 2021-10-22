import isNaN from 'lodash/isNaN';
import { MutableRefObject } from 'react';

const possibilities = {
  low: 'abcdefghijklmnopqrstuvwxyz',
  cap: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  num: '0123456789',
};

export function randomId(prefix = '', len = 30, pattern = 'aA0') {
  let chars = '';

  pattern.split('').forEach((a) => {
    if (!isNaN(parseInt(a, 10))) {
      chars += possibilities.num;
    } else if (/[a-z]/.test(a)) {
      chars += possibilities.low;
    } else {
      chars += possibilities.cap;
    }
  });

  let result = '';

  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `${prefix}${result}`;
}

export const getPortalContainer = (id: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const root = window.document.getElementById('lens-ui-portal-root');
  let container = window.document.getElementById(id);

  if (!container) {
    container = window.document.createElement('div');
    container.setAttribute('id', id);
    root.appendChild(container);
  }

  return container;
};

/**
 * Z-index maping
 */
export const Layers = {
  default: 1,
  OverlaySurfaces: 1040,
  Modal: 1050,
  Alerts: 1060,
  Toast: 1070,
};

export const sleep = (ms: number, clear?: MutableRefObject<Function>) => new Promise<'completed' | 'canceled'>((resolve) => {
  const to = setTimeout(() => resolve('completed'), ms);
  if (clear) {
    clear.current = () => {
      clearTimeout(to);
      resolve('canceled');
    };
  }
});

export const modalCanEscape = (portalRoot: HTMLElement, backDropRef: MutableRefObject<HTMLDivElement>) => portalRoot && portalRoot.lastChild === backDropRef.current;
