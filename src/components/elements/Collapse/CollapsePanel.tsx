import clsx from 'clsx';
import React, { useCallback, useId, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICollapsePanelProps } from './Collapse.types';
import styles from './Collapse.module.scss';
import { useCollapseContext } from './CollapseContext';
import Icon from '../Icon/Icon';

const CollapsePanel = React.forwardRef<HTMLDivElement, ICollapsePanelProps>(({
  className, testingID, id, children, header, ...props
}, ref) => {
  const collapseId = useId();

  const {
    activeIds, set, expandIcon, singleExpand,
  } = useCollapseContext();

  const handleHeaderClick = useCallback(() => {
    if (!singleExpand) {
      set(activeIds.includes(collapseId) ? activeIds.filter((id) => id !== collapseId) : [...activeIds, collapseId]);
    } else {
      set(activeIds.includes(collapseId) ? [] : [collapseId]);
    }
  }, [activeIds, collapseId, set, singleExpand]);

  const icon = useMemo(() => {
    if (!expandIcon) {
      return <Icon name="MdArrowRight" rotation={activeIds && activeIds.includes(collapseId) ? 90 : 0} />;
    }
    if (singleExpand) {
      return expandIcon(!!activeIds?.includes(collapseId));
    }
    return expandIcon(activeIds?.includes(collapseId) || activeIds?.length === 0);
  }, [activeIds, collapseId, expandIcon, singleExpand]);

  const isActive = useMemo(() => !!activeIds?.includes(collapseId), [activeIds, collapseId]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="collapse__panel"
      className={clsx(
        styles.collapse__panel,
        'collapse__panel',
        isActive && 'collapse__panel--expanded',
        isActive && styles['collapse__panel--expanded'],
        className,
      )}
      ref={ref}
    >
      <div
        className={clsx(styles.collapse__panel__header, 'collapse__panel__header')}
        onClick={handleHeaderClick}
        data-lens-element="collapse__panel__header"
      >
        <div
          className={clsx(styles.collapse__panel__header__icon, 'collapse__panel__header__icon')}
          data-lens-element="collapse__panel__header__icon"
        >{icon}
        </div>
        <div
          className={clsx(styles.collapse__panel__header__title, 'collapse__panel__header__title')}
          data-lens-element="collapse__panel__header__title"
        >
          {header}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { visibility: 'visible', height: 'auto' },
              closed: { visibility: 'hidden', height: 0 },
            }}
            className={clsx(
              styles.collapse__panel__content,
              'collapse__panel__content',
              isActive && 'collapse__panel__content--expanded',
              isActive && styles['collapse__panel__content--expanded'],
            )}
            data-lens-element="collapse__panel__content"
            transition={{
              duration: 0.2,
            }}
          >

            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default CollapsePanel;
