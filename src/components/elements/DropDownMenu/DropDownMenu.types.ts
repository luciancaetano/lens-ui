import React from 'react';
import { IPropsWithClassName, IPropsWithId, ITestableProps } from '../../../types';

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

export interface IDropDownMenuProps extends IPropsWithClassName, IPropsWithId, ITestableProps{
  items: IDropdownItemType[];
  onItemClick?: (id: string) => void;
  offset?: [number, number];
  activeId?: string;
}
