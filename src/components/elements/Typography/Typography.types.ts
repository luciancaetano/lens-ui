import React from 'react';
import { ITestableProps } from '../../../types';

export interface ITypographyProps extends ITestableProps, Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'overline' | 'caption';
  noWrap?: boolean;
  children: React.ReactNode;
}
