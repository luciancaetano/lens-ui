import React, { ReactNode } from 'react';
import { ITestableProps, SizeType } from '../../../types';

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
  inputProps?: Omit<React.HtmlHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onBlur' | 'value' | 'defaultValue' | 'placeholder' | 'tabIndex' | 'disabled'
  | 'name' | 'autoFocus' | 'maxLength' | 'required'
  >;
  size?: SizeType;
}
