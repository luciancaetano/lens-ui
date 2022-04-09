/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { DeviceOrientationType, IDeviceProviderProps } from './DeviceProvider.types';
import DeviceContext from './DeviceContext';

const DeviceProvider = ({ children, debounceTime = 100 }: IDeviceProviderProps) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [orientation, setOrientation] = useState<DeviceOrientationType>(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  const [online, setOnline] = useState<boolean>(window.navigator.onLine);

  const handleWindowResize = useDebouncedCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  }, debounceTime);

  const handleOnline = useDebouncedCallback(() => {
    setOnline(true);
  }, debounceTime);

  const handleOffLine = useDebouncedCallback(() => {
    setOnline(false);
  }, debounceTime);

  const handleOrientation = useDebouncedCallback(() => {
    setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  }, debounceTime);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleOrientation);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffLine);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleOrientation);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffLine);
    };
  });

  const data = useMemo(() => ({ online, orientation, windowSize: { width, height } }), [online, orientation, width, height]);

  return (
    <DeviceContext.Provider value={data}>
      {React.Children.toArray(children)}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
