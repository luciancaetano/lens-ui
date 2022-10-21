import React from 'react';
import { ITestableProps } from '../../../types';

export interface IBaseTabProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  description: React.ReactNode;
  tabId: string;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  tabRender?: (props: IBaseTabProps) => React.ReactNode;
}
export interface ITabsTabProps extends ITestableProps, IBaseTabProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'title'>{

}

export interface ITabsProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'> {
  vertical?: boolean;
  initialActiveTab?: string | null;
  activeTab?: string | null;
  onChange?: (id: string, e: React.MouseEvent<HTMLDivElement>) => void;
  tabBarExtraContentLeft?: React.ReactNode;
  tabBarExtraContentRight?: React.ReactNode;
  onTabClose?: (tabId: string) => void;
}
