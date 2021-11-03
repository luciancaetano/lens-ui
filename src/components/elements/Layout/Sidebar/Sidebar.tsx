import clsx from 'clsx';
import React from 'react';
import styles from './Sidebar.module.scss';
import { ILayoutSidebarProps } from './Sidebar.types';

const Sidebar:React.FC<ILayoutSidebarProps> = ({
  className, testingID, id, children,
}) => (
  <aside
    id={id}
    data-testid={testingID}
    data-lens-element="layout__sidebar"
    className={clsx(styles.sidebar, className)}
  >
    {children}
  </aside>
);

export default Sidebar;
