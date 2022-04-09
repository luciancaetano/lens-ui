import clsx from 'clsx';
import React from 'react';
import styles from './ModalFooter.module.scss';
import { IModalFooterProps } from './ModalFooter.types';

const ModalFooter = React.forwardRef<HTMLDivElement, IModalFooterProps>(({
  className, testingID, id, children, ...props
}, ref) => (
  <footer
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-element="modal__footer"
    data-role="modal-footer"
    className={clsx(styles.modalFooter, className)}
    ref={ref}
  >
    {children}
  </footer>
));

export default ModalFooter;
