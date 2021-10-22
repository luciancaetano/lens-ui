import React from 'react';
import {
  IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface IMoneyInputProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
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
}
