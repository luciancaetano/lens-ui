import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IMessageBoxProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'title'> {
  intent?: IntentType;
  icon?: React.ReactNode | React.ReactNode[];
  title?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  timeout?: number;
  striped?: boolean;
  onClose?: (isOpen: false) => void;
  closable?: boolean;
  isOpen?: boolean;
}
