import clsx from 'clsx';
import React from 'react';
import styles from './Divider.module.scss';
import { IDividerProps } from './Divider.types';

/**
 * A divider is a thin line that groups content in layouts.
 */
const Divider:React.FC<IDividerProps> = ({
  className, testingID, id, children, ...props
}) => (
  <div
    {...props}
    id={id}
    data-lens-element="card"
    data-testid={testingID}
    className={clsx(styles.divider, className)}
  >
    {children}
  </div>
);

export default Divider;
