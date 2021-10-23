import clsx from 'clsx';
import React from 'react';
import styles from './FormGroup.module.scss';
import { IFormGroupProps } from './FormGroup.types';
import { CLASSES } from '../../../css-classes';

const FormGroup: React.FC<IFormGroupProps> = ({
  children, className, contentClassName, id, helperText, helperTextIntent = 'danger', inline, label, labelFor, required, testingID,
}) => (
  <div
    data-testid={testingID}
    className={clsx(
      styles.formGroup,
      inline && styles.formGroupInline,
      CLASSES.ComponentName('FormGroup'),
      className,
    )}
    id={id}
  >
    <label htmlFor={labelFor} data-lens-form-group-role="label">
      {label}
      {required && (<span className={styles.formGroupRequiredHelper}>&nbsp;*</span>)}
    </label>
    <div className={clsx(styles.content, { inline }, contentClassName)}>
      {children}
      {helperText && (
        <div className={clsx(styles.formGroupHelperText, styles[`form-group__helper-text--intent-${helperTextIntent}`])}>
          {helperText}
        </div>
      )}
    </div>
  </div>
);

export default FormGroup;
