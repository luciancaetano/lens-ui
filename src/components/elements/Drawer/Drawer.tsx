import clsx from 'clsx';
import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IDrawerProps } from './Drawer.types';
import styles from './Drawer.module.scss';
import { useTheme } from '../../../hooks';
import Icon from '../Icon/Icon';

const Drawer:React.FC<IDrawerProps> = ({
  className, testingID, id, children, size = 'small', placement = 'left', onClose, title,
  closeIcon, isOpen = false, ...props
}) => {
  const [theme] = useTheme();

  // handle escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const openTransform = useMemo(() => {
    if (placement === 'left') {
      return 'translateX(0)';
    } if (placement === 'right') {
      return 'translateX(0)';
    } if (placement === 'top') {
      return 'translateY(0)';
    } if (placement === 'bottom') {
      return 'translateY(0)';
    }
    return 'translateX(0)';
  }, [placement]);

  const closeTransform = useMemo(() => {
    if (placement === 'left') {
      return 'translateX(-100%)';
    } if (placement === 'right') {
      return 'translateX(100%)';
    } if (placement === 'top') {
      return 'translateY(-100%)';
    } if (placement === 'bottom') {
      return 'translateY(100%)';
    }
    return 'translateX(-100%)';
  }, [placement]);

  const sizeValue = useMemo(() => size === 'small' || size === 'medium' || size === 'large' ? size : null, [size]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
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
            className={clsx(styles.backdrop, !isOpen && 'backdrop--hidden')}
            onClick={onClose}
          />
          <motion.div
            {...props as any}
            key="drawer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transform: openTransform },
              closed: { transform: closeTransform },
            }}
            transition={{
              duration: 0.2,
            }}
            id={id}
            data-testid={testingID}
            data-lens-element="drawer"
            data-lens-placement={placement}
            className={clsx(
              styles.container,
              styles[`container--placement-${placement}`],
              sizeValue && styles[`container--placement-${placement}--size-${sizeValue}`],
              isOpen && `container--placement-${placement}--open`,
              !isOpen && `container--placement-${placement}--closed`,
              sizeValue && styles[`container--size-${sizeValue}`],
              theme,
              className,
            )}
            style={!sizeValue ? { width: size } : {}}
          >
            <div
              className={clsx(styles.containerHeader, styles[`container__header--placement-${placement}`])}
              data-lens-element="drawer__header"
            >
              <button
                type="button"
                aria-label="Close"
                className={styles.containerHeaderClose}
                onClick={onClose}
                data-lens-element="drawer__header__close"
              >
                {closeIcon || <Icon name="MdClose" />}
              </button>
              <div className={styles.containerHeaderTitle} data-lens-element="drawer__header__title">
                {title}
              </div>
            </div>
            <div className={styles.containerBody} data-lens-element="drawer__content">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Drawer;
