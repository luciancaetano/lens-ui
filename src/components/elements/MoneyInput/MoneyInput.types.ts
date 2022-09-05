import React from 'react';
import { ITestableProps, SizeType } from '../../../types';

export interface IMoneyInputProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'onBlur' | 'placeholder' | 'value'> {
  name?: string;
  value?: number;
  placeholder?: number;
  defaultValue?: number;
  onChange?: (value: number, masked: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
  decimalSeparator?: string;
  thousandSeparator?: string;
  precision?: number;
  prefix?: string;
  suffix?: string;
  size?: SizeType;
}
