import React, { useMemo } from 'react';
import { IThemeProviderProps } from './ThemeProvider.types';
import ThemeContext, { IThemeContext } from './ThemeContext';
import defaultThemes from './defaultThemes';

function filterCssVars(theme: Record<string, string> | null | undefined) {
  if (typeof theme !== 'object' || !theme) return {} as Record<string, string>;

  return Object.keys(theme).reduce((prev, curr) => {
    if (curr.startsWith('--lens-ui-')) {
      return {
        ...prev,
        [curr]: theme[curr],
      };
    }
    return prev;
  }, {} as Record<string, string>);
}

const ThemeProvider:React.FC<IThemeProviderProps> = ({ children, theme }) => {
  const value = useMemo<IThemeContext>(() => ({
    cssVars: (typeof theme === 'string' ? defaultThemes[theme] || {} : filterCssVars(theme)),
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
