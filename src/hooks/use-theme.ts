import { useContext, useMemo } from 'react';
import ThemeContext from '../components/elements/ThemeProvider/ThemeContext';
import { SizeType } from '../types';

interface IUseThemeDataType {

  themeName: string;
  additionalSettings: any;
  defaultSize: SizeType | undefined;

}

/**
 * Return main theme className and customSettings provided in themeProvider
 * const [className, themeName, customSettings] = useTheme();
 */
function useTheme(): [string, IUseThemeDataType] {
  const {
    className, additionalSettings, theme, defaultSize,
  } = useContext(ThemeContext);

  const data = useMemo<IUseThemeDataType>(() => ({ themeName: theme, additionalSettings, defaultSize: defaultSize || 'medium' }), [theme, additionalSettings, defaultSize]);

  return [className, data];
}

export default useTheme;
