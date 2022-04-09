import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface IMessageBoxProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'title'> {
  intent?: IntentType;
  icon?: JSX.Element | JSX.Element[];
  title?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
  timeout?: number;
  striped?: boolean;
  onClose?: (isOpen: false) => void;
  closable?: boolean;
  isOpen?: boolean;
}
