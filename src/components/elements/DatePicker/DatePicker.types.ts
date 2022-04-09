import React from 'react';
import { ITestableProps } from '../../../types';

export interface IDateInputLocale {
  name: string;
  months: string[]; // 12
  weekDays: string[]; // 7
  monthsShort: string[]; // 12
  weekDaysShort: string[]; // 7
}

export interface IDatePickerLocale {
  name: string;
  months: Array<string[]>;
  weekDays: Array<string[]>;
  digits: string[];
  meridiems: Array<string[]>;
}
export interface IBasePickerProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue' | 'children'>{
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  isError?: boolean;
  required?: boolean;
  isMobile?: boolean;
  inline?: boolean;
  locale?: IDatePickerLocale;
  onPickerOpen?: () => void;
  onPickerClose?: () => void;
  children?: (strDate: string, openCalendar: Function, handleValueChange: React.ChangeEventHandler<HTMLElement>) => React.ReactNode;
}

export type DatePickerType = 'date' | 'month' | 'range' | 'year' | 'multiple' | 'week';

export interface IDatePickerProps extends IBasePickerProps {
  value?: Date | undefined | null;
  defaultValue?: Date | undefined | null;
  onChange?: (date: Date | undefined) => void;
  type: 'date';
  numberOfMonths?: number;
  displayFormat?: string;
  maskFormat?: string;
  hideWeekDays?: boolean;
  displayWeekNumbers?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export interface IMonthPickerProps extends IBasePickerProps {
  value?: number | undefined | null;
  defaultValue?: number | undefined | null;
  onChange?: (month: number | undefined) => void;
  type: 'month';
}

export interface IYearPickerProps extends IBasePickerProps {
  value?: number | undefined | null;
  defaultValue?: number | undefined | null;
  onChange?: (year: number | undefined) => void;
  type: 'year';
}

export interface IRangeDatePickerProps extends IBasePickerProps {
  format?: string;
  value?: Date[] | undefined | null;
  defaultValue?: Date[];
  onChange?: (value: Date[] | undefined) => void;
  type: 'range';
  numberOfMonths?: number;
  displayFormat?: string;
  hideWeekDays?: boolean;
  displayWeekNumbers?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export interface IWeekDatePickerProps extends IBasePickerProps {
  format?: string;
  value?: Date[] | undefined | null;
  defaultValue?: Date[];
  onChange?: (value: Date[] | undefined) => void;
  type: 'week';
  numberOfMonths?: number;
  displayFormat?: string;
  hideWeekDays?: boolean;
  displayWeekNumbers?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export interface IMultiDatePickerProps extends IBasePickerProps {
  format?: string;
  value?: Date[] | undefined | null;
  defaultValue?: Date[] | undefined | null;
  onChange?: (value: Date[] | undefined) => void;
  type: 'multiple';
  numberOfMonths?: number;
  displayFormat?: string;
  hideWeekDays?: boolean;
  displayWeekNumbers?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export type IDatePickerPropsType = IDatePickerProps | IMonthPickerProps | IRangeDatePickerProps | IYearPickerProps | IMultiDatePickerProps | IWeekDatePickerProps;
