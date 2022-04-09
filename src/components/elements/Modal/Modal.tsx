import clsx from 'clsx';
import React, { useCallback } from 'react';
import { useDevice } from '../../../hooks';
import { isBackdropClick } from '../../../utils';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.types';

/**
 * The modal component provides a solid foundation for creating dialogs interrupting the user's task.
 * You can call modals using useModal hook
 * @example const { showModal } = useModal();
 * @example showModal(SimpleModalCMP, args);
 */
const Modal = React.forwardRef<HTMLDivElement, IModalProps>(({
  className, testingID, id, children, size = 'normal', onBackdropClick, backdropProps = {}, hideBackdrop,
  ...props
}, ref) => {
  const { isPhone } = useDevice();

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (onBackdropClick && e.target && isBackdropClick(e.target as HTMLElement)) {
      e.preventDefault();
      e.stopPropagation();

      onBackdropClick('backdrop');
    }
  }, [onBackdropClick]);

  return (
    <div
      {...backdropProps}
      onClick={handleBackdropClick}
      className={clsx(styles.backdrop, hideBackdrop && styles.backdropHidden)}
      aria-modal="true"
      data-lens-element="modal__backdrop"
      data-lens-modal-size={isPhone ? 'fullscreen' : size}
    >
      <div
        {...props}
        id={id}
        data-lens-element="modal"
        aria-modal="true"
        data-testid={testingID}
        className={clsx(styles.modal, hideBackdrop && styles.modalNoBackdrop, styles[`modal--size-${isPhone ? 'fullscreen' : size}`], className)}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
});

export default Modal;
