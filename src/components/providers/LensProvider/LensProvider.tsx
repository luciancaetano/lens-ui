import React from 'react';
import DeviceProvider from '../DeviceProvider/DeviceProvider';
import AlertProvider from '../AlertProvider/AlertProvider';
import ModalProvider from '../ModalProvider/ModalProvider';
import ToastProvider from '../ToastProvider/ToastProvider';
import LocaleProvider from '../LocaleProvider/LocaleProvider';
import { ILensProviderProps } from './LensProvider.types';
import { DefaultLocales } from '../../../i18n/index';
import { CLASSES } from '../../..';

const LensProvider = ({
  children, deviceContextUpdateDebounceTime = 100,
  initialLocale = DefaultLocales.enUs,
  alertSettings = {
    responseLimit: 10,
  },
  toastSettings = {
    placement: 'bottom-right',
  },
}: React.PropsWithChildren<ILensProviderProps>) => (
  <DeviceProvider debounceTime={deviceContextUpdateDebounceTime}>
    <LocaleProvider initialLocale={initialLocale}>
      <AlertProvider {...alertSettings}>
        <ToastProvider {...toastSettings}>
          <ModalProvider>
            <div id={CLASSES.PortalRootContainer} />
            {children}
          </ModalProvider>
        </ToastProvider>
      </AlertProvider>
    </LocaleProvider>
  </DeviceProvider>
);

export default LensProvider;
