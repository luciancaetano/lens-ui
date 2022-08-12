import React from 'react';

export interface IThemeContext {
  className: string;
}

export default React.createContext<IThemeContext>({
  className: '',
});
