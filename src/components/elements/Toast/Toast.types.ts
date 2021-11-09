import React from 'react';
import { ITestableProps } from '../../../types';
import { IToastData } from '../../providers/ToastProvider/ToastProvider.types';

export interface IToastProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  data: IToastData;
}
