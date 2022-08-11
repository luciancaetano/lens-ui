import React, { useContext, useMemo } from 'react';
import ThemeContext from '../components/elements/ThemeProvider/ThemeContext';

export function useTheme(styles: React.CSSProperties = {}) {
  const { cssVars } = useContext(ThemeContext);

  return useMemo(() => ({
    ...styles,
    ...cssVars,
  }), [cssVars, styles]);
}
