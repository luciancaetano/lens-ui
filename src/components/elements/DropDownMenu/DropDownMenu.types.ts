import React from 'react';
import { ITestableProps } from '../../../types';

export type IDropdownClickableItemType<TPayload> = {
  label: React.ReactNode;
  id: string;
  className?: string;
  payload: TPayload;
};

export type IDropdownItemDividerType = {
  label?: React.ReactNode;
  className?: string;
  divider: true;
};

export type IDropdownItemType<TPayload> = IDropdownClickableItemType<TPayload> | IDropdownItemDividerType;

export interface IDropDownMenuProps<TPayload> extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement>{
  items: IDropdownItemType<TPayload>[];
  onItemClick?: (item: IDropdownClickableItemType<TPayload>) => void;
  offset?: [number, number];
  activeId?: string;
}
