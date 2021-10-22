import React, { MouseEventHandler } from 'react';
import { IPropsWithClassName, IPropsWithId, ITestableProps } from '../../../types';

export interface IBreadcrumbLink {
  title: React.ReactNode;
  url?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  testingID?: string;
}

export interface IBreadcrumbsProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  history: IBreadcrumbLink[];
}
