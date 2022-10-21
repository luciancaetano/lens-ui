import React from 'react';
import { SizeType } from '../../../types';

export interface IThemeProviderProps {
  children?: React.ReactNode;
  theme: 'default' | 'dark' | string;
  additionalSettings?: Record<string, any>;
  defaultSize?: SizeType;
}
