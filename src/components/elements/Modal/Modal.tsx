import clsx from 'clsx';
import React, { useCallback, useRef, useEffect } from 'react';
import { PORTAL_ROOT_ID } from '../../../css-classes';
import { useDevice } from '../../../hooks';
import { modalCanEscape } from '../../../utils';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.types';

/**
 * The modal component provides a solid foundation for creating dialogs interrupting the user's task.
 * You can call modals using useModal hook
 * @example const { showModal } = useModal();
 * @example showModal(SimpleModalCMP, args);
 */
const Modal = React.forwardRef<HTMLDivElement, IModalProps>(({
  className, testingID, id, children, size = 'normal', onBackdropClick, onEscape, backdropProps = {}, hideBackdrop,
  ...props
}, ref) => {
  const { isPhone } = useDevice();
  const backDropRef = useRef<HTMLDivElement | null>(null);
  const onEscapeRef = useRef<((e: KeyboardEvent) => void) | null>(null);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (onBackdropClick && (e.target as HTMLDivElement).getAttribute('data-lens-element') === 'modal__backdrop') {
      e.preventDefault();
      e.stopPropagation();

      onBackdropClick('backdrop');
    }
  }, [onBackdropClick]);

  useEffect(() => {
    onEscapeRef.current = (e: KeyboardEvent) => {
      if (typeof window !== 'undefined') {
        const portalRoot = window.document.getElementById(PORTAL_ROOT_ID);

        if (onEscape && portalRoot && e.key === 'Escape' && modalCanEscape(portalRoot, backDropRef)) {
          onEscape('escape');
        }
      }
    };
  }, [onEscape]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.addEventListener('keydown', onEscapeRef.current as () => void);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.document.removeEventListener('keydown', onEscapeRef.current as () => void);
      }
    };
  }, []);

  return (
    <div
      onClick={handleBackdropClick}
      className={clsx(styles.backdrop, hideBackdrop && styles.backdropHidden)}
      ref={backDropRef}
      aria-modal="true"
      {...backdropProps}
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
