/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { DeviceOrientationType, IDeviceContextType, IDeviceProviderProps } from './DeviceProvider.types';
import DeviceContext from './DeviceContext';
import { useMediaQuery } from '../../../hooks';

const DeviceProvider = ({ children, debounceTime = 100 }: IDeviceProviderProps) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [orientation, setOrientation] = useState<DeviceOrientationType>(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  const [online, setOnline] = useState<boolean>(window.navigator.onLine);

  const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const lg = useMediaQuery('only screen and (min-width: 75em)');
  const md = useMediaQuery('only screen and (min-width: 64em)');
  const sm = useMediaQuery('only screen and (min-width: 48em)');
  const xs = useMediaQuery('only screen and (min-width: 75.063em)');

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

  const data = useMemo<IDeviceContextType>(() => ({
    online,
    orientation,
    windowSize: { width, height },
    darkMode,
    lg,
    md,
    sm,
    xs,
    isUsingDeviceProvider: true,
  }), [online, orientation, width, height, darkMode, xs, sm, md, lg]);

  return (
    <DeviceContext.Provider value={data}>
      {React.Children.toArray(children)}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
