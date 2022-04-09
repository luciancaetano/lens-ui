import React from 'react';

export type DeviceOrientationType = 'portrait' | 'landscape';
export type DeviceOSType = 'android' | 'ios' | false;

export type StyleIntentType = 'none' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

export interface IDeviceWindow {
  width: number;
  height: number;
}

export interface IDeviceProviderProps {
  debounceTime?: number;
  children: React.ReactNode | React.ReactNode[];
}

export interface IDeviceContextType {
  windowSize: IDeviceWindow;
  orientation: DeviceOrientationType;
  online: boolean;
}

export interface IDeviceInfo {
  windowSize: IDeviceWindow;
  orientation: DeviceOrientationType;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  os: DeviceOSType;
  online: boolean;
}
