import clsx from 'clsx';
import React, { useCallback } from 'react';
import { randomId } from '../../../utils';
import styles from './Switch.module.scss';
import { ISwitchProps } from './Switch.types';

/**
 * The Switch component toggle the state of a single setting on or off.
 */
const Switch = React.forwardRef<HTMLInputElement, ISwitchProps>(({
  className, testingID, id = randomId(), label, onChange, checked, defaultChecked, tabIndex, onBlur, name, disabled,
  autoFocus, ...props
}, ref) => {
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
      id={id}
      data-testid={testingID}
      data-lens-element="switch"
      className={clsx(styles.switch, className)}
    >
      <input
        type="checkbox"
        id={`${id}-input`}
        tabIndex={tabIndex}
        className={clsx(styles.switchInput, checked && styles.switchInputChecked)}
        onChange={handleChange}
        checked={checked}
        defaultChecked={defaultChecked}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        ref={ref}
        name={name}
      />
      <label htmlFor={`${id}-input`} className={styles.switchLabel}>{label}</label>
    </div>
  );
});

export default Switch;
