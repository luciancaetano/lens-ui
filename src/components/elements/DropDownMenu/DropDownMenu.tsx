/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import ReactDOM from 'react-dom';
import { useFloating } from '@floating-ui/react-dom';
import styles from './DropDownMenu.module.scss';
import {
  IDropDownMenuProps, IDropdownClickableItemType,
} from './DropDownMenu.types';
import Icon from '../Icon/Icon';
import { rem2px, getPortalContainer } from '../../../utils';
import { useOnClickOutside } from '../../../hooks';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { offset, shift, flip } = require('@floating-ui/core');

/**
 * DropDownMenu display a list of choices on temporary surfaces.
 */
function DropDownMenu<TPayload = any | undefined>({
  className, testingID, id, children, items, onItemClick, activeId, dropDownClassName,
  disableChevron, offsetX, offsetY, placement = 'bottom-end', ...props
}: IDropDownMenuProps<TPayload>) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeout = useRef<NodeJS.Timeout | undefined>();

  const ref = useRef<HTMLDivElement>(null);

  const {
    x, y, reference, floating, strategy,
  } = useFloating({
    placement,
    strategy: 'fixed',
    middleware: [...(offsetX || offsetY ? [offset({
      ...(offsetX ? { alignmentAxis: rem2px(offsetX) } : {}),
      ...(offsetY ? { mainAxis: rem2px(offsetY) } : {}),
    })] : []), shift({ padding: rem2px(0.5) }), flip()],
  });

  useOnClickOutside([ref], () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const handleItemClick = useCallback((item: IDropdownClickableItemType<TPayload>) => () => {
    if (onItemClick) {
      onItemClick(item);
    }
  }, [onItemClick]);

  const listItems = useMemo(() => items.map((item: IDropdownClickableItemType<TPayload>, key) => {
    if (!item) return null;

    if ((item as any).divider) {
      return (
        <li role="menuitem" data-lens-element="drop-down-menu__divider" className={clsx(styles.divider, item.className)} key={key}>{item.label}</li>
      );
    }
    return (
      <li
        role="menuitem"
        data-lens-element="drop-down-menu__list_item"
        key={key}
        className={clsx(item.className, { [styles.dropDownMenuListActiveItem]: activeId === item.id })}
        onClick={handleItemClick(item)}
      >{item.label}
      </li>
    );
  }), [items, handleItemClick, activeId]);

  const toggleMenu = useCallback(() => setIsOpen((open) => !open), []);

  useEffect(() => {
    if (timeout.current) return;
    if (!isOpen) {
      timeout.current = setTimeout(() => {
        setIsVisible(false);
        timeout.current = null;
      }, 200);
    } else {
      setIsVisible(true);
    }
  }, [isOpen]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="drop-down-menu"
      className={clsx(styles.dropDownMenu, className)}
      onClick={toggleMenu}
      ref={ref}
    >
      <span ref={reference}>
        <div className={styles.dropDownMenuChildren} data-lens-element="drop-down-menu__content">
          {children}
        </div>
        {!disableChevron && (
          <div className={styles.dropDownMenuChevron} data-lens-element="drop-down-menu__chevron">
            <Icon name="BsChevronDown" />
          </div>
        ) }
      </span>
      {isVisible && (
        ReactDOM.createPortal(
          (
            <div
              role="list"
              className={clsx(styles.dropDownMenuList, !isOpen && styles.dropDownMenuListHide, dropDownClassName)}
              data-lens-element="drop-down-menu__list"
              ref={floating}
              style={{
                '--strategy': strategy,
                '--y': y ? `${y}px` : undefined,
                '--x': x ? `${x}px` : undefined,
              } as React.CSSProperties}
            >
              <ul data-lens-element="drop-down-menu__ul">
                {listItems}
              </ul>
            </div>
          ), getPortalContainer('lens-ui-drop-down-menu__list-portal'),
        )
      )}
    </div>
  );
}

export default DropDownMenu;
