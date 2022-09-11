import clsx from 'clsx';
import React, { useCallback, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import Icon from '../../Icon/Icon';
import styles from './ModalHeader.module.scss';
import { IModalHeaderProps } from './ModalHeader.types';

const ModalHeader = React.forwardRef<HTMLElement, IModalHeaderProps>(({
  className, testingID, id, children, onClose,
}, ref) => {
  const localRef = useRef<HTMLElement>(null);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose('x-close-header');
    }
  }, [onClose]);

  return (
    <head
      id={id}
      data-lens-element="modal__header"
      data-testid={testingID}
      className={clsx(styles.modalHeader, onClose && styles.modalHeaderHasCloseButton, className)}
      ref={mergeRefs([localRef, ref])}
    >
      <header data-lens-element="modal__header__title" className={styles.modalHeaderTitle} aria-labelledby="modal-title">
        {children}
      </header>
      {onClose && (
        <button className={styles.modalHeaderCloseButtonHolder} data-lens-element="modal__header__close-button" onClick={handleClose} data-dismiss="modal" aria-label="Close" tabIndex={0}>
          <Icon name="BsX" size="1.5rem" />
        </button>
      )}
    </head>
  );
});

export default ModalHeader;
