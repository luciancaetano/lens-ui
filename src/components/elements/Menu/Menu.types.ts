import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IMenuItem<T = any> {
  intent?: IntentType | null;
  isHeading?: boolean;
  content: React.ReactNode | React.ReactNode[];
  payload?: T;
  className?: string;
}

export type MenuItemRendererType<T = any> = (item: IMenuItem<T>, index: number) => React.ReactNode | React.ReactNode[];

export interface IMenuProps<TPayload = any> extends ITestableProps {
  className?: string;
  items: IMenuItem<TPayload>[];
  activeIndex?: number | null;
  renderer?: MenuItemRendererType<TPayload>;
  onItemClick?: (item: IMenuItem<TPayload>, e: React.MouseEvent<HTMLDivElement>) => void;
}
