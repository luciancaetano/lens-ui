import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IFormGroupProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  label?: React.ReactNode | React.ReactNode[];
  contentClassName?: string;
  inline?: boolean;
  helperText?: React.ReactNode | React.ReactNode[];
  helperTextIntent?: IntentType;
  labelFor?: string;
  required?: boolean;
  labelProps?: React.HtmlHTMLAttributes<HTMLLabelElement>;
}
