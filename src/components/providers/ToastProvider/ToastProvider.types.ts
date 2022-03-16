import React from 'react';
import { IntentType } from '../../../types';
import { IButtonProps } from '../../elements/Button/Button.types';

export interface IToastAction extends Omit<IButtonProps, 'size' | 'type'| 'content' | 'disabled' | 'onBlur' | 'onDoubleClick' | 'onFocus' | 'active' | 'style' | 'tabIndex'> {
  content?: React.ReactNode;
}
export interface IToastCreationData {
  intent: IntentType;
  icon?: React.ReactNode;
  content: React.ReactNode;
  dismiss?: 'button' | number;
  className?: string;
  actionsContainerClassName?: string;
  actions?: IToastAction[];
}

export interface IToastData extends IToastCreationData {
  id: string;
}

export interface IUserToasttHookReponse {
  addToast: (data: IToastCreationData, id?: string) => string;
  toasts: IToastData[];
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export interface IToastProviderProps {
  placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}
export interface IToastContextType {
  toasts: IToastData[];

  add: (data: IToastCreationData, id?: string) => string;
  close:(id: string) => void;
  closeAll: () => void;
  placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}
