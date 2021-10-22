/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { CLASSES } from '../../../css-classes';
import { Container } from './List.styles';
import { IListProps, IListItem } from './List.types';

const List:React.FC<IListProps> = ({
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
        className={clsx(item.isHeading ? 'lens-ui-list-heading' : 'lens-ui-list-item', item.className, { active: index === activeIndex })}
        onClick={handleItemClick(item)}
        key={`${index}`}
      >
        {item.content}
      </div>
    );
  }), [handleItemClick, items, activeIndex, renderer]);

  return (
    <Container
      intent={intent}
      id={id}
      data-testid={testingID}
      className={clsx(CLASSES.FontReset, 'lens-ui-list', intent && `intent-${intent}`, className)}
      data-role="list"
    >
      {nodes}
    </Container>
  );
};

export default List;
