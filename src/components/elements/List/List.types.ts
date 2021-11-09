import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IListItem<T = any> {
  isHeading?: boolean;
  content: React.ReactNode;
  className?: string;
  data?: T;
  elementProps?: React.HtmlHTMLAttributes<HTMLElement>;
}

export type ListItemRendererType = (item: IListItem, index: number) => React.ReactNode;

export interface IListProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  intent?: IntentType;
  activeIndex?: number;
  items: IListItem[];
  renderer?: ListItemRendererType;
  onItemClick?: (item: IListItem, e: React.MouseEvent<HTMLDivElement>) => void;
}
