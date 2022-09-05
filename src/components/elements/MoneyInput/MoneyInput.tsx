import clsx from 'clsx';
import React, { useCallback } from 'react';
import CurrencyInput from 'react-currency-input';
import { useTheme } from '../../../hooks';
import styles from './MoneyInput.module.scss';
import { IMoneyInputProps } from './MoneyInput.types';

/**
 * MoneyInput fields let users enter and edit monetary formated value.
 */
const MoneyInput: React.FC<IMoneyInputProps> = ({
  className, testingID, id, onChange, tabIndex, decimalSeparator = ',', precision = 3, thousandSeparator = '.',
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, placeholder, prefix, suffix, size, ...props
}) => {
  const [theme, { defaultSize }] = useTheme();
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, maskedvalue: string, floatvalue: number) => {
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
      data-testid={testingID}
      className={clsx(styles.moneyInput, className)}
    >
      <CurrencyInput
        name={name}
        placeholder={placeholder}
        data-lens-element="money-input__input"
        id={id}
        tabIndex={tabIndex}
        className={clsx(styles.moneyInputField, theme, isError && styles.moneyInputFieldError, styles[`money-input__field--size-${size || defaultSize}`])}
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
