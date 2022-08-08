import clsx from 'clsx';
import React, { useMemo, useRef, useState } from 'react';
import {
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  FloatingPortal,
  arrow,
} from '@floating-ui/react-dom-interactions';
import { motion, AnimatePresence } from 'framer-motion';
import { mergeRefs } from 'react-merge-refs';

import { ITooltipProps } from './Tooltip.types';
import styles from './Tooltip.module.scss';

const Tooltip = React.forwardRef<HTMLDivElement, ITooltipProps>(({
  className, testingID, id, children, placement = 'top', tip: tooltip, ...props
}, forwardRef) => {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const {
    x, y, reference, floating, strategy, context, middlewareData,
  } = useFloating({
    placement,
    open,
    strategy: 'absolute',
    onOpenChange: setOpen,
    middleware: [offset(5), flip(), shift({ padding: 8 }), arrow({
      element: arrowRef,
      padding: -8,
    })],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { restMs: 40 }),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  const ref = useMemo(() => mergeRefs([reference, forwardRef]), [reference, forwardRef]);

  return (
    <>
      <div
        {...getReferenceProps(props)}
        id={id}
        ref={ref}
        className={clsx(styles.tooltip, className)}
        data-testid={testingID}
        data-lens-element="tooltip"
      >
        {children}
      </div>
      <AnimatePresence>
        <FloatingPortal>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              {...getFloatingProps({
                ref: floating,
                className: styles.float,
                style: {
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                },
              })}
            >
              <div
                ref={arrowRef}
                className={clsx(styles.floatArrow, styles[`float--placement-${placement}`])}
                data-lens-element="tooltip__arrow"
                style={{
                  left: middlewareData.arrow?.x ? `${middlewareData.arrow?.x}px` : undefined,
                  top: middlewareData.arrow?.y ? `${middlewareData.arrow?.y}px` : undefined,
                }}
              />
              {typeof tooltip === 'function' ? tooltip() : tooltip}
            </motion.div>
          )}
        </FloatingPortal>
      </AnimatePresence>
    </>
  );
});

export default Tooltip;
