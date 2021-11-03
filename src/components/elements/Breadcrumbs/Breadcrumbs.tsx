/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { Fragment, useMemo } from 'react';
import { IBreadcrumbsProps } from './Breadcrumbs.types';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs:React.FC<IBreadcrumbsProps> = ({
  className, testingID, id, history,
}) => {
  const items = useMemo(() => history.map((item, index) => {
    const last = index === history.length - 1;

    if (item.url && !last) {
      return (
        <Fragment key={`${index}-${item.title}`}>
          <a
            data-testid={item.testingID}
            href={item.url}
            onClick={item.onClick}
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
          onClick={item.onClick}
          className={clsx(styles.breadcrumbsItem, last && styles.breadcrumbsLast)}
          data-lens-element="breadcrumbs__link--current"
        >{item.title}
        </span>{!last && <><span className={styles.breadcrumbsSpacer}>/</span></>}
      </Fragment>
    );
  }), [history]);

  return (
    <div
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
