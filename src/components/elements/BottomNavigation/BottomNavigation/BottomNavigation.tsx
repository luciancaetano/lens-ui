import clsx from 'clsx';
import React, {
  useCallback, useMemo,
} from 'react';
import { IBottomNavigationProps } from './BottomNavigation.types';
import styles from './BottomNavigation.module.scss';
import { BottomNavigationContext, IBottomNavigationContextData } from '../BottomNavigationContext';
import useTheme from '../../../../hooks/use-theme';
import { useControllableState } from '../../../../hooks';

const BottomNavigation = React.forwardRef<HTMLDivElement, IBottomNavigationProps>(({
  className, testingID, id, children, activeId, defaultActiveId, keepLabel, onChange, ...props
}, ref) => {
  const [active, setActive] = useControllableState<string | null | undefined>(activeId, defaultActiveId);
  const [theme] = useTheme();

  const handleSelect = useCallback((newId: string) => {
    if (active === newId) return;

    if (onChange) {
      onChange(newId);
    }
    setActive(newId);
  }, [active, onChange, setActive]);

  const contextValue = useMemo<IBottomNavigationContextData>(() => ({
    onSelect: handleSelect,
    activeId: active,
    keepLabel,
  }), [active, handleSelect, keepLabel]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="bottomNavigation"
      className={clsx(
        styles.bottomNavigation,
        theme,
        className,
      )}
      ref={ref}
    >
      <BottomNavigationContext.Provider value={contextValue}>
        {children}
      </BottomNavigationContext.Provider>
    </div>
  );
});

export default BottomNavigation;
