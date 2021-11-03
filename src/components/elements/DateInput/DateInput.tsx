import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { parseISO, format as dtFnsFormat } from 'date-fns';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import AnalogTimePicker from 'react-multi-date-picker/plugins/analog_time_picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import DatePickerHeader from 'react-multi-date-picker/plugins/date_picker_header';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import isObject from 'lodash/isObject';
import { IDateInputProps } from './DateInput.types';
import { useDevice } from '../../../hooks';
import { DatePickerLocalePtBR } from './pt_BR.locale';
import './Dateinput.scss';

/**
 * TODO
 * - Ajustar locale
 * - Tratar os modos only-[month, year, time]
 */
const DateInput: React.FC<IDateInputProps> = React.forwardRef(({
  className, testingID, id, onChange, tabIndex, displayFormat = 'DD/MM/YYYY', dateFormat = 'yyyy-MM-dd HH:mm:ss', placeholder, time,
  disabled, value, name, isError, children, readOnly,
  onCalendarClose, onCalendarOpen, required, type, locale = DatePickerLocalePtBR(),
  weekStartDayIndex, hideMonth, hideOnScroll, hideWeekDays, hideYear,
}, ref) => {
  const { isPhone, isTablet } = useDevice();

  const handleChange = useCallback((selectedDates: DateObject | DateObject[] | null) => {
    const formating = (dt: DateObject) => {
      if (type === 'month-only') {
        return parseInt(dtFnsFormat(dt.toDate(), 'MM'), 10).toString();
      }

      if (type === 'year-only') {
        return parseInt(dtFnsFormat(dt.toDate(), 'yyyy'), 10).toString();
      }

      if (type === 'time-only') {
        return dtFnsFormat(dt.toDate(), 'HH:mm:ss');
      }

      return dtFnsFormat(dt.toDate(), dateFormat);
    };

    const values = Array.isArray(selectedDates) ? selectedDates.map(formating) : formating(selectedDates);

    if (onChange) {
      onChange(values);
    }
  }, [onChange, type, dateFormat]);

  const valueData = useMemo(() => {
    if (value === undefined) return undefined;

    const formating = (dt: string) => {
      const dto = new DateObject(new Date());

      if (type === 'month-only') {
        dto.setMonth(parseInt(dt, 10));
        return dto;
      }

      if (type === 'year-only') {
        dto.setYear(parseInt(dt, 10));
        return dto;
      }

      if (type === 'time-only') {
        const [hh, mm, ss] = dt.split(/\s|\:/g);
        dto.setHour(parseInt(hh, 10));
        dto.setMinute(parseInt(mm, 10));
        dto.setSecond(parseInt(ss, 10));
        return dto;
      }

      return new DateObject(parseISO(dt));
    };

    if (!Array.isArray(value)) {
      return formating(value);
    }

    return value.map(formating);
  }, [value, type]);

  const weekDays = useMemo(() => {
    if (locale && isObject(locale)) {
      return locale.weekDays.map((longVal, index) => [longVal, locale.weekDaysShort[index]]);
    }
    return undefined;
  }, [locale]);

  const months = useMemo(() => {
    if (locale && isObject(locale)) {
      return locale.months.map((longVal, index) => [longVal, locale.monthsShort[index]]);
    }
    return undefined;
  }, [locale]);

  const parsedFormat = useMemo(() => {
    if (type === 'time-only') {
      return 'HH:mm:ss A';
    }

    if (type === 'month-only') {
      return 'MM';
    }

    if (type === 'year-only') {
      return 'YYYY';
    }

    return displayFormat;
  }, [displayFormat, type]);

  return (
    <div
      id={id}
      data-testid={testingID}
      data-lens-element="card"
      className={clsx('lens-ui-date-input', className)}
      tabIndex={tabIndex}
    >
      <DatePicker
        name={name}
        numberOfMonths={type === 'range' ? 2 : 1}
        readOnly={readOnly}
        multiple={type === 'multiple'}
        range={type === 'range'}
        className={clsx('lens-ui-date-input__element', isError && 'pinput-error', { 'rmdp-mobile': isPhone || isTablet })}
        onChange={handleChange}
        disableDayPicker={type === 'time-only'}
        hideMonth={hideMonth}
        hideOnScroll={hideOnScroll}
        hideWeekDays={hideWeekDays}
        hideYear={hideYear}
        weekDays={weekDays as any}
        months={months as any}
        weekStartDayIndex={weekStartDayIndex}
        value={valueData as any}
        disabled={disabled}
        format={parsedFormat}
        ref={ref as any}
        onClose={onCalendarClose}
        onOpen={onCalendarOpen}
        required={required}
        placeholder={placeholder}
        onlyMonthPicker={type === 'month-only'}
        onlyYearPicker={type === 'year-only'}
        render={children}
        plugins={[
          ...(!time && (isPhone || isTablet) ? [<DatePickerHeader
            position="top"
            size="medium"
          />] : []),
          ...(type === 'multiple' && (!isPhone && !isTablet) ? [
            <DatePanel
              position="right"
              sort="date"
              eachDaysInRange={false}
            />,
          ] : []),

          ...((time === true || type === 'time-only') && time !== 'analog' ? [<TimePicker position="bottom" />] : []),
          ...((time === 'analog' && type === 'time-only') ? [<AnalogTimePicker />] : []),
        ]}
      />
    </div>
  );
});

export default DateInput;
