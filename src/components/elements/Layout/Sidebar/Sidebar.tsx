import clsx from 'clsx';
import React from 'react';
import { useTheme } from '../../../../hooks';
import styles from './Sidebar.module.scss';
import { ILayoutSidebarProps } from './Sidebar.types';

/**
 * The Content component handles sidebar parts of the app
 */
const Sidebar:React.FC<ILayoutSidebarProps> = ({
  className, testingID, children, ...props
}) => {
  const [theme] = useTheme();

  return (
    <aside
      {...props}
      data-testid={testingID}
      data-lens-element="layout__sidebar"
      className={clsx(styles.sidebar, theme, className)}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
