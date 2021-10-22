import React from 'react';

export interface IModalContextType {
  isOpen: boolean;
  showModal: (component: React.ComponentType<any>, props: any) => Promise<any>;
  closeModal: <T = any>(data: T) => void;
  props: any;
}

export interface IModalHookResponse {
  showModal: <Props = any, R = any> (component: React.ComponentType<Props>, props: Props) => Promise<R | null>;
  closeModal: <T = any>(data: T) => void;
  isOpen: boolean;
}
