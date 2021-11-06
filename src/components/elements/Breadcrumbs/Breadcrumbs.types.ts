import React from 'react';
import { IPropsWithClassName, IPropsWithId, ITestableProps } from '../../../types';

export interface IBreadcrumbLink {
  title: React.ReactNode;
  url?: string;
  testingID?: string;
}

export interface IBreadcrumbsProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  history: IBreadcrumbLink[];
  onItemClick?: (link: IBreadcrumbLink, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
