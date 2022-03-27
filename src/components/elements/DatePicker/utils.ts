import { DateObject, toDateObject } from 'react-multi-date-picker';
import { DatePickerType } from './DatePicker.types';

export function toDate(value: Date): DateObject {
  const dt = toDateObject(value);
  return dt.isValid ? dt : toDateObject(new Date());
}

export function parseValue(value: Date | number | string | Date[] | [Date, Date], type: DatePickerType) {
  if (Array.isArray(value) && type === 'range') {
    return value.length === 0 ? [toDateObject(new Date()), toDateObject(new Date())] : value.map((v: Date) => toDate(v));
  }

  if (!value && type === 'range') {
    return [toDateObject(new Date()), toDateObject(new Date())];
  }

  if (typeof value === 'number' && type === 'month') {
    const dt = toDateObject(new Date());
    dt.setMonth(value);
    return dt;
  }

  if (!value && type === 'month') {
    return toDateObject(new Date());
  }

  if (typeof value === 'number' && type === 'year') {
    const dt = toDateObject(new Date());
    dt.setYear(value);
    return dt;
  }

  if (!value && type === 'year') {
    return toDateObject(new Date());
  }

  if (!Array.isArray(value) && typeof value === 'string' && type === 'time') {
    return toDateObject(new Date(value));// todo handle time
  }

  if (!Array.isArray(value) && type === 'date') {
    return toDate(value as Date);
  }

  return toDateObject(new Date());
}

export function init(value: Date | number | string | Date[] | [Date, Date], defaultValue: Date | number | string | Date[] | [Date, Date], type: DatePickerType) {
  if (value === undefined) {
    return parseValue(defaultValue, type);
  }

  return parseValue(value, type);
}
