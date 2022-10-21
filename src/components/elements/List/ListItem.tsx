/* eslint-disable no-nested-ternary */
import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import styles from './List.module.scss';
import { IListItemProps } from './List.types';
import ListIntentContext from './ListIntentContext';

/**
 * ListItem is a component that represents a single item in a list.
 */

const ListItem = React.forwardRef<HTMLDivElement, IListItemProps>(({
  intent, active, onClick, children, heading, divider, className, prefix, suffix, cursor, prefixMargin, suffixMargin, ...props
}, ref) => {
  const ctx = useContext(ListIntentContext);

  const currentIntent = useMemo(() => intent || ctx.intent, [ctx.intent, intent]);

  const elementType = !divider && heading ? 'heading' : divider ? 'divider' : 'item';

  return (
    <div
      data-lens-element={`list__item--${elementType}`}
      data-lens-intent={currentIntent}
      {...props}
      className={clsx(
        !divider && heading ? styles.listHeading : styles.listItem,
        !heading && !divider && styles[`list__item--intent-${currentIntent}`],
        !divider && heading && styles[`list__heading--intent-${currentIntent}`],
        divider && styles.list__divider,
        active && styles[`list__item--active-intent-${currentIntent}`],
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
      tabIndex={props.tabIndex || 0}
    >
      {!divider && (
        <>
          {prefix && <div className={styles.listItemPrefix} data-lens-element={`list__item--${elementType}__prefix`}>{prefix}</div>}
          <span data-lens-element={`list__item--${elementType}__content`} className={styles.listItemContent}>{children}</span>
          {suffix && <div className={styles.listItemSuffix} data-lens-element={`list__item--${elementType}__suffix`}>{suffix}</div>}
        </>
      )}
    </div>
  );
});

export default ListItem;
