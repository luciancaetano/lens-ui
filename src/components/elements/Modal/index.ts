import React from 'react';
import Modal from './Modal/Modal';
import { IModalProps } from './Modal/Modal.types';
import ModalContent from './ModalContent/ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';

interface ICompoundedComponent extends React.ForwardRefExoticComponent<IModalProps> {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
}

export default Object.assign(Modal, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
}) as ICompoundedComponent;

export { ModalSizeEnum } from './Modal/Modal.types';
export type { IModalProps, ModalSizeEnumType } from './Modal/Modal.types';
export type { IModalContentProps } from './ModalContent/ModalContent.types';
export type { IModalFooterProps } from './ModalFooter/ModalFooter.types';
export type { IModalHeaderProps } from './ModalHeader/ModalHeader.types';
