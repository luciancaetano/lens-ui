import React from 'react';

export interface IThemeContext {
  cssVars: Record<string, string>;
}

export default React.createContext<IThemeContext>({
  cssVars: {},
});
