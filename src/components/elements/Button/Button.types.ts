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

export interface IButtonCustomIntent {
  normal: {
    opacity?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    boxShadow?: string;
  };
  hover: {
    opacity?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    boxShadow?: string;
  };
  active: {
    opacity?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    boxShadow?: string;
  };
  focused: {
    opacity?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    boxShadow?: string;
  };
  disabled: {
    opacity?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    boxShadow?: string;
  };
}

export interface IButtonProps extends ITestableProps,
  Omit<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'OnBlur' | 'type' | 'onDoubleClick' | 'onFocus' | 'tabIndex' | 'style' | 'size'>
{
  type?: 'submit' | 'reset' | 'button';
  intent?: AdvancedIntentType | IButtonCustomIntent | null;
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
}
