import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IListItemProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLDivElement> {
  intent?: IntentType;
  isActive?: boolean;
  isHeading?: boolean;
}

export interface IListProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  intent?: IntentType;
}
