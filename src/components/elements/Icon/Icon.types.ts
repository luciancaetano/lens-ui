import React from 'react';
import * as AllIcons from 'react-icons/all';
import {
  ITestableProps, IntentType,
} from '../../../types';

export type IconType = keyof typeof AllIcons;

export interface IIconProps extends ITestableProps, Omit<React.SVGAttributes<SVGElement>, 'fill' | 'name' | 'size'> {
  fill?: IntentType | string;
  name?: IconType;
  size?: number | string;
}
