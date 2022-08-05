import React from 'react';
import DeviceProvider from '../DeviceProvider/DeviceProvider';
import AlertProvider from '../AlertProvider/AlertProvider';
import ModalProvider from '../ModalProvider/ModalProvider';
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
        <ModalProvider>
          {children}
        </ModalProvider>
      </ToastProvider>
    </AlertProvider>
  </DeviceProvider>
);

export default ApplicationProvider;
