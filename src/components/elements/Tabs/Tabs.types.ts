import React from 'react';
import { ITestableProps } from '../../../types';

export interface ITabsItem {
  title: React.ReactNode | React.ReactNode[];
  id: string;
  className?: string;
}

export interface ITabsProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'children'> {
  vertical?: boolean;
  tabs: ITabsItem[];
  initialActiveTab?: string | null;
  activeTab?: string | null;
  onChange?: (id: string, e: React.MouseEvent<HTMLDivElement>) => void;
  children?: (activeTab: ITabsItem | null | undefined) => React.ReactNode | React.ReactNode[];
}
