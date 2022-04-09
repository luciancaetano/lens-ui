import { ToastPlacementType } from '../ToastProvider/ToastProvider.types';

export interface ILensProviderProps {
  /** @description the useDevice context debounce time, this affects the waiting time for Device context updates */
  deviceContextDebounceTimmer?: number;
  /** @description The placement of the toast. */
  toastsPlacement?: ToastPlacementType;
}
