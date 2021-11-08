import React from 'react';
import { ITestableProps } from '../../../types';

export interface IButtonGroupProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  vertical?: boolean;
}
