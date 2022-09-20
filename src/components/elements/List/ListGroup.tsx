import React, { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './List.module.scss';
import useTheme from '../../../hooks/use-theme';
import { IListGroupProps } from './List.types';
import ListItem from './ListItem';
import { useControllableState } from '../../../hooks';
import Icon from '../Icon/Icon';

const ListGroup:React.FC<IListGroupProps> = ({
  className, testingID, title, expandIcon, onClick, divider, heading, children, expanded, defaultExpanded, onExpand, prefix, ...props
}) => {
  const [theme] = useTheme();
  const [expandedState, setExpandedState] = useControllableState<boolean>(expanded, defaultExpanded);

  // eslint-disable-next-line no-nested-ternary
  const elementType = !divider && heading ? 'heading' : divider ? 'divider' : 'item';

  const handleSetExpanded = useCallback((value: boolean) => {
    setExpandedState(value);
    if (onExpand) {
      onExpand(value);
    }
  }, [onExpand, setExpandedState]);

  const handleToggleExpanded = useCallback(() => {
    handleSetExpanded(!expandedState);
  }, [expandedState, handleSetExpanded]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleToggleExpanded();

    if (onClick) {
      onClick(e);
    }
  }, [handleToggleExpanded, onClick]);

  const icon = useMemo(() => {
    if (!expandIcon) {
      return <Icon name="MdArrowRight" rotation={expandedState ? 90 : 0} />;
    }
    return expandIcon(expandedState);
  }, [expandIcon, expandedState]);

  return (
    <ListItem
      {...props}
      className={clsx(styles.listGroup, theme, 'list__group', className)}
      data-lens-element="list__group"
      onClick={handleClick}
      divider={divider}
      heading={heading}
    >
      <div
        className={clsx(styles.listGroupHeader, 'list__group__header')}
        data-lens-element="list__group__header"
      >
        <div
          className={clsx(styles.listItemPrefix, 'list__group__toggle-icon')}
          data-lens-element="list__group__toggle-icon"
        >
          {icon}
        </div>
        {prefix && (
          <div
            className={clsx(styles.listItemPrefix, 'list__group__prefix')}
            data-lens-element={`list__group--${elementType}__prefix`}
          >
            {prefix}
          </div>
        )}
        {title}
      </div>
      <AnimatePresence>
        {expandedState && (
          <motion.div
            key="content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                height: 'auto',
                // opacity: 1,
                // padding: '1rem',
              },
              closed: {
                height: 0,
                // opacity: 0,
                // padding: 0,
              },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={clsx(styles.listGroupContent, 'list__group__content')}
            data-lens-element="list__group__content"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

    </ListItem>
  );
};

export default ListGroup;
