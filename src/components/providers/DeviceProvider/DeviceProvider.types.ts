import React from 'react';

export type StyleIntentType = 'none' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

export interface IDeviceProviderProps {
  debounceTime?: number;
  children: React.ReactNode | React.ReactNode[];
}
