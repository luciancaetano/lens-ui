import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { ICollapseProps } from './Collapse.types';
import styles from './Collapse.module.scss';
import { useControllableState, useTheme } from '../../../hooks';
import { CollapseContext, ICollapseContextType } from './CollapseContext';

const Collapse = React.forwardRef<HTMLDivElement, ICollapseProps>(({
  className, testingID, id, children, activeId, defaultActiveId, expandIcon, onChange, singleExpand = true, ...props
}, ref) => {
  const [ids, setIds] = useControllableState(activeId, defaultActiveId);
  const theme = useTheme();

  const handleChange = useCallback((i: string[]) => {
    setIds(i);
    if (onChange) {
      onChange(i);
    }
  }, [onChange, setIds]);

  const contextValue = useMemo<ICollapseContextType>(() => ({
    activeIds: ids || [],
    set: handleChange,
    expandIcon,
    singleExpand,
  }), [expandIcon, handleChange, ids, singleExpand]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="collapse"
      className={clsx(
        styles.collapse,
        theme,
        'collapse',
        className,
      )}
      ref={ref}
    >
      <CollapseContext.Provider value={contextValue}>
        {children}
      </CollapseContext.Provider>
    </div>
  );
});

export default Collapse;
