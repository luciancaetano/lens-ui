import React from 'react';
import { IToastContextType } from './ToastProvider.types';

const AlertContext = React.createContext<IToastContextType>({
  toasts: [],
  close: () => {},
  closeAll: () => {},
  add: (() => {}) as any,
  placement: 'bottom-right',
});

export default AlertContext;
