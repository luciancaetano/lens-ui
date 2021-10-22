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
import { RenderContainer } from './ToastProvider.styles';
import Toast from '../../elements/Toast/Toast';

const ToastProvider: React.FC<IToastProviderProps> = ({ children, placement }) => {
  const [toasts, setToasts] = useState<IToastData[]>([]);
  const { isPhone } = useDevice();

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

  return (
    <ToastContext.Provider value={{
      add, close, closeAll, toasts, placement,
    }}
    >
      {toasts.length > 0 && (
        <RenderContainer className={clsx('lens-ui-toasts-render', { mobile: isPhone }, placement)}>
          {toatsItems}
        </RenderContainer>
      )}
      {React.Children.toArray(children)}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
