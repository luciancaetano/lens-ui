import clsx from 'clsx';
import React from 'react';
import styles from './FormGroup.styles';
import { IFormGroupProps } from './FormGroup.types';
import { CLASSES } from '../../../css-classes';

const FormGroup: React.FC<IFormGroupProps> = ({
  children, className, contentClassName, id, helperText, helperTextIntent = 'danger', inline, label, labelFor, required, disabled, testingID,
}) => (
  <styles.FormGroup
    data-testid={testingID}
    className={clsx(CLASSES.FontReset, 'lens-ui-form-group', { disabled }, className)}
    inline={inline}
    id={id}
  >
    <label htmlFor={labelFor} className="lens-ui-font-definition">
      {label}
      {required && (<span className="lens-ui-form-group__required-helper">&nbsp;*</span>)}
    </label>
    <styles.Content inline={inline} className={clsx('lens-ui-form-group__content', contentClassName)}>
      {children}
      {helperText && (
        <div className={clsx(CLASSES.FontReset, 'lens-ui-form-group__helper-text', `intent-${helperTextIntent}`)}>
          {helperText}
        </div>
      )}
    </styles.Content>
  </styles.FormGroup>
);

export default FormGroup;
