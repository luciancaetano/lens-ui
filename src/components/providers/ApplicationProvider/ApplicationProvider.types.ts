import React from 'react';
import { ToastPlacementType } from '../ToastProvider/ToastProvider.types';

export interface IApplicationProviderProps {
  /** @description the useDevice context debounce time, this affects the waiting time for Device context updates */
  deviceContextDebounceTimmer?: number;
  /** @description The placement of the toast. */
  toastsPlacement?: ToastPlacementType;
  children: React.ReactNode | React.ReactNode[];
}
