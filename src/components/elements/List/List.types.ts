import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IListItemProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'prefix'> {
  intent?: IntentType;
  isActive?: boolean;
  isHeading?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export interface IListProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  intent?: IntentType;
}
