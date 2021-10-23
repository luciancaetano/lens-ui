import clsx from 'clsx';
import React from 'react';
import styles from './Divider.module.scss';
import { IDividerProps } from './Divider.types';
import { CLASSES } from '../../../css-classes';

const Divider:React.FC<IDividerProps> = ({
  className, testingID, id, children,
}) => (
  <div id={id} data-testid={testingID} className={clsx(styles.divider, CLASSES.ComponentName('Divider'), className)}>
    {children}
  </div>
);

export default Divider;
