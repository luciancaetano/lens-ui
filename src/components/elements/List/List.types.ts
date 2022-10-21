import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IListItemProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'prefix' | 'title'> {
  intent?: IntentType;
  active?: boolean;
  heading?: boolean;
  divider?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  cursor?: string;
  prefixMargin?: number | string;
  suffixMargin?: number | string;
}

export interface IListProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  intent?: IntentType;
  prefixMinWidth?: string | number;
  suffixMinWidth?: string | number;
  border?: boolean;
}

export interface IListGroupProps extends IListItemProps {
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpand?: (expanded: boolean) => void;
  expandIcon?: (expanded: boolean) => React.ReactNode;
  title?: React.ReactNode;
}
