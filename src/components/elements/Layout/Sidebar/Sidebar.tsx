import clsx from 'clsx';
import React from 'react';
import styles from './Sidebar.styles';
import { ILayoutSidebarProps } from './Sidebar.types';
import { CLASSES } from '../../../../css-classes';

const Sidebar:React.FC<ILayoutSidebarProps> = ({
  className, testingID, id, children,
}) => (
  <styles.Sidebar id={id} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-layout-sidebar', className)}>
    {children}
  </styles.Sidebar>
);

export default Sidebar;
