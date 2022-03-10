/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import styles from './List.module.scss';
import { IListProps, IListItem } from './List.types';
import ListItem from './ListItem';

const List: React.FC<IListProps> = ({
  className, testingID, id, items, renderer, onItemClick, activeIndex, intent = 'primary', ...props
}) => {
  const handleItemClick = useCallback((item: IListItem) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (onItemClick) {
      onItemClick(item, e);
    }
  }, [onItemClick]);

  const nodes = useMemo(() => items.map((item, index) => {
    if (renderer) {
      return renderer(item, index);
    }
    return (
      <ListItem
        data={item}
        isActive={index === activeIndex}
        intent={intent}
        onClick={handleItemClick(item)}
      >
        {item.content}
      </ListItem>
    );
  }), [handleItemClick, items, activeIndex, renderer, intent]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="list"
      data-lens-intent={intent}
      className={clsx(styles.list, className)}
      data-role="list"
    >
      {nodes}
    </div>
  );
};

export default List;
