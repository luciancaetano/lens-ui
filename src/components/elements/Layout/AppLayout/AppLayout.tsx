import clsx from 'clsx';
import React from 'react';
import { IPropsWithClassName, ITestableProps } from '../../../../types';
import styles from './AppLayout.styles';

const AppLayout: React.FC<ITestableProps & IPropsWithClassName> = ({ children, className }) => (
  <styles.AppLayout className={clsx('lens-ui-layout__app-layout', className)}>
    {children}
  </styles.AppLayout>
);

export default AppLayout;
