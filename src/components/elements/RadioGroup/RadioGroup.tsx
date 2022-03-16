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
  className, testingID, id, onChange, options, defaultValue, value, name, tabIndex, onBlur, disabled, inline, ...props
}) => {
  const { isPhone, isTablet } = useDevice();
  const [currentValue, setValue] = useState(value || defaultValue || null);

  useEffect(() => {
    if (defaultValue === undefined) {
      setValue(value || null);
    }
  }, [value, defaultValue]);

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

  const inputIds = useMemo(() => options.reduce((prev, next) => {
    const { value } = next;

    prev[toString(value)] = randomId();

    return prev;
  }, {}), [options]);

  const items = useMemo(() => options.map((option) => (
    <div
      onClick={handleChange(option.value)}
      key={toString(option.value)}
      className={clsx(styles.radioGroupContainer, inline ? styles.radioGroupContainer : styles.radioGroupContainerNormal, (isPhone || isTablet) && styles.radioGroupContainerMobile)}
    >
      <input
        tabIndex={option.tabIndex}
        type="radio"
        id={`${inputIds[option[toString(value)]]}-input`}
        name={name}
        data-lens-element="radio-group__input"
        value={toString(option.value)}
        className={clsx(styles.radioGroupInput, (isPhone || isTablet) && styles.radioGroupInputMobile, option.className)}
        checked={currentValue !== undefined ? toString(currentValue) === toString(option.value) : undefined}
        disabled={disabled}
      />
      <label
        htmlFor={`${inputIds[option[toString(value)]]}-input`}
        className={clsx(styles.radioGroupLabel, (isPhone || isTablet) && styles.radioGroupLabelMobile)}
        data-lens-element="radio-group__label"
      >{option.label}
      </label>
    </div>
  )), [options, handleChange, inline, isPhone, isTablet, inputIds, value, name, currentValue, disabled]);

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
