export type AlertIconType = 'success' | 'error' | 'warning' | 'info' | 'question';

export interface IAlertSettings {
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  showConfirmButton?: boolean;
  showDenyButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
  denyButtonText?: string;
  focusCancel?: boolean;
  focusConfirm?: boolean;
  focusDeny?: boolean;
  reverseButtons?: boolean;
}

export interface IAlertResult {
  isConfirmed?: boolean;
  isDenied?: boolean;
  isDismissed?: boolean;
  value: boolean;
  at?: Date;
}

export type AlertFunctionType = (title: string | null, text?: string | null, icon?: AlertIconType | null, settings?: IAlertSettings) => Promise<IAlertResult>;

export interface IAlertHookResponse {
  alert: AlertFunctionType;
  closeAlert: () => void;
}

export type UseAlertHookType = () => IAlertHookResponse;
