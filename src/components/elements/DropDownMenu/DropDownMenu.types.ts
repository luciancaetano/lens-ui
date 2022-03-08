import React from 'react';
import { ITestableProps } from '../../../types';

export type IDropdownClickableItemType<TPayload = any, TId = string> = {
  label: React.ReactNode;
  id: TId;
  className?: string;
  payload?: TPayload;
};

export type IDropdownItemDividerType = {
  label?: React.ReactNode;
  className?: string;
  divider: true;
};

export type IDropdownItemType<TPayload = any, TId = string> = IDropdownClickableItemType<TPayload, TId> | IDropdownItemDividerType;

export interface IDropDownMenuProps<TPayload = any, TId = string> extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement>{
  items: IDropdownItemType<TPayload, TId>[];
  onItemClick?: (item: IDropdownClickableItemType<TPayload, TId>) => void;
  offset?: [number, number];
  activeId?: string;
}
