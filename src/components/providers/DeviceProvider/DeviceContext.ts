import React from 'react';
import { IDeviceContextType } from './DeviceProvider.types';

const DeviceContext = React.createContext<IDeviceContextType>({
  online: typeof window !== 'undefined' ? window.navigator.onLine : true,
  windowSize: {
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  },
  // eslint-disable-next-line no-nested-ternary
  orientation: typeof window !== 'undefined' ? window.innerHeight > window.innerWidth ? 'portrait' : 'landscape' : 'landscape',
  isUsingDeviceProvider: true,
  darkMode: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
});

export default DeviceContext;
