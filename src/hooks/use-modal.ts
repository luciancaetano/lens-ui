import { useContext } from 'react';
import ModalContext from '../components/providers/ModalProvider/ModalContext';
import { IModalHookResponse } from '../components/providers/ModalProvider/ModalProvider.types';

function useModal(): IModalHookResponse {
  const { isOpen, closeModal, showModal } = useContext(ModalContext);

  return {
    closeModal, showModal, isOpen,
  };
}

export default useModal;
