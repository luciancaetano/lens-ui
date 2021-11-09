import { useMemo, useContext } from 'react';
import { IDeviceInfo, DeviceOSType } from '../components/providers';
import DeviceContext from '../components/providers/DeviceProvider/DeviceContext';

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
  const { orientation, online, windowSize } = useContext(DeviceContext);

  return useMemo(() => ({
    orientation,
    cordova: !!(window as any).cordova, // support cordova instance checking
    online,
    os: getOS(),
    isPhone: windowSize.width < 450,
    isTablet: windowSize.width >= 450 && windowSize.width <= 850,
    isDesktop: windowSize.width > 850,
    windowSize,
  }), [online, orientation, windowSize]);
};

export default useDevice;
