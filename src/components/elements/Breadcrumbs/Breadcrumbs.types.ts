import React from 'react';
import { ITestableProps } from '../../../types';

export interface IBreadcrumbLink {
  title: React.ReactNode | React.ReactNode[];
  url?: string;
  testingID?: string;
}

export interface IBreadcrumbsProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  history: IBreadcrumbLink[];
  onItemClick?: (link: IBreadcrumbLink, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
