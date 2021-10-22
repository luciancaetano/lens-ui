import React from 'react';
import { IAlertContextType } from './AlertProvider.types';

const AlertContext = React.createContext<IAlertContextType>({
  activeAlert: null,
  queue: [],
  results: {},
  addAlert: (() => {}) as any,
  cancelAlert: () => {},
  clearQueue: () => {},
  clearResults: () => {},
});

export default AlertContext;
