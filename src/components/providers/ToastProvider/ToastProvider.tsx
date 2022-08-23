import React, {
  useState, useCallback, useMemo,
} from 'react';
import clsx from 'clsx';
import { useDevice } from '../../../hooks';
import { randomId } from '../../../utils/index';
import ToastContext from './ToastContext';
import {
  IToastCreationData, IToastData, IToastProviderProps,
} from './ToastProvider.types';
import styles from './ToastProvider.module.scss';
import Toast from '../../elements/Toast/Toast';

const ToastProvider: React.FC<IToastProviderProps> = ({ children, placement = 'bottom-right' }) => {
  const [toasts, setToasts] = useState<IToastData[]>([]);
  const { md, sm } = useDevice();

  const add = useCallback((data: IToastCreationData, id?: string) => {
    const toast: IToastData = { ...data, id: id || randomId('toast') };
    setToasts((t) => [toast, ...t]);
    return toast.id;
  }, []);

  const close = useCallback((id: string) => {
    setToasts((t) => t.filter((toast) => toast.id !== id));
  }, []);

  const closeAll = useCallback(() => {
    setToasts([]);
  }, []);

  const toatsItems = useMemo(() => toasts.map((toast) => (<Toast data={toast} key={toast.id} />)), [toasts]);

  const data = useMemo(() => ({
    add, close, closeAll, toasts, placement,
  }), [add, close, closeAll, toasts, placement]);

  return (
    <ToastContext.Provider value={data}>
      {toasts.length > 0 && (
        <div
          data-lens-element="toast-provider"
          className={clsx(
            styles.toastsProvider,
            styles[`toasts-provider--${placement}`],
            (md || sm) && styles.toastsProviderMobile,
          )}
        >
          {toatsItems}
        </div>
      )}
      {React.Children.toArray(children)}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
