import clsx from 'clsx';
import React, { useCallback } from 'react';
import Icon from '../Icon/Icon';
import {
  TextInputContainer, Input, Textarea, SearchIcon,
} from './TextInput.styles';
import { ITextInputProps } from './TextInput.types';

const TextInput = React.forwardRef<HTMLElement, ITextInputProps>(({
  className, testingID, id, onChange, tabIndex, maxLength, required, placeholder,
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, type = 'text',
}, ref) => {
  const handleChange = useCallback((e: React.ChangeEvent<any>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  const handleBlur = useCallback((e: React.FocusEvent<any>) => {
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);

  if (type === 'textarea') {
    return (
      <TextInputContainer id={id} data-testid={testingID} className={clsx('lens-ui-TextInput', className)}>
        <Textarea
          placeholder={placeholder}
          name={name}
          id={`${id}-input`}
          tabIndex={tabIndex}
          className={clsx('lens-ui-text-input', isError && 'pinput-error')}
          onChange={handleChange as any}
          value={value}
          defaultValue={defaultValue}
          onBlur={handleBlur}
          disabled={disabled}
          autoFocus={autoFocus}
          maxLength={maxLength}
          required={required}
          ref={ref as any}
        />
      </TextInputContainer>
    );
  }

  return (
    <TextInputContainer
      id={id}
      data-testid={testingID}
      className={clsx('lens-ui-TextInput', className, { search: type === 'search' })}
    >
      <Input
        placeholder={placeholder}
        name={name}
        type={type}
        id={`${id}-input`}
        tabIndex={tabIndex}
        className={clsx('lens-ui-text-input', isError && 'pinput-error', { search: type === 'search' })}
        onChange={handleChange}
        value={value}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        required={required}
        ref={ref as any}
      />
      {type === 'search' && <SearchIcon><Icon name="BsSearch" /></SearchIcon>}
    </TextInputContainer>
  );
});

export default TextInput;
