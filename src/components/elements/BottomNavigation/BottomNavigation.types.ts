import React from 'react';
import { ITestableProps } from '../../../types';

export interface IBottomNavigationProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}
