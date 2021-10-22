import clsx from 'clsx';
import React, { useCallback } from 'react';
import { randomId } from '../../../utils';
import { SwitchContainer, Label, Input } from './Switch.styles';
import { ISwitchProps } from './Switch.types';

const Switch = React.forwardRef<HTMLInputElement, ISwitchProps>((
  {
    className, testingID, id = randomId(), label, onChange, checked, defaultChecked, tabIndex, onBlur, name, disabled,
    autoFocus,
  }, ref,
) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(!!e.target.checked);
    }
  }, [onChange]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);

  return (
    <SwitchContainer id={id} data-testid={testingID} className={clsx('lens-ui-switch', className)}>
      <Input
        type="checkbox"
        id={`${id}-input`}
        tabIndex={tabIndex}
        className="lens-ui-switch-input"
        onChange={handleChange}
        checked={checked}
        defaultChecked={defaultChecked}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        ref={ref}
        name={name}
      />
      <Label htmlFor={`${id}-input`}>{label}</Label>
    </SwitchContainer>
  );
});

export default Switch;
