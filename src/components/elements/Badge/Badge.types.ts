import React from 'react';
import {
  ITestableProps, IntentType,
} from '../../../types';

export interface IBadgeProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  intent?: IntentType;
  type?: 'solid' | 'subtle' | 'outlined';
}
