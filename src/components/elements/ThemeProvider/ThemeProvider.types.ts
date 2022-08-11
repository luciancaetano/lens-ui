import React from 'react';
import defaultThemes from './defaultThemes';

export type ThemeType = keyof typeof defaultThemes | Record<string, string> | null;

export interface IThemeProviderProps {
  children?: React.ReactNode;
  theme: ThemeType;
}
