import React from 'react';
import {
  IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface IDateInputLocale {
  name: string;
  months: string[]; // 12
  weekDays: string[]; // 7
  monthsShort: string[]; // 12
  weekDaysShort: string[]; // 7
}
export interface IDateInputProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  name?: string;
  placeholder?: string;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  tabIndex?: number;
  disabled?: boolean;
  isError?: boolean;
  dateFormat?: string;
  displayFormat?: string;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
  required?: boolean;
  type?: 'multiple' | 'single' | 'range' | 'time-only' | 'month-only' | 'year-only';
  time?: boolean | 'analog';
  locale?: IDateInputLocale;
  hideMonth?: boolean;
  hideOnScroll?: boolean;
  hideWeekDays?: boolean;
  readOnly?: boolean;
  hideYear?: boolean;
  weekStartDayIndex?: number;
  children?: (stringDate: string, openCalendar: () => void) => React.ReactNode;
}
