import React from 'react';
import { ITestableProps } from '../../../../types';

export interface IBottomNavigationProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'> {
  children?: React.ReactNode;
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  keepLabel?: boolean;
}
