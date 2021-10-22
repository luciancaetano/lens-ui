import { useContext } from 'react';
import ToastContext from '../components/providers/ToastProvider/ToastContext';
import { IUserToasttHookReponse } from '../components/providers/ToastProvider/ToastProvider.types';

const useToast = (): IUserToasttHookReponse => {
  const {
    add, close, closeAll, toasts,
  } = useContext(ToastContext);

  return {
    addToast: add,
    toasts,
    removeToast: close,
    clearToasts: closeAll,
  };
};

export default useToast;
