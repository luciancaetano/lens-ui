import clsx from 'clsx';
import React, { useMemo } from 'react';
import List from '../List/List';
import styles from './MenuList.module.scss';
import { IMenuListProps } from './MenuList.types';

/**
 * MenuList display a list of choices on constant surfaces.
 */
const MenuList: React.FC<IMenuListProps> = ({ items, ...props }) => {
  const menuItems = useMemo(() => items.map((item) => ({
    ...item,
    className: clsx(styles.menuItem, {
      [styles.activeMenuItem]: item.isActive,
      [styles.menuHeading]: item.isHeading,
    }, item.className),
  })), [items]);

  return (
    <List items={menuItems} {...props} />
  );
};

export default MenuList;
