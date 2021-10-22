import React from 'react';
import {
  IntentType, IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface ICalloutProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  icon?: React.ReactNode;
  intent?: IntentType;
  title?: string;
}
