import { CompoundedComponentWithRefType } from '../../../types';
import Modal from './Modal/Modal';
import { IModalProps } from './Modal/Modal.types';
import ModalContent from './ModalContent/ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';

interface ICompoundedComponent extends CompoundedComponentWithRefType<IModalProps, HTMLDivElement> {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
}

export default Object.assign(Modal, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
}) as ICompoundedComponent;
