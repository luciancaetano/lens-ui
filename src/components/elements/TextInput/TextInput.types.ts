import React from 'react';
import { ITestableProps, SizeType } from '../../../types';

interface IBaseTextInputProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'> {
  name?: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  readonly?: boolean;
  isError?: boolean;
  maxLength?: number;
  required?: boolean;
  type?: 'text' | 'search' | string;
  size?: SizeType;
}

export type TextInputPropsType = {
  inputProps?: Omit<React.HtmlHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onBlur' | 'value' | 'defaultValue' | 'placeholder' | 'tabIndex' | 'disabled'
  | 'name' | 'autoFocus' | 'maxLength' | 'required'
  >;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  multiline?: true;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  prefix?: React.ReactNode | React.ReactNode[];
  suffix?: React.ReactNode | React.ReactNode[];
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
