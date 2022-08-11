import clsx from 'clsx';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { IBottomNavigationProps } from './BottomNavigation.types';
import styles from './BottomNavigation.module.scss';
import { BottomNavigationContext, IBottomNavigationContextData } from '../BottomNavigationContext';

const BottomNavigation = React.forwardRef<HTMLDivElement, IBottomNavigationProps>(({
  className, testingID, id, children, activeId, defaultActiveId, keepLabel, onChange, ...props
}, ref) => {
  const [active, setActive] = useState<string | null | undefined>(activeId || defaultActiveId);

  const handleSelect = useCallback((newId: string) => {
    if (active === newId) return;

    setActive(newId);

    if (onChange) {
      onChange(newId);
    }
  }, [active, onChange]);

  const contextValue = useMemo<IBottomNavigationContextData>(() => ({
    onSelect: handleSelect,
    activeId: active,
    keepLabel,
  }), [active, handleSelect, keepLabel]);

  useEffect(() => {
    if (activeId !== undefined) {
      setActive(activeId);
    }
  }, [activeId]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="bottomNavigation"
      className={clsx(
        styles.bottomNavigation,
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
