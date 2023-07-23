import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { IPaginatorProps } from './Paginator.types';
import styles from './Paginator.module.scss';
import { useControllableState, useTheme } from '../../../hooks';
import Icon from '../Icon/Icon';

const Paginator = React.forwardRef<HTMLUListElement, IPaginatorProps>(({
  className, testingID, id, count, pageNeighbours = 1, intent = undefined, currentPage: currentPageProp, outlined, disabled,
  defaultCurrentPage, firstIcon, itemRender, lastIcon, nextIcon, onChange, showLastItem = true,
  prevIcon, showFirstButton, showLastButton, size, showNextButton = true, showPreviousButton = true, tabIndex, ...props
}, ref) => {
  const [theme, { defaultSize }] = useTheme();
  const [currentPage, setCurrentPage] = useControllableState<number>(currentPageProp ?? 1, {
    defaultValue: defaultCurrentPage ?? 1,
    onChange,
  });

  const handlePagination = useCallback((page: number) => {
    setCurrentPage(page);
  }, [setCurrentPage]);

  const basicItemClassNames = clsx(
    styles.paginator__item,
    styles[`paginator__item--size-${size || defaultSize}`],
    outlined && styles['paginator__item--outlined'],
    disabled && styles['paginator__item--disabled'],
  );

  const basicItemButtonClassNames = clsx(
    styles.paginator__item__button,
    styles[`paginator__item__button--intent-${outlined ? `outlined-${intent || 'default'}` : `solid-${intent || 'default'}`}`],
    styles[`paginator__item__button--size-${size || defaultSize}`],
    styles[`paginator__item__button--intent-${outlined ? `outlined-${intent || 'default'}` : `solid-${intent || 'default'}`}`],
    outlined && styles['paginator__item__button--outlined'],
    disabled && styles['paginator__item__button--disabled'],
  );

  const renderItem = useCallback((i: number) => (
    <li
      key={i}
      className={clsx(
        basicItemClassNames,
        currentPage === i && styles['paginator__item--active'],
      )}
      data-lens-element="paginator__item"
    >
      <button
        type="button"
        className={clsx(basicItemButtonClassNames, currentPage === i && styles[`paginator__item__button--intent-${outlined ? `outlined-${intent || 'default'}` : `solid-${intent || 'default'}`}--active`])}
        onClick={() => handlePagination(i)}
        disabled={disabled}
        data-lens-element="paginator__item__button"
        tabIndex={(tabIndex || 0) + i}
      >
        {itemRender ? itemRender({
          active: currentPage === i, disabled: !!disabled, onClick: () => handlePagination(i), page: i,
        }) : i}
      </button>

    </li>
  ), [basicItemButtonClassNames, basicItemClassNames, disabled, handlePagination, intent, itemRender, outlined, currentPage, tabIndex]);

  const paginationItems = React.useMemo<React.ReactNode[]>(() => {
    const items = [];

    let from = Math.max(1, currentPage - pageNeighbours);
    let to = Math.min(count, currentPage + pageNeighbours);

    if (from - 1 < pageNeighbours) {
      to = Math.min(count, pageNeighbours * 2 + 1);
    }

    if (count - to < pageNeighbours) {
      from = Math.max(1, count - pageNeighbours * 2);
    }

    for (let i = from; i <= to; i++) {
      items.push(renderItem(i));
    }
    return items;
  }, [currentPage, pageNeighbours, count, renderItem]);

  const showTreeDots = useMemo(() => showLastItem && count > pageNeighbours * 2 + 2, [count, pageNeighbours, showLastItem]);

  const handleNextClick = useCallback(() => {
    if (currentPage && currentPage < count) {
      handlePagination(currentPage + 1);
    }
  }, [count, handlePagination, currentPage]);

  const handlePrevClick = useCallback(() => {
    if (currentPage && currentPage > 1) {
      handlePagination(currentPage - 1);
    }
  }, [handlePagination, currentPage]);

  const handleLastClick = useCallback(() => {
    if (currentPage && currentPage < count) {
      handlePagination(count);
    }
  }, [count, handlePagination, currentPage]);

  const handleFirstClick = useCallback(() => {
    if (currentPage && currentPage > 1) {
      handlePagination(1);
    }
  }, [handlePagination, currentPage]);

  return (
    <ul
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="paginator"
      data-lens-intent={intent}
      className={clsx(
        styles.paginator,
        theme,
        className,
      )}
      ref={ref}
    >
      {showFirstButton && (
        <li
          className={clsx(styles.paginatorItem, basicItemClassNames)}
          data-lens-element="paginator__first-button"
        >
          <button
            type="button"
            className={clsx(basicItemButtonClassNames, styles.paginatorItemButtonFirst, currentPage === 1 && styles['paginator__item--disabled'])}
            onClick={handleFirstClick}
            disabled={disabled || currentPage === 1}
            data-lens-element="paginator__first-button__button"
          >
            {firstIcon || <Icon name="MdFirstPage" className={clsx(styles.paginator__item__button__icon, styles[`paginator__item__button__icon--size-${size || defaultSize}`])} />}
          </button>
        </li>
      )}
      {showPreviousButton && (
        <li
          className={clsx(styles.paginatorItem, basicItemClassNames)}
          data-lens-element="paginator__prev-button"
        >
          <button
            type="button"
            className={clsx(basicItemButtonClassNames, styles.paginatorItemButtonPrev, currentPage === 1 && styles['paginator__item--disabled'])}
            onClick={handlePrevClick}
            disabled={disabled || currentPage === 1}
            data-lens-element="paginator__prev-button__button"
          >
            {prevIcon || <Icon name="MdChevronLeft" className={clsx(styles.paginator__item__button__icon, styles[`paginator__item__button__icon--size-${size || defaultSize}`])} />}
          </button>
        </li>
      )}
      {paginationItems}
      {showTreeDots && (
        <>
          <li
            className={clsx(styles.paginator__dots, styles[`paginator__dots--size-${size || defaultSize}`], styles[`paginator__dots--intent-${outlined ? `outlined-${intent || 'default'}` : `solid-${intent || 'default'}`}`])}
            data-lens-element="paginator__next-button"
          >
            <button
              type="button"
              className={clsx(styles.paginator__dots__button, styles[`paginator__dots__button--size-${size || defaultSize}`], styles[`paginator__dots__button--intent-${outlined ? `outlined-${intent || 'default'}` : `solid-${intent || 'default'}`}`])}
              disabled
              data-lens-element="paginator__item__dots"
              aria-disabled
            >
              ...
            </button>
          </li>
          {renderItem(count)}
        </>
      )}
      {showNextButton && (
        <li
          className={clsx(styles.paginatorItem, basicItemClassNames)}
          data-lens-element="paginator__next-button"
        >
          <button
            type="button"
            className={clsx(basicItemButtonClassNames, styles.paginatorItemButtonNext, currentPage === count && styles['paginator__item--disabled'])}
            onClick={handleNextClick}
            disabled={disabled || currentPage === count}
            data-lens-element="paginator__next-button__button"
          >
            {nextIcon || <Icon name="MdChevronRight" className={clsx(styles.paginator__item__button__icon, styles[`paginator__item__button__icon--size-${size || defaultSize}`])} />}
          </button>
        </li>
      )}
      {showLastButton && (
        <li
          className={clsx(styles.paginatorItem, basicItemClassNames)}
          data-lens-element="paginator__last-button"
        >
          <button
            type="button"
            className={clsx(basicItemButtonClassNames, styles.paginatorItemButtonLast, currentPage === count && styles['paginator__item--disabled'])}
            onClick={handleLastClick}
            disabled={disabled || currentPage === count}
            data-lens-element="paginator__last-button__button"
          >
            {lastIcon || <Icon name="MdLastPage" className={clsx(styles.paginator__item__button__icon, styles[`paginator__item__button__icon--size-${size || defaultSize}`])} />}
          </button>
        </li>
      )}
    </ul>
  );
});

export default Paginator;
