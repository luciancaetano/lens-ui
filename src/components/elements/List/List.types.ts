import React from 'react';
import {
  IntentType,
  IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface IListItem<T = any> {
  isHeading?: boolean;
  content: React.ReactNode;
  className?: string;
  data?: T;
}

export type ListItemRendererType = (item: IListItem, index: number) => React.ReactNode;

export interface IListProps extends IPropsWithClassName, ITestableProps, IPropsWithId {
  intent?: IntentType;
  activeIndex?: number;
  items: IListItem[];
  renderer?: ListItemRendererType;
  onItemClick?: (item: IListItem, e: React.MouseEvent<HTMLDivElement>) => void;
}
