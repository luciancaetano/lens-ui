import React, { useEffect, useMemo } from 'react';
import { IThemeProviderProps } from './ThemeProvider.types';
import ThemeContext, { IThemeContext } from './ThemeContext';
import defaultThemes from './defaultThemes';
import { randomId } from '../../../utils';

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
  const id = useMemo(() => `${randomId()}-${randomId()}-${randomId()}`, []);
  const className = useMemo(() => `lens-ui-theme-${id}`, [id]);
  const cssVars = useMemo(() => (typeof theme === 'string' ? defaultThemes[theme] || {} : filterCssVars(theme)), [theme]);

  const value = useMemo<IThemeContext>(() => ({
    className,
  }), [className]);

  useEffect(() => {
    const sheet = document.createElement('style');

    sheet.setAttribute('data-lens-ui-style-id', id);

    sheet.innerHTML = `
      .${`lens-ui-theme-${id}`} {
        ${Object.keys(cssVars).map((varName) => `${varName}: ${cssVars[varName]};`).join('\n')}
      }
    `;

    document.head.appendChild(sheet);
    return () => {
      document.head.removeChild(sheet);

      const elements = document.head.querySelectorAll(`[data-lens-ui-style-id="${id}"]`);

      elements.forEach((element) => {
        document.head.removeChild(element);
      });
    };
  }, [cssVars, id]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
