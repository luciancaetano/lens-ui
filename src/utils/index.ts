import isNaN from 'lodash/isNaN';
import { MutableRefObject, RefObject } from 'react';
import { CLASSES } from '../css-classes/index';

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

export const getPortalContainer = (id: string, zIndex?: number) => {
  if (typeof window === 'undefined') {
    return (null as any) as HTMLElement;
  }

  let root = window.document.getElementById(CLASSES.PortalRootContainer);
  let container = window.document.getElementById(id);

  if (!root) {
    root = window.document.createElement('div');
    root.id = CLASSES.PortalRootContainer;
    window.document.body.appendChild(root);
  }

  if (!container) {
    container = window.document.createElement('div');
    container.setAttribute('id', id);
    root.appendChild(container);
  }

  if (zIndex !== undefined && zIndex !== null) {
    container.style.zIndex = zIndex.toString();
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
  Select: 1080,
};

export const sleep = (ms: number, clear?: MutableRefObject<(() => void) | null>) => new Promise<'completed' | 'canceled'>((resolve) => {
  const to = setTimeout(() => resolve('completed'), ms);
  if (clear) {
    clear.current = () => {
      clearTimeout(to);
      resolve('canceled');
    };
  }
});

export const modalCanEscape = (portalRoot: HTMLElement, backDropRef: any) => portalRoot && portalRoot.lastChild === backDropRef.current;

export function rem2px(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function px2rem(pixels: number) {
  return pixels / parseFloat(getComputedStyle(document.documentElement).fontSize);
}
