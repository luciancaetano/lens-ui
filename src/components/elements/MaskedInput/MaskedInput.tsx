import clsx from 'clsx';
import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';
import styles from './MaskedInput.module.scss';
import { IMaskedInputProps } from './MaskedInput.types';

const MaskedInput: React.FC<IMaskedInputProps> = ({
  className, testingID, id, onChange, tabIndex, placeholder,
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, mask,
  alwaysShowMask, beforeMaskedStateChange, maskPlaceholder, filter, ...props
}) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(filter ? filter(event.target.value) : event.target.value, event);
    }
  }, [filter, onChange]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="masked-input"
      className={clsx(styles.maskedInput, className)}
    >
      <InputMask
        mask={mask}
        name={name}
        placeholder={placeholder}
        beforeMaskedStateChange={beforeMaskedStateChange}
        alwaysShowMask={alwaysShowMask}
        maskPlaceholder={maskPlaceholder}
        type="MaskedInput"
        id={`${id}-input`}
        tabIndex={tabIndex}
        className={clsx(styles.maskedInputField, isError && styles.maskedInputFieldError)}
        onChange={handleChange}
        value={value}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default MaskedInput;
