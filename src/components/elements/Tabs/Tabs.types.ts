import React from 'react';
import { ITestableProps } from '../../../types';

export interface ITabsItem {
  title: React.ReactNode;
  id: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export interface ITabsProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'> {
  vertical?: boolean;
  tabs: ITabsItem[];
  initialActiveTab?: string | null;
  activeTab?: string | null;
  onChange?: (id: string, e: React.MouseEvent<HTMLDivElement>) => void;
  children?: (activeTab: ITabsItem | null) => React.ReactNode;
}
