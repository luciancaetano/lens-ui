import { IAlertProviderProps } from '../AlertProvider/AlertProvider.types';
import { IToastProviderProps } from '../ToastProvider/ToastProvider.types';

export interface ILensProviderProps {
  deviceContextUpdateDebounceTime?: number;
  alertSettings?: IAlertProviderProps;
  toastSettings?: IToastProviderProps;
}
