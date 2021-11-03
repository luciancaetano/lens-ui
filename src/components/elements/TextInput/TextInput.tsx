import clsx from 'clsx';
import React, { useCallback } from 'react';
import Icon from '../Icon/Icon';
import styles from './TextInput.module.scss';
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
      <div data-lens-element="text-input" id={id} data-testid={testingID} className={clsx(styles.textInput, className)}>
        <textarea
          data-lens-element="text-input__input"
          placeholder={placeholder}
          name={name}
          id={id && `${id}-input`}
          tabIndex={tabIndex}
          className={clsx(styles.textInputTextarea, isError && styles.textInputTextareaError)}
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
      </div>
    );
  }

  return (
    <div
      id={id}
      data-lens-element="text-input"
      data-testid={testingID}
      className={clsx(styles.textInput, type === 'search' && styles.textInputSearch, className, { search: type === 'search' })}
    >
      <input
        placeholder={placeholder}
        data-lens-element="text-input__input"
        name={name}
        type={type}
        id={id && `${id}-input`}
        tabIndex={tabIndex}
        className={clsx(
          styles.textInputInput,
          isError && styles.textInputInputError,
          type === 'search' && styles.textInputInputSearch,
        )}
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
      {type === 'search' && <div className={styles.textInputSearchIcon}><Icon name="BsSearch" /></div>}
    </div>
  );
});

export default TextInput;
