/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useMemo } from 'react';
import List from '../List/List';
import ListItem from '../List/ListItem';
import styles from './MenuList.module.scss';
import { IMenuListProps } from './MenuList.types';

/**
 * MenuList display a list of choices on constant surfaces.
 */
const MenuList: React.FC<IMenuListProps> = ({ items, activeIndex }) => {
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
    <List>
      {menuItems}
    </List>
  );
};

export default MenuList;
