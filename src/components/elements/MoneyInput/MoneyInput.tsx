import clsx from 'clsx';
import React, { useCallback } from 'react';
import { MoneyInputContainer, Input } from './MoneyInput.styles';
import { IMoneyInputProps } from './MoneyInput.types';

const MoneyInput: React.FC<IMoneyInputProps> = React.forwardRef(({
  className, testingID, id, onChange, tabIndex, decimalSeparator = ',', precision = 3, thousandSeparator = '.',
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, placeholder,
}, ref) => {
  const handleChange = useCallback((event, maskedvalue, floatvalue) => {
    if (onChange) {
      onChange(floatvalue, maskedvalue, event);
    }
  }, [onChange]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);

  return (
    <MoneyInputContainer id={id} data-testid={testingID} className={clsx('lens-ui-MoneyInput', className)}>
      <Input
        name={name}
        placeholder={placeholder}
        id={`${id}-input`}
        tabIndex={tabIndex}
        className={clsx('lens-ui-money-input', isError && 'pinput-error')}
        onChangeEvent={handleChange}
        value={defaultValue || value}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        decimalSeparator={decimalSeparator}
        precision={precision}
        thousandSeparator={thousandSeparator}
        ref={ref as any}
      />
    </MoneyInputContainer>
  );
});

export default MoneyInput;
