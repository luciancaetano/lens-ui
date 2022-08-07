/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import List from '../List';
import styles from './Menu.module.scss';
import { IMenuItemProps } from './Menu.types';

/**
 * Menu display a list of choices on constant surfaces.
 */
const MenuItem = React.forwardRef<HTMLDivElement, IMenuItemProps>(({
  className, isActive, isHeading, children, ...props
}, ref) => (
  <List.Item
    {...props}
    className={clsx(styles.menuItem, {
      [styles.activeMenuItem]: isActive,
      [styles.menuHeading]: isHeading,
    }, className)}
    isActive={isActive}
    isHeading={isHeading}
    ref={ref}
  >
    {children}
  </List.Item>
));

export default MenuItem;
