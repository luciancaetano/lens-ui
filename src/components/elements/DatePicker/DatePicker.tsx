import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { Moment } from 'moment';
import { SingleDatePicker } from 'react-dates';
import styles from './DatePicker.module.scss';
import { IDatePickerPropsType } from './DatePicker.types';
import { init } from './utils';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker: React.FC<IDatePickerPropsType> = ({
  className, children, disabled, isError, onCalendarClose, onCalendarOpen, name,
  onChange, required, tabIndex, testingID, value, type, defaultValue, ...props
}) => {
  const [date, setDate] = useState(init(value, defaultValue));
  const [focused, setFocused] = useState(false);

  const handleDateChange = useCallback((dt: Moment | Moment[]) => {
    setDate(dt);
    if (onChange) {
      if (type === 'date' && !Array.isArray(dt)) {
        onChange(dt.toISOString());
      }
    }
  }, [onChange, type]);

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="date-picker"
      className={clsx(styles.container, className)}
    >
      {type === 'date' && !Array.isArray(date) && (
        <SingleDatePicker
          date={date}
          focused={focused}
          onDateChange={handleDateChange}
          onFocusChange={({ focused }) => setFocused(focused)}
          id={`${name || props.id}-date-picker`}
        />
      )}
    </div>
  );
};

export default DatePicker;
