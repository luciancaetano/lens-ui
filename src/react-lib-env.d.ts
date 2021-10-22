/// <reference types="react-scripts" />
/* eslint @typescript-eslint/no-empty-interface: 0 */
import { ThemeTypes } from './types';

declare module '*.module.scss';

declare module 'styled-components' {
  export interface IDefaultTheme extends ThemeTypes.IThemeSettings{
    //
  }
}
