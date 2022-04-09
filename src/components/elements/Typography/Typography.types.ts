import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface ITypographyProps extends ITestableProps, Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' |'body1' | 'body2' | 'overline' | 'button' |'caption' ;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  noWrap?: boolean;
  children: React.ReactNode;
  intent?: IntentType | null;
  gutterBottom?: boolean;
}
