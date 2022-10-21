import React from 'react';
import { ITestableProps } from '../../../../types';

export interface IModalHeaderProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  onClose?: (reason: 'x-close-header') => void;
}
