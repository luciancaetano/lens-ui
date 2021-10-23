import clsx from 'clsx';
import toString from 'lodash/toString';
import toNumber from 'lodash/toNumber';
import get from 'lodash/get';
import find from 'lodash/find';
import React, { useCallback, useMemo } from 'react';
import { randomId } from '../../../utils';
import { RadioGroupContainer, Label, Input } from './RadioGroup.styles';
import { IRadioGroupProps } from './RadioGroup.types';

const RadioGroup: React.FC<IRadioGroupProps> = ({
  className, testingID, id, onChange, options, value, defaultValue, name, tabIndex, onBlur, disabled,
}) => {
  const handleChange = useCallback((e: React.FormEvent<HTMLDivElement>) => {
    if (onChange && e.target) {
      const target = e.target as HTMLInputElement;
      if (target.type === 'radio' && target.name === name) {
        const targetType = typeof get(find(options, (opt) => toString(opt.value) === toString(target.value)), 'value');

        switch (targetType) {
          case 'boolean': onChange(toString(target.value) === 'true'); break;
          case 'number': onChange(toNumber(target.value)); break;
          default: onChange(toString(target.value)); break;
        }
      }
    }
  }, [onChange, name, options]);

  const items = useMemo(() => options.map((option) => {
    const inputId = randomId();

    return (
      <div key={String(option.value)} className="lens-ui-radio-group-item-container">
        <Input
          tabIndex={option.tabIndex}
          type="radio"
          id={`${inputId}-input`}
          name={name}
          value={toString(option.value)}
          className={clsx('lens-ui-radio-group-input', option.className)}
          checked={value !== undefined ? toString(value) === toString(option.value) : undefined}
          defaultChecked={defaultValue !== undefined ? toString(defaultValue) === toString(option.value) : undefined}
          disabled={disabled}
        />
        <Label htmlFor={`${inputId}-input`}>{option.label}</Label>
      </div>
    );
  }), [defaultValue, options, value, name, disabled]);

  return (
    <RadioGroupContainer
      id={id}
      data-testid={testingID}
      data-lens-element="radio-group"
      className={clsx('lens-ui-radio-group', className)}
      tabIndex={tabIndex}
      onChange={handleChange}
      onBlur={onBlur}
    >
      {items}
    </RadioGroupContainer>
  );
};

export default RadioGroup;
