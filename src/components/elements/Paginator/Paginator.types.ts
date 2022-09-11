import React from 'react';
import { IntentType, ITestableProps, SizeType } from '../../../types';

export interface IPaginatorItemRenderProps {
  onClick: () => void;
  page: number;
  active: boolean;
  disabled: boolean;
}

export interface IPaginatorProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLUListElement>, 'color' | 'onChange' | 'children'> {
  children?: React.ReactNode;
  count: number;
  pageNeighbours?: number;
  intent?: IntentType;
  size?: SizeType;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  showPreviousButton?: boolean;
  showNextButton?: boolean;
  itemRender?: (props: IPaginatorItemRenderProps) => React.ReactNode;
  nextIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  firstIcon?: React.ReactNode;
  lastIcon?: React.ReactNode;
  onChange?: (page: number) => void;
  currentPage?: number;
  defaultCurrentPage?: number;
  disabled?: boolean;
  outlined?: boolean;
  showLastItem?: boolean;
}
