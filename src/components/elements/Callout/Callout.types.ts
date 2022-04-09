import React from 'react';
import {
  IntentType, ITestableProps,
} from '../../../types';

export interface ICalloutProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: JSX.Element | JSX.Element[];
  intent?: IntentType;
  title?: JSX.Element | JSX.Element[];
}
