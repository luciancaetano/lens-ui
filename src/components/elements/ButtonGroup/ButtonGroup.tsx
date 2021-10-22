import clsx from 'clsx';
import React from 'react';
import { CLASSES } from '../../../css-classes';
import { IButtonGroupProps } from './ButtonGroup.types';
import styles from './ButtonGroup.module.scss';

const ButtonGroup:React.FC<IButtonGroupProps> = ({
  children, vertical, className, testingID, id,
}) => (
  <div
    id={id}
    data-testid={testingID}
    className={clsx(
      styles.buttonGroup,
      vertical ? styles.buttonGroupVertical : styles.buttonGroupHorizontal,
      CLASSES.ComponentName('ButtonGroup'),
      className,
    )}
  >
    {children}
  </div>
);

export default ButtonGroup;
