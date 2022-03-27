import { DateObject, toDateObject } from 'react-multi-date-picker';
import { DatePickerType } from './DatePicker.types';

export function toDate(value: Date): DateObject {
  const dt = toDateObject(value);
  return dt.isValid ? dt : toDateObject(new Date());
}

export function parseValue(value: Date | number | string | Date[] | [Date, Date], type: DatePickerType) {
  if (Array.isArray(value) && type === 'range') {
    return value.length === 0 ? [] : value.map((v: Date) => toDate(v));
  }

  if (Array.isArray(value) && type === 'week') {
    return value.length === 0 ? [] : value.map((v: Date) => toDate(v));
  }

  if (Array.isArray(value) && type === 'multiple') {
    return value.length === 0 ? [] : value.map((v: Date) => toDate(v));
  }

  if (typeof value === 'number' && type === 'month') {
    const dt = toDateObject(new Date());
    dt.setMonth(value);
    return dt;
  }

  if (typeof value === 'number' && type === 'year') {
    const dt = toDateObject(new Date());
    dt.setYear(value);
    return dt;
  }

  if (!Array.isArray(value) && type === 'date') {
    return toDate(value as Date);
  }

  if (!value) {
    switch (type) {
      case 'date':
        return toDateObject(new Date());
      case 'month':
        return toDateObject(new Date());
      case 'year':
        return toDateObject(new Date());
      case 'range':
        return [];
      case 'multiple':
        return [];
      case 'week':
        return [];
      default: break;
    }
  }

  return toDateObject(new Date());
}

export function init(value: Date | number | string | Date[] | [Date, Date], defaultValue: Date | number | string | Date[] | [Date, Date], type: DatePickerType) {
  if (value === undefined) {
    return parseValue(defaultValue, type);
  }

  return parseValue(value, type);
}
