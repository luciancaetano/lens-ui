import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import {
  ITestableProps, IntentType,
} from '../../../types';

export type IconType = keyof typeof BsIcons | keyof typeof AiIcons | keyof typeof FaIcons | keyof typeof GoIcons | keyof typeof MdIcons;

export interface IIconProps<T extends IconType = IconType> extends ITestableProps, Omit<React.SVGAttributes<SVGElement>, 'fill' | 'name' | 'size'> {
  fill?: IntentType | string;
  name?: T;
  size?: number | string;
  spin?: boolean;
  iconsSet?: Record<string, React.ComponentType<any>>;
  rotation?: number;
}

export const IconsNameEnum = Object.keys({
  ...BsIcons,
  ...AiIcons,
  ...FaIcons,
  ...GoIcons,
  ...MdIcons,
}) as IconType[];
