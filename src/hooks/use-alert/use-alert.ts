import { useCallback } from 'react';
import swal from 'sweetalert2';
import {
  AlertFunctionType,
  AlertIconType, IAlertHookResponse, IAlertResult, IAlertSettings,
} from './use-alert.types';

let defaultAlertSettings: IAlertSettings = {
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Confirm',
  denyButtonText: 'Deny',
  focusCancel: false,
  focusConfirm: false,
  focusDeny: false,
  reverseButtons: false,
  showCancelButton: false,
  showCloseButton: false,
  showConfirmButton: true,
  showDenyButton: false,
};

export function setDefaultButtonsText(settings: Pick<IAlertSettings, 'cancelButtonText' | 'confirmButtonText' | 'denyButtonText'>) {
  defaultAlertSettings = {
    ...defaultAlertSettings,
    ...settings,
  };
}

function useAlert(): IAlertHookResponse {
  const alert = useCallback<AlertFunctionType>((title: string | null, text?: string | null, icon?: AlertIconType | null, settings = {}) => new Promise<IAlertResult>((resolve) => {
    const {
      cancelButtonText, confirmButtonText, denyButtonText, focusCancel, focusConfirm, focusDeny,
      reverseButtons, showCancelButton, showCloseButton, showConfirmButton, showDenyButton,
    } = { ...defaultAlertSettings, ...(settings || {}) };

    swal.fire({
      title: title || undefined,
      icon: icon || undefined,
      text: text || undefined,
      cancelButtonText: cancelButtonText || 'Cancel',
      confirmButtonText: confirmButtonText || 'Confirm',
      denyButtonText: denyButtonText || 'Deny',
      showCancelButton,
      showCloseButton,
      showConfirmButton: showConfirmButton === undefined ? true : showConfirmButton,
      showDenyButton,
      focusCancel,
      focusConfirm: focusConfirm === undefined && !focusCancel && focusDeny ? true : focusConfirm,
      focusDeny,
      reverseButtons: reverseButtons === undefined ? true : reverseButtons,
    }).then((response) => {
      resolve({
        isConfirmed: response.isConfirmed,
        isDenied: response.isDenied,
        isDismissed: response.isDenied,
        value: response.value === true,
        at: new Date(),
      });
    });
  }), []);

  const closeAlert = useCallback(() => {
    swal.close();
  }, []);

  return { alert, closeAlert };
}

export default useAlert;
