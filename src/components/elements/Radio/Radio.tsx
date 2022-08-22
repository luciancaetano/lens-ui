import clsx from 'clsx';
import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useTheme } from '../../../hooks';
import { randomId } from '../../../utils';
import styles from './Radio.module.scss';
import { IRadioProps } from './Radio.types';
import RadioGroupContext from './RadioGroupContext';

/**
 * RadioGroup allow the user to select one option from a set.
 */
const Radio = React.forwardRef<HTMLDivElement, IRadioProps>(({
  className, testingID, id = randomId(), name, tabIndex, disabled, inputClassName, label, onChange, value, checked, defaultChecked, ...props
}, ref) => {
  const { isContextPresent, ...ctx } = useContext(RadioGroupContext);
  const [isChecked, setIsChecked] = useState(checked || defaultChecked);
  const [theme] = useTheme();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked, e);
    }

    if (!isContextPresent) {
      setIsChecked(e.target.checked);
    } else if (e.target.checked) {
      ctx.onChange(value, e);
    }
  }, [ctx, isContextPresent, onChange, value]);

  useEffect(() => {
    if (!isContextPresent && checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked, isContextPresent, value]);

  return (
    <div
      {...props}
      className={clsx(styles.radioContainer, ctx.inline && styles.radioContainerInline, theme, className)}
      data-testid={testingID}
      data-lens-element="radio"
      id={id}
      ref={ref}
    >
      <input
        tabIndex={tabIndex}
        type="radio"
        name={isContextPresent ? ctx.name : name}
        data-lens-element="radio-group__input"
        className={clsx(styles.radioInput, inputClassName)}
        disabled={disabled || ctx.disabled}
        onChange={handleChange}
        checked={isContextPresent ? ctx.value === value : isChecked}
        defaultChecked={defaultChecked}
        value={value}
        id={`${id}_input`}
      />
      <label
        htmlFor={`${id}_input`}
        className={styles.radioLabel}
        data-lens-element="radio-group__label"
      >
        {label}
      </label>
    </div>
  );
});

export default Radio;
