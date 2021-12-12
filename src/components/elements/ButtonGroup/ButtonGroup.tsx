import clsx from 'clsx';
import React from 'react';
import { IButtonGroupProps } from './ButtonGroup.types';
import styles from './ButtonGroup.module.scss';

/**
 * The ButtonGroup component can be used to group related buttons.
 */
const ButtonGroup:React.FC<IButtonGroupProps> = function ({
  children, vertical, className, testingID, id, ...props
}) {
  return (
    <div
      {...props}
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
};

export default ButtonGroup;
