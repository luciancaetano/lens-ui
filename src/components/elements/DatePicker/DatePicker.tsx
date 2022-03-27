import clsx from 'clsx';
import React, { useCallback, useMemo, useState } from 'react';
import RMDatePicker, { DateObject } from 'react-multi-date-picker';
import { get } from 'lodash';
import styles from './DatePicker.module.scss';
import { IDatePickerPropsType } from './DatePicker.types';
import { CLASSES } from '../../../css-classes';
import { init } from './utils';

const DatePicker: React.FC<IDatePickerPropsType> = ({
  className, children, disabled, isError, onPickerClose, onPickerOpen, readOnly, name,
  onChange, required, testingID, value, type, defaultValue, withPortal, ...props
}) => {
  const [date, setDate] = useState(init(value, defaultValue, type));

  const format = useMemo(() => get(props, 'displayFormat', undefined), [props]);

  const handleDateChange = useCallback((dt: DateObject | DateObject[]) => {
    setDate(dt);

    if (onChange) {
      if (type === 'date' && !Array.isArray(dt)) {
        onChange(dt.toDate());
      } else if (type === 'range') {
        onChange([dt[0].toDate(), dt[1].toDate()]);
      } else if (type === 'month' && !Array.isArray(dt)) {
        onChange(dt.month.number);
      } else if (type === 'year' && !Array.isArray(dt)) {
        onChange(dt.year);
      } else if (type === 'time' && !Array.isArray(dt)) {
        onChange(dt.format('HH:mm:ss'));
      }
    }
  }, [onChange, type]);

  const handleRender = useCallback((strDate: string, openCalendar: Function, handleValueChange: React.ChangeEventHandler<HTMLElement>) => {
    if (children) {
      children(strDate, openCalendar, handleValueChange);
    }
  }, [children]);

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="date-picker"
      className={clsx(styles.container, isError && styles.error, className)}
    >
      {(type === 'date') && !Array.isArray(date) && (
        <RMDatePicker
          value={date}
          onChange={handleDateChange}
          required={required}
          portal={withPortal}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          disabled={disabled}
          format={format}
          render={children && handleRender}
        />
      )}
      {(type === 'range') && Array.isArray(date) && (
        <RMDatePicker
          value={date}
          onChange={handleDateChange}
          required={required}
          portal={withPortal}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          format={format}
          disabled={disabled}
          range
          numberOfMonths={get(props, 'numberOfMonths', 2)}
          render={children && handleRender}
        />
      )}
      {(type === 'month') && !Array.isArray(date) && (
        <RMDatePicker
          containerClassName={styles.monthPicker}
          value={date}
          onChange={handleDateChange}
          required={required}
          portal={withPortal}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          format="MM"
          disabled={disabled}
          onlyMonthPicker
          disableYearPicker
          render={children && handleRender}
        />
      )}
      {(type === 'year') && !Array.isArray(date) && (
        <RMDatePicker
          value={date}
          onChange={handleDateChange}
          required={required}
          portal={withPortal}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          format="MM"
          disabled={disabled}
          onlyYearPicker
          render={children && handleRender}
        />
      )}
      {!type && (
        <div className={CLASSES.IntentDanger}>
          Type is not defined
        </div>
      )}
      {type === 'range' && !Array.isArray(date) && (
        <div className={CLASSES.IntentDanger}>
          Value is not an array in range type
        </div>
      )}
      {type === 'month' && Array.isArray(date) && (
        <div className={CLASSES.IntentDanger}>
          Value is an array in month type
        </div>
      )}
      {type === 'year' && Array.isArray(date) && (
        <div className={CLASSES.IntentDanger}>
          Value is an array in year type
        </div>
      )}
    </div>
  );
};

export default DatePicker;
