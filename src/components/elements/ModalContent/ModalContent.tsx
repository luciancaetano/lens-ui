import clsx from 'clsx';
import React from 'react';
import styles from './ModalContent.module.scss';
import { IModalContentProps } from './ModalContent.types';

const ModalContent: React.FC<IModalContentProps> = function ({
  className, testingID, id, children, ...props
}) {
  return (
    <main
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="modal__content"
      className={clsx(styles.modalContent, className)}
    >
      {children}
    </main>
  );
};

export default ModalContent;
