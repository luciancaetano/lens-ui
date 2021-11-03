import clsx from 'clsx';
import React from 'react';
import { IButtonGroupProps } from './ButtonGroup.types';
import styles from './ButtonGroup.module.scss';

const ButtonGroup:React.FC<IButtonGroupProps> = ({
  children, vertical, className, testingID, id,
}) => (
  <div
    id={id}
    data-testid={testingID}
    data-lens-element="button-grpup"
    className={clsx(
      styles.buttonGroup,
      vertical ? styles.buttonGroupVertical : styles.buttonGroupHorizontal,
      className,
    )}
  >
    {children}
  </div>
);

export default ButtonGroup;
