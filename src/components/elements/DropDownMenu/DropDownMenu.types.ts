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

export type DropDownMenuPlacementType = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export interface IDropDownMenuProps<TPayload = any, TId = string> extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement>{
  items: IDropdownItemType<TPayload, TId>[];
  onItemClick?: (item: IDropdownClickableItemType<TPayload, TId>) => void;
  offsetX?: number;
  offsetY?: number;
  activeId?: TId;
  dropDownClassName?: string;
  disableChevron?: boolean;
  placement?: DropDownMenuPlacementType;
}
