import clsx from 'clsx';
import React, {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import { randomId } from '../../../utils';
import styles from './RadioGroup.module.scss';
import { IRadioGroupProps } from './RadioGroup.types';
import { useDevice } from '../../../hooks';

/**
 * RadioGroup allow the user to select one option from a set.
 */
const RadioGroup: React.FC<IRadioGroupProps> = ({
  className, testingID, id, onChange, options, defaultValue, value, name, tabIndex, onBlur, disabled, inline, ...props
}) => {
  const { isPhone, isTablet } = useDevice();
  const [currentValue, setValue] = useState(value || defaultValue || undefined);

  useEffect(() => {
    if (defaultValue === undefined) {
      setValue(value ? String(value) : undefined);
    }
  }, [value, defaultValue]);

  const handleChange = useCallback((value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(String(value));

    if (onChange) {
      onChange(value, e);
    }
  }, [onChange]);

  const inputIds = useMemo(() => {
    const ids = [];

    for (let i = 0; i < options.length; i += 1) {
      ids.push(`${id || 'i'}-${i}-${randomId()}`);
    }

    return ids as string[];
  }, [id, options.length]);

  const items = useMemo(() => options.map((option, index) => (
    <div
      key={`${option.value}-${currentValue === option.value ? 'selected' : ''}`}
      className={clsx(styles.radioGroupContainer, inline ? styles.radioGroupContainer : styles.radioGroupContainerNormal, (isPhone || isTablet) && styles.radioGroupContainerMobile)}
      data-testid={option.testingID}
    >
      <input
        tabIndex={option.tabIndex}
        type="radio"
        id={`${inputIds[index]}-input`}
        name={name}
        data-lens-element="radio-group__input"
        value={String(option.value)}
        className={clsx(styles.radioGroupInput, String(currentValue) === String(option.value) && styles.radioGroupInputChecked, (isPhone || isTablet) && styles.radioGroupInputMobile, option.className)}
        checked={String(currentValue) === String(option.value)}
        disabled={disabled}
        onChange={handleChange(option.value)}
      />
      <label
        htmlFor={`${inputIds[index]}-input`}
        className={clsx(styles.radioGroupLabel, (isPhone || isTablet) && styles.radioGroupLabelMobile)}
        data-lens-element="radio-group__label"
      >
        {option.label}
      </label>
    </div>
  )), [options, handleChange, inline, isPhone, isTablet, inputIds, name, currentValue, disabled]);

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
