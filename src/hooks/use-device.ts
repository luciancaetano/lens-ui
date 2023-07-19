import { useMemo, useContext, useEffect } from 'react';
import DeviceContext from '../components/providers/DeviceProvider/DeviceContext';
import { DeviceOSType, IDeviceInfo } from '../types';

const getOS = (): DeviceOSType => {
  if (navigator.userAgent.match(/Android/i)) {
    return 'android';
  }
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    return 'ios';
  }
  return false;
};

export interface IUseDeviceProps {
  bemModifiersSuffix?: {
    phone?: string; // default '--is-phone'
    tablet?: string; // default '--is-tablet'
    desktop?: string; // default '--is-desktop'
  };
}

const useDevice = (): IDeviceInfo => {
  const {
    orientation, online, windowSize, isUsingDeviceProvider,
    darkMode, lg, md, sm, xs,
  } = useContext(DeviceContext);

  useEffect(() => {
    if (!isUsingDeviceProvider) {
      throw new Error('This hooks need use of device provider to works, include <DeviceProvider> in your app entry');
    }
  }, [isUsingDeviceProvider]);

  return useMemo(() => ({
    orientation,
    cordova: !!(window as any).cordova, // support cordova instance checking
    online,
    os: getOS(),
    windowSize,
    darkMode,
    lg,
    md,
    sm,
    xs,
  }), [orientation, online, windowSize, darkMode, lg, md, sm, xs]);
};

export default useDevice;
