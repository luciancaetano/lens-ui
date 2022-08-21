import { useContext } from 'react';
import ThemeContext from '../components/elements/ThemeProvider/ThemeContext';

/**
 * Return main theme className and customSettings provided in themeProvider
 * const [className, customSettings] = useTheme();
 */
function useTheme() {
  const { className, additionalSettings } = useContext(ThemeContext);

  return [className, additionalSettings];
}

export default useTheme;
