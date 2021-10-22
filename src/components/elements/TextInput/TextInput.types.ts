import React from 'react';
import {
  IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface ITextInputProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  type?: 'text' | 'textarea' | 'search' | string;
  name?: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
  maxLength?: number;
  required?: boolean;
}
