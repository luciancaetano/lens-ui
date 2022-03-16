import React, { useMemo } from 'react';
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
  onBlur, onClick, onDoubleClick, onFocus, className,
  parentId,
  ...props
}) => {
  const style = useMemo(() => {
    if (typeof intent === 'object') {
      return {
        '--lens-ui-elements-button-custom-normal-text-color': intent.normal.color,
        '--lens-ui-elements-button-custom-normal-opacity': intent.normal.opacity,
        '--lens-ui-elements-button-custom-normal-background-color': intent.normal.backgroundColor,
        '--lens-ui-elements-button-custom-normal-border': intent.normal.border,
        '--lens-ui-elements-button-custom-normal-box-shadow': intent.normal.boxShadow,
        '--lens-ui-elements-button-custom-active-text-color': intent.active.color,
        '--lens-ui-elements-button-custom-active-opacity': intent.active.opacity,
        '--lens-ui-elements-button-custom-active-background-color': intent.active.backgroundColor,
        '--lens-ui-elements-button-custom-active-border': intent.active.border,
        '--lens-ui-elements-button-custom-active-box-shadow': intent.active.boxShadow,
        '--lens-ui-elements-button-custom-focus-text-color': intent.focused.color,
        '--lens-ui-elements-button-custom-focus-opacity': intent.focused.opacity,
        '--lens-ui-elements-button-custom-focus-background-color': intent.focused.backgroundColor,
        '--lens-ui-elements-button-custom-focus-border': intent.focused.border,
        '--lens-ui-elements-button-custom-focus-box-shadow': intent.focused.boxShadow,
        '--lens-ui-elements-button-custom-hover-text-color': intent.hover.color,
        '--lens-ui-elements-button-custom-hover-opacity': intent.hover.opacity,
        '--lens-ui-elements-button-custom-hover-background-color': intent.hover.backgroundColor,
        '--lens-ui-elements-button-custom-hover-border': intent.hover.border,
        '--lens-ui-elements-button-custom-hover-box-shadow': intent.hover.boxShadow,
        '--lens-ui-elements-button-custom-disabled-text-color': intent.disabled.color,
        '--lens-ui-elements-button-custom-disabled-opacity': intent.disabled.opacity,
        '--lens-ui-elements-button-custom-disabled-background-color': intent.disabled.backgroundColor,
        '--lens-ui-elements-button-custom-disabled-border-color': intent.disabled.border,
        '--lens-ui-elements-button-custom-disabled-box-shadow': intent.disabled.boxShadow,
      };
    }
    return undefined;
  }, [intent]);

  const intentClasses = useMemo(() => {
    const isCustom = typeof intent === 'object';
    return [
      styles[`button--intent-${isCustom ? 'custom' : intent}`],
      styles[`button--size-${size}`],
      styles[`button--appearance-${appearance}`],
      !isCustom && styles[`button--intent-${intent}--appearance-${appearance}`],
      active && styles[`button--intent-${isCustom ? 'custom' : intent}--active`],
    ];
  }, [active, appearance, intent, size]);

  return (
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
      className={clsx(styles.button, ...intentClasses, className)}
      disabled={disabled}
      style={{ ...style, ...(props.style || {}) }}
    >
      {children}
    </button>
  );
};

export default Button;
