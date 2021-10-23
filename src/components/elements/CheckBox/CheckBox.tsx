import clsx from 'clsx';
import React, { useCallback } from 'react';
import { randomId } from '../../../utils';
import styles from './CheckBox.module.scss';
import { ICheckBoxProps } from './CheckBox.types';
import { CLASSES } from '../../../css-classes';

const CheckBox = React.forwardRef<HTMLInputElement, ICheckBoxProps>(({
  className, testingID, id = randomId(), label, onChange, checked, defaultChecked, tabIndex, onBlur, name, disabled,
  autoFocus,
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
      id={id}
      data-testid={testingID}
      data-lens-element="checkbox"
      className={clsx(styles.container, CLASSES.ComponentName('CheckBox'), className)}
    >
      <input
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
