import React from 'react';
import { AdvancedIntentType, IntentType } from '../../../types';

export interface IToastAction {
  intent?: AdvancedIntentType | null;
  disabled?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  content?: JSX.Element | JSX.Element[];
  className?: string;
}
export interface IToastCreationData {
  intent: IntentType;
  icon?: JSX.Element | JSX.Element[];
  content: JSX.Element | JSX.Element[];
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

export type ToastPlacementType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
export interface IToastProviderProps {
  placement: ToastPlacementType;
  children: JSX.Element | JSX.Element[];
}
export interface IToastContextType {
  toasts: IToastData[];

  add: (data: IToastCreationData, id?: string) => string;
  close:(id: string) => void;
  closeAll: () => void;
  placement: ToastPlacementType;
}
