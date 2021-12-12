import clsx from 'clsx';
import React from 'react';
import styles from './Sidebar.module.scss';
import { ILayoutSidebarProps } from './Sidebar.types';

/**
 * The Content component handles sidebar parts of the app
 */
const Sidebar:React.FC<ILayoutSidebarProps> = function ({
  className, testingID, id, children, ...props
}) {
  return (
    <aside
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="layout__sidebar"
      className={clsx(styles.sidebar, className)}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
