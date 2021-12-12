/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { Fragment, useCallback, useMemo } from 'react';
import { IBreadcrumbsProps, IBreadcrumbLink } from './Breadcrumbs.types';
import styles from './Breadcrumbs.module.scss';

/**
 * Breadcrumbs allow users to make selections from a range of pages or navigation history.
 */
const Breadcrumbs:React.FC<IBreadcrumbsProps> = function ({
  className, testingID, id, history, onItemClick, ...props
}) {
  const handleItemClick = useCallback((item: IBreadcrumbLink) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onItemClick) {
      onItemClick(item, event);
    }
  }, [onItemClick]);

  const items = useMemo(() => history.map((item, index) => {
    const last = index === history.length - 1;

    if (item.url && !last) {
      return (
        <Fragment key={`${index}-${item.title}`}>
          <a
            data-testid={item.testingID}
            href={item.url}
            onClick={handleItemClick(item)}
            className={styles.breadcrumbsItem}
            data-lens-element="breadcrumbs__link"
          >{item.title}
          </a><span className={styles.breadcrumbsSpacer}>/</span>
        </Fragment>
      );
    }

    return (
      <Fragment key={`${index}-${item.title}-span`}>
        <span
          data-testid={item.testingID}
          onClick={handleItemClick(item)}
          className={clsx(styles.breadcrumbsItem, last && styles.breadcrumbsLast)}
          data-lens-element="breadcrumbs__link--current"
        >{item.title}
        </span>{!last && <span className={styles.breadcrumbsSpacer}>/</span>}
      </Fragment>
    );
  }), [history, handleItemClick]);

  return (
    <div
      {...props}
      id={id}
      data-lens-element="breadcrumbs"
      data-testid={testingID}
      className={clsx(styles.breadcrumbs, className)}
    >
      {items}
    </div>
  );
};

export default Breadcrumbs;
