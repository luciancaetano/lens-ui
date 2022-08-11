import React from 'react';
import { ITestableProps } from '../../../../types';

export interface IBottomNavigationActionProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLButtonElement>, 'id'> {
  children?: React.ReactNode;
  id: string;
  icon?: React.ReactNode;
}
