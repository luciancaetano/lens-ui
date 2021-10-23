import clsx from 'clsx';
import React from 'react';
import { CLASSES } from '../../../../css-classes';
import { IPropsWithClassName, ITestableProps } from '../../../../types';
import styles from './AppLayout.module.scss';

const AppLayout: React.FC<ITestableProps & IPropsWithClassName> = ({ children, className }) => (
  <div className={clsx(styles.appLayout, CLASSES.ComponentName('Layout__AppLayout'), className)}>
    {children}
  </div>
);

export default AppLayout;
