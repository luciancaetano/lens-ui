import React from 'react';
import { ITestableProps } from '../../../types';

export interface IDateInputLocale {
  name: string;
  months: string[]; // 12
  weekDays: string[]; // 7
  monthsShort: string[]; // 12
  weekDaysShort: string[]; // 7
}

export interface IBasePickerProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'>{
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  isError?: boolean;
  required?: boolean;
  withPortal?: boolean;
  onPickerOpen?: () => void;
  onPickerClose?: () => void;
  children?: (strDate: string, openCalendar: Function, handleValueChange: React.ChangeEventHandler<HTMLElement>) => React.ReactNode;
}

export type DatePickerType = 'date' | 'month' | 'range' | 'time' | 'year';

export interface IDatePickerProps extends IBasePickerProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  type: 'date';
  numberOfMonths?: number;
  displayFormat?: string;
}

export interface IMonthPickerProps extends IBasePickerProps {
  value?: number;
  defaultValue?: number;
  onChange?: (month: number) => void;
  type: 'month';
}

export interface IYearPickerProps extends IBasePickerProps {
  value?: number;
  defaultValue?: number;
  onChange?: (month: number) => void;
  type: 'year';
}

export interface IRangeDatePickerProps extends IBasePickerProps {
  format?: Date;
  value?: [Date, Date];
  defaultValue?: [Date, Date];
  onChange?: (value: [Date, Date]) => void;
  type: 'range';
  numberOfMonths?: number;
  displayFormat?: string;
}

export interface ITimePickerProps extends IBasePickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
  type: 'time';
  displayFormat?: string;
}

export type IDatePickerPropsType = IDatePickerProps | IMonthPickerProps | IRangeDatePickerProps | ITimePickerProps | IYearPickerProps;
