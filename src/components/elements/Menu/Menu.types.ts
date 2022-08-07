import React from 'react';
import { ITestableProps } from '../../../types';
import { IListItemProps, IListProps } from '../List/List.types';

export interface IMenuItemProps extends React.PropsWithChildren<IListItemProps> {
  className?: string;
}
export interface IMenuProps extends ITestableProps, React.PropsWithChildren<IListProps> {
  className?: string;
  shadow?: boolean;
}
