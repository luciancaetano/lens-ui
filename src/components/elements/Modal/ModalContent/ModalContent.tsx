import clsx from 'clsx';
import React from 'react';
import styles from './ModalContent.module.scss';
import { IModalContentProps } from './ModalContent.types';

const ModalContent = React.forwardRef<HTMLElement, IModalContentProps>(({
  className, testingID, id, children, ...props
}, ref) => (
  <main
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-element="modal__content"
    className={clsx(styles.modalContent, className)}
    role="document"
    ref={ref}
  >
    {children}
  </main>
));

export default ModalContent;
