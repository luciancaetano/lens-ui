import React from 'react';
import { ITestableProps } from '../../../types';

interface IBaseTextInputProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'> {
  name?: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
  maxLength?: number;
  required?: boolean;
  type?: 'text' | 'search' | string;
}

export type TextInputPropsType = {
  inputProps?: Omit<React.HtmlHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onBlur' | 'value' | 'defaultValue' | 'placeholder' | 'tabIndex' | 'disabled'
  | 'name' | 'autoFocus' | 'maxLength' | 'required'
  >;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  multiline?: true;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
} & IBaseTextInputProps |
{
  inputProps?: Omit<React.HtmlHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'onBlur' | 'value' | 'defaultValue' | 'placeholder' | 'tabIndex' | 'disabled'
  | 'name' | 'autoFocus' | 'maxLength' | 'required'
  >;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  multiline: false;
  type?: undefined;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & IBaseTextInputProps;
