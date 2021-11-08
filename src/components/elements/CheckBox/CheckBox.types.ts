import React, { ReactNode } from 'react';
import { ITestableProps } from '../../../types';

export interface ICheckBoxProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'onBlur'> {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  name?: string;
  inputProps?: React.HtmlHTMLAttributes<HTMLInputElement>;
}
