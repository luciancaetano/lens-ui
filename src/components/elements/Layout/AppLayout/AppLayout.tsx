import clsx from 'clsx';
import React from 'react';
import { ITestableProps } from '../../../../types';
import styles from './AppLayout.module.scss';

/**
 * The AppLayout component handles entrie application layout parts
 */
const AppLayout: React.FC<ITestableProps & React.HtmlHTMLAttributes<HTMLElement>> = function ({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(styles.appLayout, className)}
      data-lens-element="layout"
    >
      {children}
    </div>
  );
};

export default AppLayout;
