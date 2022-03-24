import React from 'react';
import {
  IntentType, ITestableProps,
} from '../../../types';

export interface ICalloutProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: React.ReactNode;
  intent?: IntentType;
  title?: React.ReactNode;
}
