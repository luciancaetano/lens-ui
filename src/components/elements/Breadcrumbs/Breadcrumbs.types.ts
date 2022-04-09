import React from 'react';
import { ITestableProps } from '../../../types';

export interface IBreadcrumbLink {
  title: JSX.Element | JSX.Element[];
  url?: string;
  testingID?: string;
}

export interface IBreadcrumbsProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  history: IBreadcrumbLink[];
  onItemClick?: (link: IBreadcrumbLink, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
