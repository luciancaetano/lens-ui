import React, { ReactNode } from 'react';
import { ITestableProps } from '../../../types';

export interface ISwitchProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'onBlur' | 'value' | 'defaultValue'> {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  name?: string;
  inputProps?: Omit<React.HtmlHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onBlur' | 'value' | 'defaultValue' | 'placeholder' | 'tabIndex' | 'disabled'
  | 'name' | 'autoFocus' | 'maxLength' | 'required'
  >;
}
