import React from 'react';
import {
  IntentType, ITestableProps,
} from '../../../types';

export interface ILoaderProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  type?: 'eclipse' | 'spinner' | 'oval';
  intent?: IntentType;
  size?: number;
}
