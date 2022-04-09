import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IMenuListItem<T = any> {
  intent?: IntentType | null;
  isHeading?: boolean;
  content: React.ReactNode | React.ReactNode[];
  payload?: T;
  className?: string;
}

export type MenuListItemRendererType<T = any> = (item: IMenuListItem<T>, index: number) => React.ReactNode | React.ReactNode[];

export interface IMenuListProps<TPayload = any> extends ITestableProps {
  items: IMenuListItem<TPayload>[];
  activeIndex?: number | null;
  renderer?: MenuListItemRendererType<TPayload>;
  onItemClick?: (item: IMenuListItem<TPayload>, e: React.MouseEvent<HTMLDivElement>) => void;
}
