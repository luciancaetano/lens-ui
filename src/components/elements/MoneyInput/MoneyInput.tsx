import clsx from 'clsx';
import React, { useCallback } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useTheme } from '../../../hooks';
import styles from './MoneyInput.module.scss';
import { IMoneyInputProps } from './MoneyInput.types';
import { CurrencyInputOnChangeValues } from 'react-currency-input-field/dist/components/CurrencyInputProps';

/**
 * MoneyInput fields let users enter and edit monetary formated value.
 */
const MoneyInput: React.FC<IMoneyInputProps> = ({
  className, testingID, id, onChange, tabIndex, decimalSeparator = ',', groupSeparator = '.',
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, placeholder, prefix, suffix, size, ...props
}) => {
  const [theme, { defaultSize }] = useTheme();
  const handleChange = useCallback((value: string | undefined, name?: string, values?: CurrencyInputOnChangeValues) => {
    if (onChange && values) {
      onChange(values.float ?? 0);
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
        onValueChange={handleChange}
        value={defaultValue || value}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        decimalSeparator={decimalSeparator}
        groupSeparator={groupSeparator}
      />
    </div>
  );
};

export default MoneyInput;
