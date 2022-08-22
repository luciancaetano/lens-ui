import React from 'react';

export interface IThemeContext {
  className: string;
  additionalSettings?: any;
  theme: 'default' | 'dark' | string;
}

export default React.createContext<IThemeContext>({
  className: '',
  theme: 'default',
});
