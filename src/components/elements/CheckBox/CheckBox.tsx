import clsx from 'clsx';
import React, { useCallback } from 'react';
import { randomId } from '../../../utils';
import { CheckBoxContainer, Label, Input } from './CheckBox.styles';
import { ICheckBoxProps } from './CheckBox.types';

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
    <CheckBoxContainer id={id} data-testid={testingID} className={clsx('lens-ui-checkbox', className)}>
      <Input
        type="checkbox"
        id={`${id}-input`}
        tabIndex={tabIndex}
        className="lens-ui-checkbox-input"
        onChange={handleChange}
        checked={checked}
        defaultChecked={defaultChecked}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        ref={ref}
      />
      <Label htmlFor={`${id}-input`}>{label}</Label>
    </CheckBoxContainer>
  );
});

export default CheckBox;
