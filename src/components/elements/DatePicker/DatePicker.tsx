import clsx from 'clsx';
import React, { useCallback, useMemo, useState } from 'react';
import RMDatePicker, { DateObject, Calendar } from 'react-multi-date-picker';
import get from 'lodash/get';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import opacity from 'react-element-popper/animations/opacity';
import styles from './DatePicker.module.scss';
import { IDatePickerPropsType } from './DatePicker.types';
import { init } from './utils';
import { getPortalContainer } from '../../../utils';
import 'react-multi-date-picker/styles/layouts/mobile.css';

const DatePicker: React.FC<IDatePickerPropsType> = ({
  className, children, disabled, isError, onPickerClose, onPickerOpen, readOnly, name,
  onChange, required, testingID, value, type, defaultValue, isMobile, locale, ...props
}) => {
  const [date, setDate] = useState(init(value, defaultValue, type));

  const format = useMemo(() => get(props, 'displayFormat', undefined), [props]);

  const renderType = useMemo(() => type || 'date', [type]);
  const hideWeekDays = useMemo(() => get(props, 'hideWeekDays', false), [props]);
  const displayWeekNumbers = useMemo(() => get(props, 'displayWeekNumbers', false), [props]);
  const portalTarget = useMemo(() => getPortalContainer('lens-ui-date-picker__portal'), []);

  const handleDateChange = useCallback((dt: DateObject | DateObject[]) => {
    setDate(dt);

    if (onChange) {
      if (type === 'date' && !Array.isArray(dt)) {
        onChange(dt ? dt.toDate() : undefined);
      } else if (type === 'range' && Array.isArray(dt)) {
        onChange(dt && dt.length === 0 ? [] : dt.map((d) => d.toDate()));
      } else if (type === 'month' && !Array.isArray(dt)) {
        onChange(dt ? dt.month.number : undefined);
      } else if (type === 'year' && !Array.isArray(dt)) {
        onChange(dt ? dt.year : undefined);
      } else if (type === 'multiple' && Array.isArray(dt)) {
        onChange(dt && dt.length === 0 ? [] : dt.map((d) => d.toDate()));
      }
    }
  }, [onChange, type]);

  const handleRender = useCallback((strDate: string, openCalendar: Function, handleValueChange: React.ChangeEventHandler<HTMLElement>) => {
    if (children) {
      children(strDate, openCalendar, handleValueChange);
    }
  }, [children]);

  const Component: typeof Calendar & typeof RMDatePicker = useMemo(() => get(props, 'inline', false) ? Calendar : RMDatePicker, [props]);

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="date-picker"
      className={clsx(styles.container, isError && styles.error, className)}
    >
      {(renderType === 'date') && !Array.isArray(date) && (
        <Component
          locale={locale}
          className={clsx({ 'rmdp-mobile': isMobile })}
          value={date}
          onChange={handleDateChange}
          required={required}
          portal
          portalTarget={portalTarget}
          animations={[opacity()]}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          disabled={disabled}
          format={format}
          render={children && handleRender}
          hideWeekDays={hideWeekDays}
          displayWeekNumbers={displayWeekNumbers}
        />
      )}
      {(renderType === 'range') && Array.isArray(date) && (
        <Component
          locale={locale}
          className={clsx({ 'rmdp-mobile': isMobile })}
          value={date}
          onChange={handleDateChange}
          required={required}
          portal
          portalTarget={portalTarget}
          animations={[opacity()]}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          format={format}
          disabled={disabled}
          range
          numberOfMonths={get(props, 'numberOfMonths', 2)}
          render={children && handleRender}
          hideWeekDays={hideWeekDays}
          displayWeekNumbers={displayWeekNumbers}
        />
      )}
      {(renderType === 'month') && !Array.isArray(date) && (
        <Component
          locale={locale}
          className={clsx({ 'rmdp-mobile': isMobile }, styles.monthPicker)}
          containerClassName={styles.monthPicker}
          value={date}
          onChange={handleDateChange}
          required={required}
          portal
          portalTarget={portalTarget}
          animations={[opacity()]}
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
      {(renderType === 'year') && !Array.isArray(date) && (
        <Component
          locale={locale}
          className={clsx({ 'rmdp-mobile': isMobile })}
          value={date}
          onChange={handleDateChange}
          required={required}
          portal
          portalTarget={portalTarget}
          animations={[opacity()]}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          format="YYYY"
          disabled={disabled}
          onlyYearPicker
          render={children && handleRender}
        />
      )}
      {(renderType === 'multiple') && Array.isArray(date) && (
        <Component
          locale={locale}
          className={clsx({ 'rmdp-mobile': isMobile })}
          value={date}
          onChange={handleDateChange}
          required={required}
          portal
          portalTarget={portalTarget}
          animations={[opacity()]}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          format={format}
          disabled={disabled}
          multiple
          numberOfMonths={get(props, 'numberOfMonths', 2)}
          render={children && handleRender}
          plugins={[<DatePanel />]}
          hideWeekDays={hideWeekDays}
          displayWeekNumbers={displayWeekNumbers}
        />
      )}
      {(renderType === 'week') && Array.isArray(date) && (
        <Component
          locale={locale}
          className={clsx({ 'rmdp-mobile': isMobile })}
          value={date}
          onChange={handleDateChange}
          required={required}
          portal
          portalTarget={portalTarget}
          animations={[opacity()]}
          onOpen={onPickerOpen}
          onClose={onPickerClose}
          readOnly={readOnly}
          name={name}
          format={format}
          disabled={disabled}
          weekPicker
          hideWeekDays={hideWeekDays}
          displayWeekNumbers={displayWeekNumbers}
          numberOfMonths={get(props, 'numberOfMonths', 2)}
          render={children && handleRender}
        />
      )}
    </div>
  );
};

export default DatePicker;
