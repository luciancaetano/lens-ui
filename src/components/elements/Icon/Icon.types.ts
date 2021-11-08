import React from 'react';
import * as BsIcon from 'react-icons/bs';
import {
  ITestableProps, IntentType,
} from '../../../types';

export type IconType = keyof typeof BsIcon;

export interface IIconProps extends ITestableProps, Omit<React.SVGAttributes<SVGElement>, 'fill' | 'name' | 'size'> {
  fill?: IntentType | string;
  name?: IconType;
  size?: number | string;
}
