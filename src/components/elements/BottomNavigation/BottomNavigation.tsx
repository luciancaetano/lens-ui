import clsx from 'clsx';
import React from 'react';
import { IBottomNavigationProps } from './BottomNavigation.types';
import styles from './BottomNavigation.module.scss';

const BottomNavigation:React.FC<IBottomNavigationProps> = ({
  className, testingID, id, children, ...props
}) => (
  <div
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-element="bottomNavigation"
    className={clsx(
      styles.bottomNavigation,
      className,
    )}
  >
    {children}
  </div>
);

export default BottomNavigation;
