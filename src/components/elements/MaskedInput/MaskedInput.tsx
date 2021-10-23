import clsx from 'clsx';
import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';
import { CLASSES } from '../../../css-classes';
import styles from './MaskedInput.module.scss';
import { IMaskedInputProps } from './MaskedInput.types';

const MaskedInput: React.FC<IMaskedInputProps> = ({
  className, testingID, id, onChange, tabIndex, placeholder,
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, mask,
  alwaysShowMask, beforeMaskedStateChange, maskPlaceholder,
}) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [onChange]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);

  return (
    <div id={id} data-testid={testingID} className={clsx(styles.container, CLASSES.ComponentName('MaskedInput'), className)}>
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
        className={clsx(styles.input, isError && styles.inputError)}
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
