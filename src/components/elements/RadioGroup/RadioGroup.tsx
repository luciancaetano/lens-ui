import clsx from 'clsx';
import toString from 'lodash/toString';
import toNumber from 'lodash/toNumber';
import get from 'lodash/get';
import find from 'lodash/find';
import React, {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import { randomId } from '../../../utils';
import styles from './RadioGroup.module.scss';
import { IRadioGroupProps, RadioGroupOptionValueType } from './RadioGroup.types';
import { useDevice } from '../../../hooks';

/**
 * RadioGroup allow the user to select one option from a set.
 */
const RadioGroup: React.FC<IRadioGroupProps> = ({
  className, testingID, id, onChange, options, defaultValue, name, tabIndex, onBlur, disabled, inline, ...props
}) => {
  const { isPhone, isTablet } = useDevice();
  const [value, setValue] = useState(props.value || defaultValue || null);

  useEffect(() => {
    if (defaultValue === undefined) {
      setValue(props.value || null);
    }
  }, [props.value, defaultValue]);

  const handleChange = useCallback((value: RadioGroupOptionValueType) => (e: React.MouseEvent<HTMLInputElement>) => {
    const targetType = typeof get(find(options, (opt) => toString(opt.value) === toString(value)), 'value');

    let newValue = value;

    switch (targetType) {
      case 'boolean': newValue = toString(value) === 'true'; break;
      case 'number': newValue = toNumber(value); break;
      default: newValue = value; break;
    }

    setValue(toString(newValue));

    if (onChange) {
      onChange(e, newValue);
    }
  }, [onChange, options]);

  const items = useMemo(() => options.map((option) => {
    const inputId = randomId();

    return (
      <div key={String(option.value)} className={clsx(styles.radioGroupContainer, inline ? styles.radioGroupContainer : styles.radioGroupContainerNormal, (isPhone || isTablet) && styles.radioGroupContainerMobile)}>
        <input
          tabIndex={option.tabIndex}
          type="radio"
          id={`${inputId}-input`}
          name={name}
          data-lens-element="radio-group__input"
          value={toString(option.value)}
          className={clsx(styles.radioGroupInput, (isPhone || isTablet) && styles.radioGroupInputMobile, option.className)}
          checked={value !== undefined ? toString(value) === toString(option.value) : undefined}
          disabled={disabled}
          onClick={handleChange(option.value)}
        />
        <label
          htmlFor={`${inputId}-input`}
          className={clsx(styles.radioGroupLabel, (isPhone || isTablet) && styles.radioGroupLabelMobile)}
          data-lens-element="radio-group__label"
        >{option.label}
        </label>
      </div>
    );
  }), [options, inline, isPhone, isTablet, name, value, disabled, handleChange]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="radio-group"
      className={clsx(styles.radioGroup, inline && styles.radioGroupInline, className)}
      tabIndex={tabIndex}
      onBlur={onBlur}
    >
      {items}
    </div>
  );
};

export default RadioGroup;
