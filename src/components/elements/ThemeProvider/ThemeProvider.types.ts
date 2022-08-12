import React from 'react';

export interface IThemeProviderProps {
  children?: React.ReactNode;
  theme: 'default' | 'dark' | string;
}
