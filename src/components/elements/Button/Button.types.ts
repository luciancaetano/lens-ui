import React from 'react';
import { AdvancedIntentType, ITestableProps } from '../../../types';

export const ButtonAppearanceEnum = {
  default: 'default',
  minimal: 'minimal',
  outlined: 'outlined',
};

export const ButtonSizeEnum = {
  small: 'small',
  normal: 'normal',
  large: 'large',
};

export type ButtonAppearanceType = keyof typeof ButtonAppearanceEnum;
export type ButtonSizeType = keyof typeof ButtonSizeEnum;

export interface IButtonProps extends ITestableProps,
  Omit<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'OnBlur' | 'type' | 'onDoubleClick' | 'onFocus' | 'tabIndex' | 'style' | 'size'>
{
  type?: 'submit' | 'reset' | 'button';
  intent?: AdvancedIntentType | null;
  disabled?: boolean;
  active?: boolean;
  size?: ButtonSizeType;
  appearance?: ButtonAppearanceType;
  style?: React.CSSProperties;
  tabIndex?: number;
  parentId?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  children?: React.ReactNode | React.ReactNode[];
}
