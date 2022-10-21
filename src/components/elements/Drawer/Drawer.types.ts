import React from 'react';
import { ITestableProps } from '../../../types';

export interface IDrawerProps extends ITestableProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'small' | 'medium' | 'fullscreen' | string | number;
  title?: React.ReactNode;
  closeIcon?: React.ReactNode;
}
