import React from 'react';
import { IModalContextType } from './ModalProvider.types';

const ModalContext = React.createContext<IModalContextType>({
  isOpen: false,
  closeModal: () => {},
  showModal: (() => {}) as any,
  props: null,
});

export default ModalContext;
