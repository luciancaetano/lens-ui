import React from 'react';
import {
  IntentType, IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface IMessageBoxProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  intent?: IntentType;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
  timeout?: number;
  striped?: boolean;
  onClose?: (isOpen: false) => void;
  closable?: boolean;
  isOpen?: boolean;
}
