import React from 'react';

export interface IThemeContext {
  className: string;
  additionalSettings?: any;
}

export default React.createContext<IThemeContext>({
  className: '',
});
