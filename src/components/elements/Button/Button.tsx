import React from 'react';
import clsx from 'clsx';
import { IButtonProps } from './Button.types';
import { CLASSES } from '../../../css-classes';
import styles from './Button.module.scss';

const Button: React.FC<IButtonProps> = ({
  children,
  intent = 'primary',
  appearance = 'default',
  size = 'normal',
  disabled,
  testingID,
  type = 'button',
  active,
  id,
  tabIndex,
  onBlur, onClick, onDoubleClick, onFocus, className, style,
}) => (
  <button
    type={type}
    onClick={onClick}
    onBlur={onBlur}
    onDoubleClick={onDoubleClick}
    onFocus={onFocus}
    id={id}
    data-testid={testingID}
    tabIndex={tabIndex}
    className={clsx(
      styles.button,
      styles[`button--intent-${intent}`],
      styles[`button--size-${size}`],
      styles[`button--appearance-${appearance}`],
      styles[`button--intent-${intent}--appearance-${appearance}`],
      active && styles[`button--intent-${intent}--active`],
      CLASSES.ComponentName('Button'),
      className,
    )}
    disabled={disabled}
    style={style}
  >
    {children}
  </button>
);

export default Button;
