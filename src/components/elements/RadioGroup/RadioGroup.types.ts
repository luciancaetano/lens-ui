import React, { ReactNode } from 'react';
import { ITestableProps } from '../../../types';

export type RadioGroupOptionValueType = string | number | null;

export interface IRadioGroupOption extends ITestableProps {
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
  onChange?: (e: React.MouseEvent<HTMLInputElement>, value: RadioGroupOptionValueType) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  inline?: boolean;
}
