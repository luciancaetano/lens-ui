/* eslint-disable no-nested-ternary */
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
  className, active, heading, divider, children, ...props
}, ref) => (
  <List.Item
    {...props}
    className={clsx(
      styles.menuItem,
      divider && styles['menu-item--divider'],
      active && styles.activeMenuItem,
      heading && styles.menuHeading,
      className,
    )}
    active={active}
    heading={heading}
    divider={divider}
    ref={ref}
    data-lens-element={!divider && heading ? 'menu__heading' : divider ? 'menu__divider' : 'menu__item'}
  >
    {children}
  </List.Item>
));

export default MenuItem;
