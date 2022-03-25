import moment from 'moment';

export function toMoment(value: string) {
  const dt = moment(value);
  return dt.isValid() ? dt : moment();
}

export function parseValue(value: string | number | string[] | [string, string]) {
  if (Array.isArray(value)) {
    return value.map((v: string) => toMoment(v));
  }

  if (typeof value === 'number') {
    return moment().month(value);
  }

  return toMoment(value);
}

export function init(value: string | number | string[] | [string, string], defaultValue: string | number | string[] | [string, string]) {
  if (value === undefined) {
    return parseValue(defaultValue);
  }

  return parseValue(value);
}
