import clsx from 'clsx';
import map from 'lodash/map';
import get from 'lodash/get';
import React, { useCallback, useMemo } from 'react';
import ReactSelect from 'react-select';
import { randomID } from '../../../utils';
import './Select.scss';
import { ISelectOption, ISelectProps } from './Select.types';
import { useTheme } from '../../../hooks';

/**
 * The Select component are used for collecting user provided information from a list of options.
 */
const Select: React.FC<ISelectProps> = React.forwardRef(({
  className, testingID, id = randomID('lens-ui-select-'), onChange, options, value, defaultValue, name, tabIndex, onBlur, disabled,
  isLoading, isRtl, isSearchable = false, isMulti, formatGroupLabel, formatOptionLabel, placeholder = '', menuPortalTarget = document.body,
  autoFocus, isError, size, ...props
}, ref) => {
  const [theme, { defaultSize }] = useTheme();

  const handleChange = useCallback((option: any) => {
    if (onChange) {
      onChange(Array.isArray(option) ? map(option, (opt) => opt.value) : option.value);
    }
  }, [onChange]);

  const defaultValueItem = useMemo(() => {
    if (isMulti && Array.isArray(defaultValue)) {
      return defaultValue !== undefined
        ? defaultValue.map((option) => {
          const index = (options as ISelectOption[]).findIndex((opt) => opt.value === option);

          return get(options, index, undefined);
        })
        : undefined;
    }
    return defaultValue !== undefined
      ? (options as any[]).find((i) => i.value === defaultValue)
      : undefined;
  }, [defaultValue, isMulti, options]);

  const valueItem = useMemo(() => {
    if (isMulti && Array.isArray(value)) {
      return value !== undefined
        ? value.map((option) => {
          const index = (options as ISelectOption[]).findIndex((opt) => opt.value === option);

          return get(options, index, undefined);
        })
        : undefined;
    }
    return value !== undefined
      ? (options as any[]).find((i) => i.value === value)
      : undefined;
  }, [value, isMulti, options]);

  const handleFormatOptionLabel = useMemo(() => {
    if (formatOptionLabel === undefined) return undefined;
    return (option: ISelectOption, { selectValue }: any) => formatOptionLabel(option, selectValue);
  }, [formatOptionLabel]);

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="select"
      className={clsx('lens-ui-select-input', theme, className)}
    >
      <ReactSelect
        id={id}
        placeholder={placeholder}
        className={clsx(isError && 'select-input-error', `lens-ui-select-input--size-${size || defaultSize}`)}
        classNamePrefix="lens-ui-select-input"
        isMulti={isMulti}
        isLoading={isLoading}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={name}
        options={options as any}
        value={valueItem}
        defaultValue={defaultValueItem}
        tabIndex={tabIndex}
        onBlur={onBlur}
        isDisabled={disabled}
        formatGroupLabel={formatGroupLabel as any}
        formatOptionLabel={handleFormatOptionLabel}
        onChange={handleChange}
        autoFocus={autoFocus}
        ref={ref as any}
        menuPortalTarget={menuPortalTarget}
      />
    </div>
  );
});

export default Select;
