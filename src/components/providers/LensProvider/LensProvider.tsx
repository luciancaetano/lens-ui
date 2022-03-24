import React from 'react';
import DeviceProvider from '../DeviceProvider/DeviceProvider';
import AlertProvider from '../AlertProvider/AlertProvider';
import ModalProvider from '../ModalProvider/ModalProvider';
import ToastProvider from '../ToastProvider/ToastProvider';
import { ILensProviderProps } from './LensProvider.types';

const LensProvider = ({
  children, deviceContextUpdateDebounceTime = 100,
  alertSettings = {
    responseLimit: 10,
  },
  toastSettings = {
    placement: 'bottom-right',
  },
}: React.PropsWithChildren<ILensProviderProps>) => (
  <DeviceProvider debounceTime={deviceContextUpdateDebounceTime}>
    <AlertProvider {...alertSettings}>
      <ToastProvider {...toastSettings}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </ToastProvider>
    </AlertProvider>
  </DeviceProvider>
);

export default LensProvider;
