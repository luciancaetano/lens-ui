import React from 'react';
import { ITestableProps } from '../../../types';

export type IDropdownItemBasicType = {
  label: React.ReactNode;
  id: string;
  className?: string;
};

export type IDropdownItemDividerType = {
  label?: React.ReactNode;
  className?: string;
  divider: true;
};

export type IDropdownItemType = IDropdownItemBasicType | IDropdownItemDividerType;

export interface IDropDownMenuProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement>{
  items: IDropdownItemType[];
  onItemClick?: (item: IDropdownItemBasicType) => void;
  offset?: [number, number];
  activeId?: string;
}
