import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IMenuListItem<T = any> {
  intent?: IntentType | null;
  isHeading?: boolean;
  content: JSX.Element | JSX.Element[];
  payload?: T;
  className?: string;
}

export type MenuListItemRendererType<T = any> = (item: IMenuListItem<T>, index: number) => JSX.Element | JSX.Element[];

export interface IMenuListProps<TPayload = any> extends ITestableProps {
  items: IMenuListItem<TPayload>[];
  activeIndex?: number | null;
  renderer?: MenuListItemRendererType<TPayload>;
  onItemClick?: (item: IMenuListItem<TPayload>, e: React.MouseEvent<HTMLDivElement>) => void;
}
