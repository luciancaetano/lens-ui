import * as BsIcon from 'react-icons/bs';
import {
  IPropsWithClassName, IPropsWithId, ITestableProps, IntentType,
} from '../../../types';

export type IconType = keyof typeof BsIcon;

export interface IIconProps extends IPropsWithClassName, ITestableProps, IPropsWithId {
  fill?: IntentType | string;
  name?: IconType;
  size?: number | string;
}
