/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import styles from './DropDownMenu.module.scss';
import {
  IDropDownMenuProps, IDropdownClickableItemType,
} from './DropDownMenu.types';
import Icon from '../Icon/Icon';
import { getPortalContainer, Layers } from '../../../utils';
import { useOnClickOutside } from '../../../hooks';

/**
 * DropDownMenu display a list of choices on temporary surfaces.
 */
function DropDownMenu<TPayload = any | undefined>({
  className, testingID, id, children, items, onItemClick, offset, activeId, dropDownClassName, ...props
}: IDropDownMenuProps<TPayload>) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { attributes, ...popper } = usePopper(referenceElement, popperElement, {
    modifiers: [
      ...(offset ? [{ name: 'offset', options: { offset } }] : []),
      {
        name: 'preventOverflow',
        options: {
          padding: 8,
        },
      },
    ],
  });

  useOnClickOutside(ref, () => setOpen(false));

  const handleItemClick = useCallback((item: IDropdownClickableItemType<TPayload>) => () => {
    if (onItemClick) {
      onItemClick(item);
    }
  }, [onItemClick]);

  const listItems = useMemo(() => {
    if (!isOpen) { return null; }

    return items.map((item: IDropdownClickableItemType<TPayload>, key) => {
      if ((item as any).divider) {
        return (
          <li role="menuitem" data-lens-element="drop-down-menu__list_item" className={clsx(styles.divider, item.className)} key={key}>{item.label}</li>
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
    });
  }, [isOpen, items, handleItemClick, activeId]);

  const toggleMenu = useCallback(() => setOpen((open) => !open), []);

  return (
    <div
      {...props}
      id={id}
      ref={setReferenceElement}
      data-testid={testingID}
      data-lens-element="drop-down-menu"
      className={clsx(styles.dropDownMenu, className)}
      onClick={toggleMenu}
    >
      <div className={styles.dropDownMenuChildren} data-lens-element="drop-down-menu__content">
        {children}
      </div>
      <div className={styles.dropDownMenuChevron} data-lens-element="drop-down-menu__chevron">
        <Icon name="BsChevronDown" />
      </div>
      {isOpen && (
        ReactDOM.createPortal(
          (
            <div
              role="list"
              className={clsx(styles.dropDownMenuList, dropDownClassName)}
              data-lens-element="drop-down-menu__list"
              ref={(r) => {
                ref.current = r;
                setPopperElement(r);
              }}
              {...attributes.popper}
              style={{
                ...popper.styles.popper,
                zIndex: Layers.OverlaySurfaces,
              }}
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
