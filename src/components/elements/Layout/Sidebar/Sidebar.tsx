import clsx from 'clsx';
import React from 'react';
import styles from './Sidebar.module.scss';
import { ILayoutSidebarProps } from './Sidebar.types';
import { CLASSES } from '../../../../css-classes';

const Sidebar:React.FC<ILayoutSidebarProps> = ({
  className, testingID, id, children,
}) => (
  <aside id={id} data-testid={testingID} className={clsx(styles.sidebar, CLASSES.ComponentName('Layout__Sidebar'), className)}>
    {children}
  </aside>
);

export default Sidebar;
