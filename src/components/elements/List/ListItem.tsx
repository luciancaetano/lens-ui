import React from 'react';
import clsx from 'clsx';
import styles from './List.module.scss';
import { IListItemProps } from './List.types';

/**
 * ListItem is a item from List component
 */

const ListItem = React.forwardRef<HTMLDivElement, IListItemProps>(({
  intent = 'primary', isActive, onClick, children, isHeading, className,
}, ref) => (
  <div
    className={clsx(
      isHeading ? styles.listHeading : styles.listItem,
      styles[`list__intent-${intent}`],
      isActive && styles[`list__active-intent-${intent}`],
      className,
    )}
    data-lens-element={isHeading ? 'list__item--heading' : 'list__item'}
    onClick={onClick}
    ref={ref}
  >
    {children}
  </div>
));

export default ListItem;
