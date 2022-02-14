import React from 'react';
import clsx from 'clsx';
import { IButtonProps } from './Button.types';
import styles from './Button.module.scss';

/**
 * Buttons allow users to take actions, and make actions, with a single click.
 */
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
  parentId,
  ...props
}) => (
  <button
    {...props}
    data-lens-element-button-parent={typeof parentId === 'string' ? parentId : undefined}
    type={type}
    onClick={onClick}
    onBlur={onBlur}
    onDoubleClick={onDoubleClick}
    onFocus={onFocus}
    id={id}
    data-testid={testingID}
    tabIndex={tabIndex}
    data-lens-element="button"
    data-lens-intent={intent}
    data-lens-appearance={appearance}
    data-lens-button-size={size}
    className={clsx(
      styles.button,
      styles[`button--intent-${intent}`],
      styles[`button--size-${size}`],
      styles[`button--appearance-${appearance}`],
      styles[`button--intent-${intent}--appearance-${appearance}`],
      active && styles[`button--intent-${intent}--active`],
      className,
    )}
    disabled={disabled}
    style={style}
  >
    {children}
  </button>
);

export default Button;
