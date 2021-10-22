import React, { ReactNode } from 'react';
import {
  IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface ICheckBoxProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  name?: string;
}
