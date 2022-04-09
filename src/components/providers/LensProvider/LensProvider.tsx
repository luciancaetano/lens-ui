import React from 'react';
import DeviceProvider from '../DeviceProvider/DeviceProvider';
import AlertProvider from '../AlertProvider/AlertProvider';
import ModalProvider from '../ModalProvider/ModalProvider';
import ToastProvider from '../ToastProvider/ToastProvider';
import { ILensProviderProps } from './LensProvider.types';

const LensProvider = ({
  children,
  deviceContextDebounceTimmer = 100,
  toastsPlacement = 'bottom-right',
}: React.PropsWithChildren<ILensProviderProps>) => (
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

export default LensProvider;
