import React, { ReactNode } from 'react';
import { ITestableProps, SizeType } from '../../../types';

export type SelectOptionValueType = string | number | boolean;

export interface ISelectOption {
  label: ReactNode;
  value: SelectOptionValueType;
  isFixed?: boolean;
  isDisabled?: boolean;
}

export interface ISelectGroupedOption {
  readonly label: string;
  readonly options: ISelectOption[] | ISelectGroupedOption[];
}

export interface ISelectProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'onBlur' | 'value' | 'defaultValue'> {
  options: ISelectOption[] | ISelectGroupedOption[];
  value?: SelectOptionValueType | SelectOptionValueType[];
  name?: string;
  defaultValue?: SelectOptionValueType | SelectOptionValueType[];
  onChange?: (value: SelectOptionValueType | SelectOptionValueType[]) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  isRtl?: boolean;
  isMulti?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
  placeholder?: string;
  formatGroupLabel?: (group: ISelectGroupedOption) => ReactNode;
  formatOptionLabel?: (option: ISelectOption, selectValue: SelectOptionValueType | SelectOptionValueType[]) => ReactNode;
  menuPortalTarget?: HTMLElement;
  size?: SizeType;
}
