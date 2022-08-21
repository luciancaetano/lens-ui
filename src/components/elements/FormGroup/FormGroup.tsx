import clsx from 'clsx';
import React from 'react';
import { useTheme } from '../../../hooks';
import styles from './FormGroup.module.scss';
import { IFormGroupProps } from './FormGroup.types';

/**
 * The FormGroup component can be used to group related buttons.
 * @tip The FormGroup brings some utilities for inputs like labels, errors and more
 */
const FormGroup: React.FC<IFormGroupProps> = ({
  children, className, contentClassName, id, helperText, helperTextIntent = 'danger',
  inline, label, labelFor, required, testingID, labelProps, ...props
}) => {
  const [theme] = useTheme();

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="form-group"
      className={clsx(
        styles.formGroup,
        inline && styles.formGroupInline,
        theme,
        className,
      )}
      id={id}
    >
      <label
        {...labelProps}
        htmlFor={labelFor}
        data-lens-form-group-role="label"
        data-lens-element="form-group__label"
      >
        {label}:
        {required && (<span data-lens-element="form-group__required_helper" className={styles.formGroupRequiredHelper}>&nbsp;*</span>)}
      </label>
      <div
        className={clsx(styles.content, { inline }, contentClassName)}
        data-lens-element="form-group__conteiner"
      >
        {children}
        {helperText && (
          <div
            className={clsx(styles.formGroupHelperText, styles[`form-group__helper-text--intent-${helperTextIntent}`])}
            data-lens-element="form-group__helper-text"
            data-lens-form-group-helpertext-intent={helperTextIntent}
          >
            {helperText}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormGroup;
