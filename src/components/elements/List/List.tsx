/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import styles from './List.module.scss';
import { IListProps } from './List.types';

/**
 * List is a component that represents a list of items.
 */
const List = React.forwardRef<HTMLDivElement, IListProps>(({
  className, testingID, id, intent = 'primary', children, ...props
}, ref) => (
  <div
    data-lens-element="list"
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-intent={intent}
    className={clsx(styles.list, className)}
    data-role="list"
    ref={ref}
  >
    {children}
  </div>
));

export default List;
