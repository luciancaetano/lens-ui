import clsx from 'clsx';
import React, { useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (onClose && e.target && isBackdropClick(e.target as HTMLElement)) {
      e.preventDefault();
      e.stopPropagation();

      onClose('backdrop');
    }
  }, [onClose]);

  // handle escape key
  React.useEffect(() => {
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

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...backdropProps as unknown as Record<string, unknown>}
          key="backdrop"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={handleBackdropClick}
          className={clsx(styles.backdrop, hideBackdrop && styles.backdropHidden, 'theme1', theme, 'theme', backdropClassName)}
          aria-modal="true"
          data-lens-element="modal__backdrop"
          data-lens-modal-size={(md || sm) ? 'fullscreen' : size}
        >
          <div
            {...props}
            id={id}
            data-lens-element="modal"
            aria-modal="true"
            data-testid={testingID}
            className={clsx(styles.modal, hideBackdrop && styles.modalNoBackdrop, styles[`modal--size-${(md || sm) ? 'fullscreen' : size}`], className)}
            ref={ref}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget || document.body,
  );
});

export default Modal;
