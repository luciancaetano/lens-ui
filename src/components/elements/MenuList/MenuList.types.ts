import React from 'react';
import { ITestableProps } from '../../../types';
import { IListItem } from '../List/List.types';

export type IMenuListItemType<T = any> = IListItem<T> & { isActive?: boolean };

export type MenuListItemRendererType = (item: IMenuListItemType, index: number) => React.ReactNode;

export interface IMenuListProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  items: IMenuListItemType[];
  renderer?: MenuListItemRendererType;
  onItemClick?: (item: IMenuListItemType, e: React.MouseEvent<HTMLDivElement>) => void;
}
