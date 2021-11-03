/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import styles from './List.module.scss';
import { IListProps, IListItem } from './List.types';

const List: React.FC<IListProps> = ({
  className, testingID, id, items, renderer, onItemClick, activeIndex, intent = 'primary',
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
      <div
        className={clsx(
          item.isHeading ? styles.listHeading : styles.listItem,
          styles[`list__intent-${intent}`],
          index === activeIndex && styles[`list__active-intent-${intent}`],
          item.className,
        )}
        data-lens-element={item.isHeading ? 'list__item--heading' : 'list__item'}
        onClick={handleItemClick(item)}
        key={`${index}`}
      >
        {item.content}
      </div>
    );
  }), [handleItemClick, items, activeIndex, renderer, intent]);

  return (
    <div
      id={id}
      data-testid={testingID}
      data-lens-element="list"
      className={clsx(styles.list, className)}
      data-role="list"
    >
      {nodes}
    </div>
  );
};

export default List;
