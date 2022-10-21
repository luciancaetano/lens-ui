/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useMemo } from 'react';
import useTheme from '../../../hooks/use-theme';
import styles from './List.module.scss';
import { IListProps } from './List.types';
import ListIntentContext from './ListIntentContext';

/**
 * List is a component that represents a list of items.
 */
const List = React.forwardRef<HTMLDivElement, IListProps>(({
  className, testingID, id, intent = 'primary', border = true, children, prefixMinWidth, suffixMinWidth, ...props
}, ref) => {
  const [theme] = useTheme();

  const providerValue = useMemo(() => ({ intent }), [intent]);

  return (
    <div
      data-lens-element="list"
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-intent={intent}
      className={clsx(styles.list, border && styles.listBordered, theme, className)}
      data-role="list"
      ref={ref}
      style={{
        ...(prefixMinWidth ? { '--lens-ui-list-prefix-min-width': prefixMinWidth } : {}),
        ...(suffixMinWidth ? { '--lens-ui-list-suffix-min-width': suffixMinWidth } : {}),
        ...props.style || {},
      }}
    >
      <ListIntentContext.Provider value={providerValue}>
        {children}
      </ListIntentContext.Provider>
    </div>
  );
});

export default List;
