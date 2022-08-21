import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import styles from './List.module.scss';
import { IListItemProps } from './List.types';
import ListIntentContext from './ListIntentContext';

/**
 * ListItem is a component that represents a single item in a list.
 */

const ListItem = React.forwardRef<HTMLDivElement, IListItemProps>(({
  intent, isActive, onClick, children, isHeading, className, prefix, suffix, cursor, prefixMargin, suffixMargin, ...props
}, ref) => {
  const ctx = useContext(ListIntentContext);

  const currentIntent = useMemo(() => intent || ctx.intent, [ctx.intent, intent]);

  return (
    <div
      data-lens-element={isHeading ? 'list__item--heading' : 'list__item'}
      data-lens-intent={currentIntent}
      {...props}
      className={clsx(
        isHeading ? styles.listHeading : styles.listItem,
        !isHeading && styles[`list__item--intent-${currentIntent}`],
        isHeading && styles[`list__heading--intent-${currentIntent}`],
        isActive && styles[`list__item--active-intent-${currentIntent}`],
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
  );
});

export default ListItem;
