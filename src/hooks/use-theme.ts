import { useContext } from 'react';
import ThemeContext from '../components/elements/ThemeProvider/ThemeContext';

function useTheme() {
  const { className } = useContext(ThemeContext);

  return className;
}

export default useTheme;
