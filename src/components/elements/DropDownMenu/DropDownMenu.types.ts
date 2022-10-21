import React from 'react';
import { ITestableProps } from '../../../types';

export type DropDownMenuPlacementType = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export interface IDropDownMenuProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement>{
  offsetX?: number;
  offsetY?: number;
  dropDownClassName?: string;
  chevron?: boolean;
  placement?: DropDownMenuPlacementType;
  contentRender: (close: Function) => React.ReactNode;
  closeOnClick?: boolean;
}
