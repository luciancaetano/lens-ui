import clsx from 'clsx';
import React from 'react';
import { useTheme } from '../../../hooks';
import styles from './Divider.module.scss';
import { IDividerProps } from './Divider.types';

/**
 * A divider is a thin line that groups content in layouts.
 */
const Divider:React.FC<IDividerProps> = ({
  className, testingID, id, children, ...props
}) => {
  const [theme] = useTheme();

  return (
    <div
      {...props}
      id={id}
      data-lens-element="card"
      data-testid={testingID}
      className={clsx(styles.divider, theme, className)}
    >
      {children}
    </div>
  );
};

export default Divider;
