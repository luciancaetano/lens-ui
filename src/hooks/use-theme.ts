import React, { useContext } from 'react';
import ThemeContext from '../components/elements/ThemeProvider/ThemeContext';

export function useTheme() {
  const { cssVars } = useContext(ThemeContext);

  return (styles: React.CSSProperties = {}) => ({
    ...styles,
    ...cssVars,
  }) as React.CSSProperties;
}
