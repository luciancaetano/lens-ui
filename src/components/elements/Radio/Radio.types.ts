import React, { ReactNode } from 'react';
import { ITestableProps, SizeType } from '../../../types';

export interface IRadioOption extends ITestableProps {
  label: ReactNode;
  value: string;
  className?: string;
  tabIndex?: number;
}

export interface IRadioProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange' | 'value' | 'defaultValue'> {
  checked?: boolean;
  name?: string;
  value: string | number ;
  label: React.ReactNode;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  inputClassName?: string;
  size?: SizeType;
}

export interface IRadioGroupProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange' | 'value' | 'defaultValue'>{
  onChange?: (value: string | number, e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  disabled?: boolean;
  value?: string | number ;
  defaultValue?: string | number ;
  inline?: boolean;
  size?: SizeType;
}
