import React from 'react';
import { ITestableProps } from '../../../types';

export type TooltipPlacementType = 'top' | 'right' | 'bottom' | 'left';

export interface ITooltipProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  children: JSX.Element;
  placement?: TooltipPlacementType;
  tip: React.ReactNode | (() => React.ReactNode);
}
