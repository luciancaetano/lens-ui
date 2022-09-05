import clsx from 'clsx';
import React, { useCallback } from 'react';
import { useTheme } from '../../../hooks';
import { randomId } from '../../../utils';
import styles from './CheckBox.module.scss';
import { ICheckBoxProps } from './CheckBox.types';

/**
 * The checkbox is a simple checkbox that can be used to toggle the checked state of a component.
 * @tip Checkboxes can be used to turn an option on or off.
 */
const CheckBox = React.forwardRef<HTMLInputElement, ICheckBoxProps>(({
  className, testingID, id = randomId(), label, onChange, size, checked, defaultChecked, tabIndex, onBlur, name, disabled,
  autoFocus, inputProps, ...props
}, ref) => {
  const [theme, { defaultSize }] = useTheme();

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
      data-testid={testingID}
      data-lens-element="checkbox"
      className={clsx(styles.container, theme, className)}
    >
      <input
        {...inputProps}
        type="checkbox"
        id={id}
        tabIndex={tabIndex}
        className={clsx(styles.input, styles[`input--size-${size || defaultSize}`])}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        ref={ref}
        {...(checked !== undefined ? ({ checked }) : { defaultChecked })}
      />
      <label
        htmlFor={id}
        className={clsx(styles.label, styles[`label--size-${size || defaultSize}`], disabled && styles['label--disabled'])}
      >
        {label}
      </label>
    </div>
  );
});

export default CheckBox;
