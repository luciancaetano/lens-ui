import React from 'react';
import { SizeType } from '../../../types';

export interface IThemeContext {
  className: string;
  additionalSettings?: any;
  theme: 'default' | 'dark' | string;
  defaultSize?: SizeType;
}

export default React.createContext<IThemeContext>({
  className: '',
  theme: 'default',
});
