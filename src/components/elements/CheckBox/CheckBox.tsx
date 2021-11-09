import clsx from 'clsx';
import React, { useCallback } from 'react';
import { randomId } from '../../../utils';
import styles from './CheckBox.module.scss';
import { ICheckBoxProps } from './CheckBox.types';

/**
 * Checkboxes allow the user to select one or more items from a set.
 * @tip Checkboxes can be used to turn an option on or off.
 */
const CheckBox = React.forwardRef<HTMLInputElement, ICheckBoxProps>(({
  className, testingID, id = randomId(), label, onChange, checked, defaultChecked, tabIndex, onBlur, name, disabled,
  autoFocus, inputProps, ...props
}, ref) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(!!e.target.checked, e);
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
      data-lens-element="checkbox"
      className={clsx(styles.container, className)}
    >
      <input
        {...inputProps}
        type="checkbox"
        id={`${id}-input`}
        tabIndex={tabIndex}
        className={styles.input}
        onChange={handleChange}
        checked={checked}
        defaultChecked={defaultChecked}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        ref={ref}
      />
      <label htmlFor={`${id}-input`} className={styles.label}>{label}</label>
    </div>
  );
});

export default CheckBox;
