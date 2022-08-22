import { useContext } from 'react';
import ThemeContext from '../components/elements/ThemeProvider/ThemeContext';

/**
 * Return main theme className and customSettings provided in themeProvider
 * const [className, themeName, customSettings] = useTheme();
 */
function useTheme() {
  const { className, additionalSettings, theme } = useContext(ThemeContext);

  return [className, theme, additionalSettings];
}

export default useTheme;
