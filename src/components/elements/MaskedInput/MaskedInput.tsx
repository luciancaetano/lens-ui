import clsx from 'clsx';
import React, { useCallback } from 'react';
import { MaskedInputContainer, Input } from './MaskedInput.styles';
import { IMaskedInputProps } from './MaskedInput.types';

const MaskedInput = React.forwardRef<HTMLInputElement, IMaskedInputProps>(({
  className, testingID, id, onChange, tabIndex, placeholder,
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, mask,
  alwaysShowMask, beforeMaskedStateChange, maskPlaceholder,
}, ref) => {
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
    <MaskedInputContainer id={id} data-testid={testingID} className={clsx('lens-ui-MaskedInput', className)}>
      <Input
        mask={mask}
        name={name}
        placeholder={placeholder}
        beforeMaskedStateChange={beforeMaskedStateChange}
        alwaysShowMask={alwaysShowMask}
        maskPlaceholder={maskPlaceholder}
        type="MaskedInput"
        id={`${id}-input`}
        tabIndex={tabIndex}
        className={clsx('lens-ui-money-input', isError && 'pinput-error')}
        onChange={handleChange}
        value={value}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        inputRef={ref}
      />
    </MaskedInputContainer>
  );
});

export default MaskedInput;
