import { LocaleType } from '../../../i18n';
import { IAlertProviderProps } from '../AlertProvider/AlertProvider.types';
import { IToastProviderProps } from '../ToastProvider/ToastProvider.types';

export interface ILensProviderProps {
  initialLocale?: LocaleType;
  deviceContextUpdateDebounceTime?: number;
  alertSettings?: IAlertProviderProps;
  toastSettings?: IToastProviderProps;
}
