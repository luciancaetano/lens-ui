/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { Fragment, useMemo } from 'react';
import { IBreadcrumbsProps } from './Breadcrumbs.types';
import { CLASSES } from '../../../css-classes';
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
          className={last ? styles.breadcrumbsLast : null}
        >{item.title}
        </span>{!last && <><span className={styles.breadcrumbsSpacer}>/</span></>}
      </Fragment>
    );
  }), [history]);

  return (
    <div
      id={id}
      data-testid={testingID}
      className={clsx(styles.breadcrumbs, CLASSES.ComponentName('Breadcrumbs'), className)}
    >
      {items}
    </div>
  );
};

export default Breadcrumbs;
