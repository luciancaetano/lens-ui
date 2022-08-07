import React from 'react';
import DeviceProvider from '../DeviceProvider/DeviceProvider';
import AlertProvider from '../AlertProvider/AlertProvider';
import ToastProvider from '../ToastProvider/ToastProvider';
import { IApplicationProviderProps } from './ApplicationProvider.types';

const ApplicationProvider = ({
  children,
  deviceContextDebounceTimmer = 100,
  toastsPlacement = 'bottom-right',
}: IApplicationProviderProps) => (
  <DeviceProvider debounceTime={deviceContextDebounceTimmer}>
    <AlertProvider>
      <ToastProvider placement={toastsPlacement}>
        {children}
      </ToastProvider>
    </AlertProvider>
  </DeviceProvider>
);

export default ApplicationProvider;
