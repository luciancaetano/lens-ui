import clsx from 'clsx';
import React, {
  useCallback, useEffect, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mergeRefs } from 'react-merge-refs';
import { useDevice, useTheme } from '../../../../hooks';
import { isBackdropClick } from '../../../../utils';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.types';
/**
 * The modal component provides a solid foundation for creating dialogs interrupting the user's task.
 * @example showModal(SimpleModalCMP, args);
 */
const Modal = React.forwardRef<HTMLDivElement, IModalProps>(({
  className, testingID, id, children, size = 'normal', onClose, portalTarget,
  backdropClassName, hideBackdrop, isOpen, backdropProps = {},
  ...props
}, ref) => {
  const { md, sm } = useDevice();
  const [theme] = useTheme();
  const localRef = useRef<HTMLDivElement>(null);
  const sentinelStartRef = useRef<HTMLDivElement>(null);
  const sentinelEndRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (onClose && e.target && isBackdropClick(e.target as HTMLElement)) {
      e.preventDefault();
      e.stopPropagation();

      onClose('backdrop');
    }
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose('escape');
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    const { body } = document;
    if (isOpen) {
      body.classList.add('lens-ui-overlay-open');
    } else {
      body.classList.remove('lens-ui-overlay-open');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      if (document.activeElement) {
        (document.activeElement as HTMLElement).blur();
      }
    }
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            data-isOpen={isOpen}
            {...backdropProps as unknown as Record<string, unknown>}
            key="backdrop"
            initial="closed"
            animate="open"
            exit="exit"
            variants={{
              open: { opacity: 1, visibility: 'visible', transition: { duration: 0.2 } },
              closed: { opacity: 0, visibility: 'hidden', transition: { duration: 0.2 } },
              exit: { opacity: 0, visibility: 'hidden', transition: { duration: 0.2 } },
            }}
            onClick={handleBackdropClick}
            className={clsx(styles.backdrop, hideBackdrop && styles.backdropHidden, theme, backdropClassName)}
            data-lens-element="modal__backdrop"
            data-lens-modal-size={(md || sm) ? 'fullscreen' : size}
          />
          <div tabIndex={0} ref={sentinelStartRef} />
          <motion.div
            {...props as unknown as Record<string, unknown>}
            id={id}
            key="backdrop"
            initial="closed"
            animate="open"
            exit="exit"
            role="dialog"
            tabIndex={-1}
            variants={{
              open: {
                opacity: 1,
                transform: 'translate(-50%, -50%)',
                transition: {
                  duration: 0,
                },
              },
              closed: {
                opacity: 0,
                transform: 'translate(-50%, -50%) scale(0.9)',
                transition: {
                  duration: 0,
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0,
                },
              },
            }}
            data-lens-element="modal"
            aria-modal="true"
            aria-roledescription="modal"
            data-testid={testingID}
            className={clsx(styles.modal, hideBackdrop && styles.modalNoBackdrop, styles[`modal--size-${(md || sm) ? 'fullscreen' : size}`], className)}
            ref={mergeRefs([ref, localRef])}
          >
            {children}
          </motion.div>
          <div tabIndex={0} ref={sentinelEndRef} />
        </>
      )}
    </AnimatePresence>,
    portalTarget || document.body,
  );
});

export default Modal;
