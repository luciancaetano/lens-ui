import clsx from 'clsx';
import React from 'react';
import styles from './ModalFooter.module.scss';
import { IModalFooterProps } from './ModalFooter.types';

const ModalFooter: React.FC<IModalFooterProps> = ({
  className, testingID, id, children,
}) => (
  <footer
    id={id}
    data-testid={testingID}
    data-lens-element="modal__footer"
    data-role="modal-footer"
    className={clsx(styles.modalFooter, className)}
  >
    {children}
  </footer>
);

export default ModalFooter;
