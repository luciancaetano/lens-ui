import clsx from 'clsx';
import React, { useCallback, useRef, useEffect } from 'react';
import { PORTAL_ROOT_ID } from '../../../css-classes';
import { useDevice } from '../../../hooks';
import { modalCanEscape } from '../../../utils';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.types';

const Modal: React.FC<IModalProps> = ({
  className, testingID, id, children, size = 'normal', onBackdropClick, onEscape,
}) => {
  const { isPhone } = useDevice();
  const backDropRef = useRef<HTMLDivElement>(null);
  const onEscapeRef = useRef<(e: KeyboardEvent) => void>(null);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (onBackdropClick && (e.target as HTMLDivElement).classList.contains('lens-ui-modal-backdrop')) {
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

  return (
    <div
      onClick={handleBackdropClick}
      className={styles.backdrop}
      data-lens-element="modal__backdrop"
      ref={backDropRef}
      aria-modal="true"
    >
      <div
        id={id}
        data-lens-element="modal"
        data-testid={testingID}
        className={clsx(styles.modal, className, styles[`modal--size-${isPhone ? 'fullscreen' : size}`])}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
