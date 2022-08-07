/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useMemo } from 'react';
import List from '../List/List';
import ListItem from '../List/ListItem';
import styles from './Menu.module.scss';
import { IMenuProps } from './Menu.types';

/**
 * Menu display a list of choices on constant surfaces.
 */
const Menu: React.FC<IMenuProps> = ({ items, activeIndex, className }) => {
  const menuItems = useMemo(() => items.map((item, index) => {
    const className = clsx(styles.menuItem, {
      [styles.activeMenuItem]: index === activeIndex,
      [styles.menuHeading]: item.isHeading,
    }, item.className);

    return (
      <ListItem
        key={index}
        className={className}
        intent={item.intent}
        isActive={index === activeIndex}
        isHeading={item.isHeading}
      >
        {item.content}
      </ListItem>
    );
  }), [activeIndex, items]);

  return (
    <List className={clsx(styles.menuList, className)}>
      {menuItems}
    </List>
  );
};

export default Menu;
