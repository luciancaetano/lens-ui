import React from 'react';
import {
  ITestableProps, IntentType,
} from '../../../types';

export interface IBadgeProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  /**
   * The intent of the badge.
   */
  intent?: IntentType;
  /**
   * The type of the badge.
   */
  type?: 'solid' | 'subtle' | 'outlined';
}
