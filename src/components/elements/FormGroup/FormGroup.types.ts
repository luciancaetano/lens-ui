import React from 'react';
import {
  IntentType, IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface IFormGroupProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  label?: React.ReactNode;
  contentClassName?: string;
  inline?: boolean;
  helperText?: React.ReactNode;
  helperTextIntent?: IntentType;
  labelFor?: string;
  required?: boolean;
  disabled?: boolean;
}
