import clsx from 'clsx';
import React, { useCallback } from 'react';
import { useTheme } from '../../../hooks';
import { randomID } from '../../../utils';
import styles from './Switch.module.scss';
import { ISwitchProps } from './Switch.types';

/**
 * The Switch component toggle the state of a single setting on or off.
 */
const Switch = React.forwardRef<HTMLInputElement, ISwitchProps>(({
  className, testingID, id = randomID(), label, onChange, checked, size, defaultChecked, tabIndex, onBlur, name, disabled,
  autoFocus, ...props
}, ref) => {
  const [theme, { defaultSize }] = useTheme();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(!!e.target.checked);
    }
  }, [onChange]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="switch"
      className={clsx(styles.switch, theme, className)}
    >
      <input
        type="checkbox"
        id={id}
        tabIndex={tabIndex}
        className={clsx(styles.switchInput, checked && styles.switchInputChecked, styles[`switch__input--size-${size || defaultSize}`])}
        onChange={handleChange}
        checked={checked}
        defaultChecked={defaultChecked}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        ref={ref}
        name={name}
      />
      <label htmlFor={id} className={clsx(styles.switchLabel, styles[`switch__label--size-${size || defaultSize}`], disabled && styles.switchLabelDisabled)}>{label}</label>
    </div>
  );
});

export default Switch;
