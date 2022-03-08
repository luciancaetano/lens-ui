import React from 'react';
import { ITestableProps } from '../../../types';

export type IDropdownClickableItemType<TPayload = any> = {
  label: React.ReactNode;
  id: string;
  className?: string;
  payload?: TPayload;
};

export type IDropdownItemDividerType = {
  label?: React.ReactNode;
  className?: string;
  divider: true;
};

export type IDropdownItemType<TPayload = any> = IDropdownClickableItemType<TPayload> | IDropdownItemDividerType;

export interface IDropDownMenuProps<TPayload = any> extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement>{
  items: IDropdownItemType<TPayload>[];
  onItemClick?: (item: IDropdownClickableItemType<TPayload>) => void;
  offset?: [number, number];
  activeId?: string;
}
