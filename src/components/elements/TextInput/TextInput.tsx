import clsx from 'clsx';
import get from 'lodash/get';
import React, { useCallback, useMemo } from 'react';
import Icon from '../Icon/Icon';
import styles from './TextInput.module.scss';
import { TextInputPropsType } from './TextInput.types';

/**
 * MoneyInput fields let users enter and edit text.
 */
const TextInput = React.forwardRef<HTMLElement, TextInputPropsType>(({
  className, testingID, id, onChange, tabIndex, maxLength, required, placeholder,
  onBlur, disabled, defaultValue, value, autoFocus, name, isError, type = 'text',
  multiline, inputProps, readonly, ...props
}, ref) => {
  const prefix = useMemo(() => get(props, 'prefix', null), [props]);
  const suffix = useMemo(() => type !== 'search' && get(props, 'suffix', null), [props, type]);

  const handleChange = useCallback((e: React.ChangeEvent<any>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);

  const handleBlur = useCallback((e: React.FocusEvent<any>) => {
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);

  if (multiline) {
    return (
      <div {...props} data-lens-element="text-input" id={id} data-testid={testingID} className={clsx(styles.textInput, className)}>
        <textarea
          {...inputProps as any}
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
          readOnly={readonly}
        />
      </div>
    );
  }

  return (
    <div
      {...props}
      id={id}
      data-lens-element="text-input"
      data-testid={testingID}
      className={clsx(styles.textInput, type === 'search' && styles.textInputSearch, className, { search: type === 'search' })}
    >
      {prefix && <div data-lens-element="text-input__input__prefix" className={styles.textInputPrefix}>{prefix}</div>}
      <input
        {...inputProps as any}
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
          prefix && styles.textInputInputWithPrefix,
          suffix && styles.textInputInputWithSuffix,
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
        readOnly={readonly}
        min={get(props, 'min', undefined)}
        max={get(props, 'max', undefined)}
      />
      {suffix && <div data-lens-element="text-input__input__suffix" className={styles.textInputSuffix}>{suffix}</div>}
      {type === 'search' && <div data-lens-element="text-input__input__search-icon" className={styles.textInputSearchIcon}><Icon name="BsSearch" /></div>}
    </div>
  );
});

export default TextInput;
