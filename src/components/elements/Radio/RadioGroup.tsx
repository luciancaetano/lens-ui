import clsx from 'clsx';
import React, {
  useCallback, useMemo,
} from 'react';
import { useControllableState } from '../../../hooks';
import styles from './Radio.module.scss';
import { IRadioGroupProps } from './Radio.types';
import RadioGroupContext, { IRadioGroupContextData } from './RadioGroupContext';

/**
 * RadioGroup allow the user to select one option from a set.
 */
const RadioGroup: React.FC<IRadioGroupProps> = ({
  className, testingID, defaultValue, disabled, id, onChange, value, inline, children, name, ...props
}) => {
  const [selected, setSelected] = useControllableState<string | number>(value, defaultValue);

  const handleChange = useCallback((v: string | number | undefined, e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && v !== undefined) {
      onChange(v, e);
    }

    setSelected(v);
  }, [onChange, setSelected]);

  const providerData = useMemo<IRadioGroupContextData>(() => ({
    inline,
    onChange: handleChange,
    value: selected,
    disabled,
    isContextPresent: true,
    name,
  }), [disabled, handleChange, inline, name, selected]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="radio--group"
      className={clsx(styles.radio, inline && styles.radioInline, className)}
    >
      <RadioGroupContext.Provider value={providerData}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
};

export default RadioGroup;
