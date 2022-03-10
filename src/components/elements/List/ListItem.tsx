import React from 'react';
import clsx from 'clsx';
import styles from './ListItem.module.scss';
import { IListItemProps } from './List.types';

/**
 * ListItem is a item from List component
 */
const ListItem: React.FC<IListItemProps> = ({
  data, intent, isActive, onClick, children,
}) => (
  <div
    className={clsx(
      data.isHeading ? styles.listHeading : styles.listItem,
      styles[`list__intent-${intent}`],
      isActive && styles[`list__active-intent-${intent}`],
      data.className,
    )}
    data-lens-element={data.isHeading ? 'list__item--heading' : 'list__item'}
    onClick={onClick}
  >
    {children}
  </div>
);

export default ListItem;
