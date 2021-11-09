import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export const ProgressBarSizeEnum = {
  tiny: 'tiny',
  normal: 'normal',
  medium: 'medium',
  big: 'big',
};

export type ProgressBarSizeEnumType = keyof typeof ProgressBarSizeEnum | string | number;
export interface IProgressBarProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  intent?: IntentType;
  progress: number;
  withLabel?: boolean;
  striped?: boolean;
  size?: ProgressBarSizeEnumType;
}
