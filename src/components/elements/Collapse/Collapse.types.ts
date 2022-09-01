import React from 'react';
import { ITestableProps } from '../../../types';

export interface ICollapseProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: React.ReactNode;
  activeId?: string[];
  defaultActiveId?: string[];
  onChange?: (id: string[]) => void;
  expandIcon?: (isActive: boolean) => React.ReactNode;
  singleExpand?: boolean;
}

export interface ICollapsePanelProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLDivElement>{
  header: React.ReactNode;
  id: string;
}
