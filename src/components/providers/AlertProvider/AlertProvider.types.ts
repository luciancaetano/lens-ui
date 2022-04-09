export interface IAlertItemRequest {
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  title?: string;
  text?: string;
  settings?: {
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
  };
}

export interface IAlertItemData extends IAlertItemRequest {
  id: string;
}

export interface IAlertResult {
  alertId: string;
  isConfirmed?: boolean;
  isDenied?: boolean;
  isDismissed?: boolean;
  value: boolean;
  at?: Date;
}

export interface IUseAlertHookReponse {
  addAlert: (alert: IAlertItemRequest) => Promise<IAlertResult>;
  cancelAlert: () => void;
}

export interface IAlertContextType {
  activeAlert?: IAlertItemData | null;
  queue: IAlertItemData[];
  results: Record<string, IAlertResult>;

  addAlert: (alert: IAlertItemRequest) => Promise<IAlertResult>;
  cancelAlert: () => void;
  clearQueue: () => void;
  clearResults: () => void;
}
