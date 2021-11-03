import clsx from 'clsx';
import React from 'react';
import styles from './FormGroup.module.scss';
import { IFormGroupProps } from './FormGroup.types';

const FormGroup: React.FC<IFormGroupProps> = ({
  children, className, contentClassName, id, helperText, helperTextIntent = 'danger', inline, label, labelFor, required, testingID,
}) => (
  <div
    data-testid={testingID}
    data-lens-element="form-group"
    className={clsx(
      styles.formGroup,
      inline && styles.formGroupInline,
      className,
    )}
    id={id}
  >
    <label
      htmlFor={labelFor}
      data-lens-form-group-role="label"
      data-lens-element="form-group__label"
    >
      {label}
      {required && (<span className={styles.formGroupRequiredHelper}>&nbsp;*</span>)}
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
        >
          {helperText}
        </div>
      )}
    </div>
  </div>
);

export default FormGroup;
