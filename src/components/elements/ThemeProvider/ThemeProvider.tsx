import React, { useMemo } from 'react';
import { IThemeProviderProps } from './ThemeProvider.types';
import ThemeContext, { IThemeContext } from './ThemeContext';
import themes from './themes.module.scss';

const ThemeProvider:React.FC<IThemeProviderProps> = ({ children, theme, additionalSettings }) => {
  const value = useMemo<IThemeContext>(() => ({
    className: theme === 'dark' || theme === 'default' ? themes[theme] : theme,
    customSettings: additionalSettings,
  }), [theme, additionalSettings]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
