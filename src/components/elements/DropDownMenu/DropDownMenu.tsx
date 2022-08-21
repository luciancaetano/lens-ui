/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import {
  useClick, useInteractions, useFloating, useFloatingNodeId,
  FloatingNode, FloatingPortal, useRole, useDismiss,
  autoUpdate,
} from '@floating-ui/react-dom-interactions';
import { offset, shift, flip } from '@floating-ui/core';
import styles from './DropDownMenu.module.scss';
import {
  IDropDownMenuProps,
} from './DropDownMenu.types';
import Icon from '../Icon/Icon';
import { rem2px } from '../../../utils';
import { useTheme } from '../../../hooks';

/**
 * DropDownMenu display a list of choices on temporary surfaces.
 */
function DropDownMenu({
  className, testingID, id, children, dropDownClassName, contentRender, closeOnClick = true,
  chevron = true, offsetX, offsetY, placement = 'bottom-end', ...props
}: IDropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [theme] = useTheme();

  const nodeId = useFloatingNodeId();

  const {
    x, y, strategy, context, reference, floating,
  } = useFloating({
    open: isOpen,
    nodeId,
    placement,
    strategy: 'fixed',
    onOpenChange: setIsOpen,
    middleware: [...(offsetX || offsetY ? [offset({
      ...(offsetX ? { alignmentAxis: rem2px(offsetX) } : {}),
      ...(offsetY ? { mainAxis: rem2px(offsetY) } : {}),
    })] : []), shift({ padding: rem2px(0.5) }), flip()],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context, {
      toggle: true,
      pointerDown: true,
    }),
    useRole(context, { role: 'menu' }),
    useDismiss(context),
  ]);

  const handleFloatingClick = useCallback(() => {
    if (closeOnClick) {
      setIsOpen(false);
    }
  }, [closeOnClick]);

  return (
    <FloatingNode id={nodeId}>
      <div
        {...props}
        id={id}
        data-testid={testingID}
        data-lens-element="drop-down-menu"
        className={clsx(styles.dropDownMenu, theme, className)}
        ref={reference}
        {...getReferenceProps()}
      >
        <div className={styles.dropDownMenuChildren} data-lens-element="drop-down-menu__content">
          {children}
        </div>
        {chevron && (
          <div className={styles.dropDownMenuChevron} data-lens-element="drop-down-menu__chevron">
            <Icon name="BsChevronDown" />
          </div>
        ) }
      </div>
      <FloatingPortal id={`lens-ui-floating__${nodeId}`}>
        <div
          role="list"
          className={clsx(styles.dropDownMenuList, !isOpen && styles.dropDownMenuListHide, dropDownClassName, theme)}
          data-lens-element="drop-down-menu__list"
          style={{
            '--strategy': strategy,
            '--y': y ? `${y}px` : undefined,
            '--x': x ? `${x}px` : undefined,
          } as React.CSSProperties}
          ref={floating}
          {...getFloatingProps({
            onClick: handleFloatingClick,
          })}
        >
          {isOpen && typeof contentRender === 'function' && contentRender(() => setIsOpen(false))}
        </div>
      </FloatingPortal>
    </FloatingNode>
  );
}

export default React.memo(DropDownMenu);
