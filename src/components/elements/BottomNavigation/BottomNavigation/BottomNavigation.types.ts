import React from 'react';
import { ITestableProps } from '../../../../types';

export interface IBottomNavigationProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'> {
  children?: React.ReactNode;
  activeId?: string | null;
  defaultActiveId?: string | null;
  onChange?: (id: string) => void;
  keepLabel?: boolean;
}
