/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import { useTheme } from '../../../hooks';
import List from '../List';
import styles from './Menu.module.scss';
import { IMenuProps } from './Menu.types';

/**
 * Menu display a list of choices on constant surfaces.
 */
const Menu = React.forwardRef<HTMLDivElement, IMenuProps>(({
  shadow = true, className, children, ...props
}, ref) => {
  const [theme] = useTheme();

  return (
    <List {...props} data-lens-element="menu" className={clsx(styles.menuList, shadow && styles.menuListShadow, theme, className)} ref={ref}>
      {children}
    </List>
  );
});

export default Menu;
