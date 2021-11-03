import clsx from 'clsx';
import React from 'react';
import { IPropsWithClassName, ITestableProps } from '../../../../types';
import styles from './AppLayout.module.scss';

const AppLayout: React.FC<ITestableProps & IPropsWithClassName> = ({ children, className }) => (
  <div className={clsx(styles.appLayout, className)} data-lens-element="layout">
    {children}
  </div>
);

export default AppLayout;
