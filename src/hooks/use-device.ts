import { useMemo, useContext, useCallback } from 'react';
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

export interface IUseDeviceResponse extends IDeviceInfo {
  deviceModifier: (className: string) => string;
}

const defaultBemModifiersSuffix = {
  phone: 'is-phone',
  tablet: 'is-tablet',
  desktop: 'is-desktop',
};

const useDevice = (props:IUseDeviceProps = {
  bemModifiersSuffix: defaultBemModifiersSuffix,
}): IUseDeviceResponse => {
  const { orientation, online, windowSize } = useContext(DeviceContext);

  const result = useMemo(() => ({
    orientation,
    cordova: !!(window as any).cordova, // support cordova instance checking
    online,
    os: getOS(),
    isPhone: windowSize.width < 450,
    isTablet: windowSize.width >= 450 && windowSize.width <= 850,
    isDesktop: windowSize.width > 850,
    windowSize,
  }), [online, orientation, windowSize]);

  const deviceModifier = useCallback((className: string) => {
    if (result.isPhone) return `${className} ${className}--${props.bemModifiersSuffix.phone || defaultBemModifiersSuffix.phone}`;
    if (result.isTablet) return `${className} ${className}--${props.bemModifiersSuffix.tablet || defaultBemModifiersSuffix.tablet}`;
    if (result.isDesktop) return `${className} ${className}--${props.bemModifiersSuffix.desktop || defaultBemModifiersSuffix.desktop}`;

    return className;
  }, [props.bemModifiersSuffix, result.isDesktop, result.isPhone, result.isTablet]);

  return { ...result, deviceModifier };
};

export default useDevice;
