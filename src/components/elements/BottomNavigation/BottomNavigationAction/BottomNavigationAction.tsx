import clsx from 'clsx';
import React, { useCallback, useContext, useMemo } from 'react';
import { IBottomNavigationActionProps } from './BottomNavigationAction.types';
import styles from './BottomNavigationAction.module.scss';
import { BottomNavigationContext } from '../BottomNavigationContext';

const BottomNavigationAction = React.forwardRef<HTMLButtonElement, IBottomNavigationActionProps>(({
  className, testingID, id, children, onClick, icon, ...props
}) => {
  const { activeId, onSelect, keepLabel } = useContext(BottomNavigationContext);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    onSelect(id);
  }, [id, onClick, onSelect]);

  const active = useMemo(() => activeId === id, [activeId, id]);

  return (
    <button
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="bottomNavigation__action"
      className={clsx(
        styles.action,
        active && styles.actionActive,
        className,
      )}
      onClick={handleClick}
    >
      {icon && <div className={clsx(styles.actionIcon, keepLabel && styles.actionIconKeepLabel, active && styles.actionIconActive)} data-lens-element="bottomNavigation__action__icon">{icon}</div>}
      <span className={clsx(styles.actionLabel, keepLabel && styles.actionLabelKeepLabel, active && styles.actionLabelActive)} data-lens-element="bottomNavigation__action__label">{children}</span>
    </button>
  );
});

export default BottomNavigationAction;
