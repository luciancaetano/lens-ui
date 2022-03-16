import React, { ReactNode } from 'react';
import { ITestableProps } from '../../../types';

export type RadioGroupOptionValueType = string | number | boolean;

export interface IRadioGroupOption {
  label: ReactNode;
  value: RadioGroupOptionValueType;
  className?: string;
  tabIndex?: number;
}

export interface IRadioGroupProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'value' | 'defaultValue'> {
  options: IRadioGroupOption[];
  value?: RadioGroupOptionValueType;
  name: string;
  defaultValue?: RadioGroupOptionValueType;
  onChange?: (checked: RadioGroupOptionValueType) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  inline?: boolean;
}
