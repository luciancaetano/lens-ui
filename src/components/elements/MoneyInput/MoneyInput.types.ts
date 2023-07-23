import React from 'react';
import {CurrencyInputProps} from 'react-currency-input-field';
import { ITestableProps, SizeType } from '../../../types';

export interface IMoneyInputProps extends ITestableProps, Omit<CurrencyInputProps, 'onChange' | 'onBlur' | 'placeholder' | 'value' | 'size'> {
  name?: string;
  value?: number;
  placeholder?: string;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
  size?: SizeType;
}
