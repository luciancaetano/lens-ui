import React from 'react';
import { ITestableProps } from '../../../../types';

export const ModalSizeEnum = {
  normal: 'normal',
  medium: 'medium',
  fullscreen: 'fullscreen',
};

export type ModalSizeEnumType = keyof typeof ModalSizeEnum;

export interface IModalProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  size?: ModalSizeEnumType;
  onBackdropClick?: (reason: 'backdrop') => void;
  hideBackdrop?: boolean;
  backdropProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'className'>;
}
