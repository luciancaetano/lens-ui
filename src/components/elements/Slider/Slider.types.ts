import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface ISliderProps<ValueType = number | number[]> extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'children' | 'value' | 'defaultValue'> {
  children?: React.ReactNode;
  min: number;
  max: number;
  step?: number;
  marks?: Record<string | number, React.ReactNode[]>;
  vertical?: boolean;
  tooltip?: (value: number) => React.ReactNode;
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?: (value: ValueType) => void;
  range?: number;
  reverse?: boolean;
  dots?: boolean;
  inputDebounceWait?: number;
  allowCross?: boolean;
  intent?: IntentType;
}
