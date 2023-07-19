export type DeviceOrientationType = 'portrait' | 'landscape';
export type DeviceOSType = 'android' | 'ios' | false;

export interface IDeviceWindow {
  width: number;
  height: number;
}

export interface IDeviceContextType {
  windowSize: IDeviceWindow;
  orientation: DeviceOrientationType;
  online: boolean;
  isUsingDeviceProvider: boolean;
  darkMode: boolean;
  lg: boolean;
  md: boolean;
  sm: boolean;
  xs: boolean;
}

export interface IDeviceInfo {
  windowSize: IDeviceWindow;
  orientation: DeviceOrientationType;
  os: DeviceOSType;
  online: boolean;
  darkMode: boolean;
  lg: boolean;
  md: boolean;
  sm: boolean;
  xs: boolean;
}
