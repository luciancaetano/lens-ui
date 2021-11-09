import React from 'react';
import { ITestableProps } from '../../../../types';

export interface ILayoutContentProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  layout?: 'horizontal' | 'vertical';
}
