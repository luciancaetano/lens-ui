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
      if (checked !== undefined) {
        onChange(!checked, e);
      } else {
        onChange(e.target.checked, e);
      }
    }
  }, [onChange, checked]);

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
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        ref={ref}
        {...(checked !== undefined ? ({ checked }) : { defaultChecked })}
      />
      <label htmlFor={`${id}-input`} className={styles.label}>{label}</label>
    </div>
  );
});

export default CheckBox;
