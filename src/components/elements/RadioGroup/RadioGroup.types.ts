import React, { ReactNode } from 'react';
import { ITestableProps } from '../../../types';

export interface IRadioGroupOption extends ITestableProps {
  label: ReactNode;
  value: string;
  className?: string;
  tabIndex?: number;
}

export interface IRadioGroupProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'value' | 'defaultValue'> {
  options: IRadioGroupOption[];
  value?: string;
  name: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  inline?: boolean;
}
