import clsx from 'clsx';
import React, { useCallback, useMemo, useState } from 'react';
import RMDatePicker, { DateObject, Calendar } from 'react-multi-date-picker';
import get from 'lodash/get';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import opacity from 'react-element-popper/animations/opacity';
import styles from './DatePicker.module.scss';
import { IDatePickerPropsType, DatePickerType } from './DatePicker.types';
import { getPortalContainer } from '../../../utils';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import TextInput from '../TextInput/TextInput';
import MaskedInput from '../MaskedInput/MaskedInput';

function init(value, defaultValue, type: DatePickerType) {
  if (defaultValue === undefined) {
    if (type === 'month') {
      const dt = new Date();
      dt.setMonth(value);
      return dt;
    } if (type === 'year') {
      const dt = new Date();
      dt.setFullYear(value);
      return dt;
    }

    return value;
  }
  if (type === 'month') {
    const dt = new Date();
    dt.setMonth(defaultValue);
    return dt;
  } if (type === 'year') {
    const dt = new Date();
    dt.setFullYear(defaultValue);
    return dt;
  }

  return defaultValue;
}

const DatePicker: React.FC<IDatePickerPropsType> = ({
  className, children, disabled, isError, onPickerClose, onPickerOpen, readOnly, name,
  onChange, required, testingID, value, type, defaultValue, isMobile, locale, ...props
}) => {
  const renderType = useMemo(() => type || 'date', [type]);
  const [date, setDate] = useState(init(defaultValue, value, renderType));

  const format = useMemo(() => get(props, 'displayFormat', undefined), [props]);
  const hideWeekDays = useMemo(() => get(props, 'hideWeekDays', false), [props]);
  const displayWeekNumbers = useMemo(() => get(props, 'displayWeekNumbers', false), [props]);
  const portalTarget = useMemo(() => getPortalContainer('lens-ui-date-picker__portal'), []);

  const handleDateChange = useCallback((dt: DateObject | DateObject[]) => {
    setDate(dt);

    const value: any = Array.isArray(dt) ? dt.map((d) => d?.toDate()) : dt?.toDate();

    if (type === 'year' && onChange) {
      onChange((value as Date)?.getFullYear() || null);
    } else if (type === 'month' && onChange) {
      onChange(value !== null && value !== undefined && typeof value.getMonth === 'function' ? (value as Date).getMonth() + 1 : null);
    } else if (onChange) {
      onChange(value || null);
    }
  }, [onChange, type]);

  const handleRender = useCallback((strDate: string, openCalendar: () => void, handleValueChange: React.ChangeEventHandler<HTMLElement>) => {
    if (children) {
      return children(strDate, openCalendar, handleValueChange);
    }

    if (renderType === 'date') {
      return (
        <MaskedInput
          mask={format?.replace(/[a-zA-Z]/g, '9') || '9999/99/99'}
          value={strDate}
          onClick={openCalendar}
          onChange={(v: string, e: React.ChangeEvent<HTMLElement>) => {
            handleValueChange(e);
          }}
        />
      );
    }

    if (renderType === 'month') {
      return (
        <TextInput
          type="number"
          maxLength={2}
          value={strDate}
          max={12}
          min={1}
          onClick={openCalendar}
          onChange={(v: string, e: React.ChangeEvent<HTMLElement>) => {
            handleValueChange(e);
          }}
        />
      );
    }

    if (renderType === 'year') {
      return (
        <TextInput
          type="number"
          max={9999}
          min={1901}
          value={strDate}
          onClick={openCalendar}
          onChange={(v: string, e: React.ChangeEvent<HTMLElement>) => {
            handleValueChange(e);
          }}
        />
      );
    }

    return (
      <TextInput
        value={strDate}
        onClick={openCalendar}
        onChange={(v: string, e: React.ChangeEvent<HTMLElement>) => {
          handleValueChange(e);
        }}
      />
    );
  }, [children, renderType]);

  const Component: typeof Calendar & typeof RMDatePicker = useMemo(() => get(props, 'inline', false) ? Calendar : RMDatePicker, [props]);

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="date-picker"
      className={clsx(styles.container, isError && styles.error, className)}
    >
      {(renderType === 'date') && (
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
          render={handleRender}
          hideWeekDays={hideWeekDays}
          displayWeekNumbers={displayWeekNumbers}
          minDate={get(props, 'minDate', undefined)}
        />
      )}
      {(renderType === 'range') && (
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
          render={handleRender}
          hideWeekDays={hideWeekDays}
          displayWeekNumbers={displayWeekNumbers}
          minDate={get(props, 'minDate', undefined)}
          maxDate={get(props, 'maxDate', undefined)}
        />
      )}
      {(renderType === 'month') && (
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
          render={handleRender}
        />
      )}
      {(renderType === 'year') && (
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
          render={handleRender}
        />
      )}
      {(renderType === 'multiple') && (
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
          render={handleRender}
          plugins={[<DatePanel />]}
          hideWeekDays={hideWeekDays}
          displayWeekNumbers={displayWeekNumbers}
          minDate={get(props, 'minDate', undefined)}
          maxDate={get(props, 'maxDate', undefined)}
        />
      )}
      {(renderType === 'week') && (
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
          minDate={get(props, 'minDate', undefined)}
          maxDate={get(props, 'maxDate', undefined)}
          numberOfMonths={get(props, 'numberOfMonths', 2)}
          render={handleRender}
        />
      )}
    </div>
  );
};

export default DatePicker;
