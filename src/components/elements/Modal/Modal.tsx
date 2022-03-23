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
  className, testingID, id, children, size = 'normal', onBackdropClick, onEscape,
  ...props
}, ref) => {
  const { isPhone } = useDevice();
  const backDropRef = useRef<HTMLDivElement>(null);
  const onEscapeRef = useRef<(e: KeyboardEvent) => void>(null);

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

        if (onEscape && e.key === 'Escape' && modalCanEscape(portalRoot, backDropRef)) {
          onEscape('escape');
        }
      }
    };
  }, [onEscape]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.addEventListener('keydown', onEscapeRef.current);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.document.removeEventListener('keydown', onEscapeRef.current);
      }
    };
  }, []);

  const handleRef = useCallback((element: HTMLDivElement) => {
    backDropRef.current = element;
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  }, [ref]);

  return (
    <div
      onClick={handleBackdropClick}
      className={styles.backdrop}
      data-lens-element="modal__backdrop"
      data-lens-modal-size={isPhone ? 'fullscreen' : size}
      ref={handleRef}
      aria-modal="true"
    >
      <div
        {...props}
        id={id}
        data-lens-element="modal"
        aria-modal="true"
        data-testid={testingID}
        className={clsx(styles.modal, styles[`modal--size-${isPhone ? 'fullscreen' : size}`], className)}
      >
        {children}
      </div>
    </div>
  );
});

export default Modal;
