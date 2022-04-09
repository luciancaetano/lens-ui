import clsx from 'clsx';
import React, { useCallback } from 'react';
import CurrencyInput from 'react-currency-input';
import styles from './MoneyInput.module.scss';
import { IMoneyInputProps } from './MoneyInput.types';

/**
 * MoneyInput fields let users enter and edit monetary formated value.
 */
const MoneyInput: React.FC<IMoneyInputProps> = ({
  className, testingID, id, onChange, tabIndex, decimalSeparator = ',', precision = 3, thousandSeparator = '.',
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, placeholder, prefix, suffix, ...props
}) => {
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
    <div
      {...props}
      data-lens-element="money-input"
      id={id}
      data-testid={testingID}
      className={clsx(styles.moneyInput, className)}
    >
      <CurrencyInput
        name={name}
        placeholder={placeholder}
        data-lens-element="money-input__input"
        id={`${id}-input`}
        tabIndex={tabIndex}
        className={clsx(styles.moneyInputField, isError && styles.moneyInputFieldError)}
        onChangeEvent={handleChange}
        value={defaultValue || value}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        decimalSeparator={decimalSeparator}
        precision={precision}
        thousandSeparator={thousandSeparator}
        prefix={prefix ? `${prefix} ` : ''}
        suffix={suffix ? ` ${suffix}` : ''}
      />
    </div>
  );
};

export default MoneyInput;
