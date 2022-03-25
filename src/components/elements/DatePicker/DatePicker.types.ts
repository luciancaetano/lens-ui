import React from 'react';
import { ITestableProps } from '../../../types';

export interface IDateInputLocale {
  name: string;
  months: string[]; // 12
  weekDays: string[]; // 7
  monthsShort: string[]; // 12
  weekDaysShort: string[]; // 7
}

export interface IBasePickerProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'>{
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
  disabled?: boolean;
  isError?: boolean;
  required?: boolean;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
}

export interface IDatePickerProps extends IBasePickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (month: string) => void;
  children?: (month: string) => React.ReactNode;
  type: 'date';
}

export interface IMonthPickerProps extends IBasePickerProps {
  value?: number;
  defaultValue?: number;
  onChange?: (month: number) => void;
  children?: (month: number) => React.ReactNode;
  type: 'month';
}

export interface IRangeDatePickerProps extends IBasePickerProps {
  format?: string;
  value?: [string, string];
  defaultValue?: [string, string];
  onChange?: (value: [string, string]) => void;
  children?: (value: [string, string]) => React.ReactNode;
  type: 'range';
}

export interface ITimePickerProps extends IBasePickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
  children?: (time: string) => React.ReactNode;
  type: 'time';
}

export type IDatePickerPropsType = IDatePickerProps | IMonthPickerProps | IRangeDatePickerProps | ITimePickerProps;
