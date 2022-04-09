import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IFormGroupProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  label?: JSX.Element | JSX.Element[];
  contentClassName?: string;
  inline?: boolean;
  helperText?: JSX.Element | JSX.Element[];
  helperTextIntent?: IntentType;
  labelFor?: string;
  required?: boolean;
  labelProps?: React.HtmlHTMLAttributes<HTMLLabelElement>;
}
