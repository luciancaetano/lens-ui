import React, { useMemo } from 'react';
import { IThemeProviderProps } from './ThemeProvider.types';
import ThemeContext, { IThemeContext } from './ThemeContext';

const ThemeProvider:React.FC<IThemeProviderProps> = ({
  children, theme, additionalSettings, defaultSize = 'medium',
}) => {
  const value = useMemo<IThemeContext>(() => ({
    className: theme === 'dark' || theme === 'default' ? `lens-ui-theme-${theme}` : theme,
    customSettings: additionalSettings,
    theme,
    defaultSize,
  }), [theme, additionalSettings, defaultSize]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
