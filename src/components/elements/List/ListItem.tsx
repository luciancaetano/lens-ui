import React from 'react';
import clsx from 'clsx';
import styles from './List.module.scss';
import { IListItemProps } from './List.types';

/**
 * ListItem is a component that represents a single item in a list.
 */

const ListItem = React.forwardRef<HTMLDivElement, IListItemProps>(({
  intent = 'primary', isActive, onClick, children, isHeading, className, prefix, suffix, cursor, prefixMargin, suffixMargin, ...props
}, ref) => (
  <div
    data-lens-element={isHeading ? 'list__item--heading' : 'list__item'}
    {...props}
    className={clsx(
      isHeading ? styles.listHeading : styles.listItem,
      styles[`list__item--intent-${intent}`],
      isActive && styles[`list__item--active-intent-${intent}`],
      className,
    )}
    onClick={onClick}
    ref={ref}
    style={{
      ...(cursor ? { '--lens-ui-list--item--cursor': cursor } : {}),
      ...(prefixMargin ? { '--lens-ui-list-prefix-padding': prefixMargin } : {}),
      ...(suffixMargin ? { '--lens-ui-list-suffix-padding': suffixMargin } : {}),
      ...props.style || {},
    }}
  >
    {prefix && <div className={styles.listItemPrefix} data-lens-element={isHeading ? 'list__item--heading__prefix' : 'list__item__prefix'}>{prefix}</div>}
    <span data-lens-element={isHeading ? 'list__item--heading__content' : 'list__item__content'} className={styles.listItemContent}>{children}</span>
    {suffix && <div className={styles.listItemSuffix} data-lens-element={isHeading ? 'list__item--heading__suffix' : 'list__item__suffix'}>{suffix}</div>}
  </div>
));

export default ListItem;
