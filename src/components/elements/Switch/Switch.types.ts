import React, { ReactNode } from 'react';
import { ITestableProps, SizeType } from '../../../types';

export interface ISwitchProps extends ITestableProps, Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'onBlur' | 'value' | 'defaultValue'> {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  name?: string;
  size?: SizeType;
}
