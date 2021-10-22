import clsx from 'clsx';
import map from 'lodash/map';
import get from 'lodash/get';
import React, { useCallback, useMemo } from 'react';
import ReactSelect from 'react-select';
import { randomId } from '../../../utils';
import { SelectContainer } from './Select.styles';
import { ISelectOption, ISelectProps } from './Select.types';

const Select: React.FC<ISelectProps> = React.forwardRef(({
  className, testingID, id = randomId('lens-ui-select-'), onChange, options, value, defaultValue, name, tabIndex, onBlur, disabled,
  isClearable = true, isLoading, isRtl, isSearchable = false, isMulti, formatGroupLabel, formatOptionLabel, placeholder = '',
  autoFocus, isError,
}, ref) => {
  const handleChange = useCallback((option: any) => {
    if (onChange) {
      onChange(Array.isArray(option) ? map(option, (opt) => opt.value) : option.value);
    }
  }, [onChange]);

  const defaultValueItem = useMemo(() => {
    if (isMulti && Array.isArray(defaultValue)) {
      return defaultValue !== undefined
        ? defaultValue.map((option) => {
          const index = options.findIndex((opt) => opt.value === option);

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
          const index = options.findIndex((opt) => opt.value === option);

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
    return (option: ISelectOption, { selectValue }) => formatOptionLabel(option, selectValue);
  }, [formatOptionLabel]);

  return (
    <SelectContainer
      id={id}
      data-testid={testingID}
      className={clsx('lens-ui-select', className)}
    >
      <ReactSelect
        placeholder={placeholder}
        className={isError && 'pinput-error'}
        classNamePrefix="lens-ui-select-input"
        isMulti={isMulti}
        isClearable={isClearable}
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
        formatGroupLabel={formatGroupLabel}
        formatOptionLabel={handleFormatOptionLabel}
        onChange={handleChange}
        autoFocus={autoFocus}
        ref={ref as any}
      />
    </SelectContainer>
  );
});

export default Select;
