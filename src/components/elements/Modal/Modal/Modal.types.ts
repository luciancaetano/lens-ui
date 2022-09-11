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
  hideBackdrop?: boolean;
  backdropProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
  backdropClassName?: string;
  isOpen?: boolean;
  onClose?: (reason: 'close' | 'escape' | 'backdrop') => void;
  portalTarget?: HTMLElement;
  autoFocus?: boolean;
}
