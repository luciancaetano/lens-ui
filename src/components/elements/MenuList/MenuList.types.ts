import React from 'react';
import { IPropsWithClassName, IPropsWithId, ITestableProps } from '../../../types';
import { IListItem } from '../List/List.types';

export type IMenuListItemType<T = any> = IListItem<T> & { isActive?: boolean };

export type MenuListItemRendererType = (item: IMenuListItemType, index: number) => React.ReactNode;

export interface IMenuListProps extends IPropsWithClassName, ITestableProps, IPropsWithId {
  items: IMenuListItemType[];
  renderer?: MenuListItemRendererType;
  onItemClick?: (item: IMenuListItemType, e: React.MouseEvent<HTMLDivElement>) => void;
}
