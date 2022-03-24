import React from 'react';
import {
  IntentType, ITestableProps,
} from '../../../types';

export interface ICalloutProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  intent?: IntentType;
  title?: React.ReactNode;
}
