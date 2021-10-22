import clsx from 'clsx';
import React from 'react';
import styles from './Divider.styles';
import { IDividerProps } from './Divider.types';
import { CLASSES } from '../../../css-classes';

const Divider:React.FC<IDividerProps> = ({
  className, testingID, id, children,
}) => (
  <styles.Divider id={id} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-divider', className)}>
    {children}
  </styles.Divider>
);

export default Divider;
