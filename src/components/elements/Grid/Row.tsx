import clsx from 'clsx';
import React, { useMemo } from 'react';
import { IRowProps } from './Grid.types';
import styles from './styles/Grid.module.scss';
import { sortBreakpoints } from './utils';

const Row = React.forwardRef<HTMLDivElement, IRowProps>(({
  className, testingID, id, children, around, between, bottom, center, end, middle, reverse, start, top, evenly, ...props
}, ref) => {
  const classes = useMemo(() => clsx(
    styles.row,
    reverse && styles.rowReverse,
    start && start.sort(sortBreakpoints).map((b) => styles[`row--start-${b}`]),
    evenly && evenly.sort(sortBreakpoints).map((b) => styles[`row--evenly-${b}`]),
    center && center.sort(sortBreakpoints).map((b) => styles[`row--center-${b}`]),
    end && end.sort(sortBreakpoints).map((b) => styles[`row--end-${b}`]),
    top && top.sort(sortBreakpoints).map((b) => styles[`row--top-${b}`]),
    middle && middle.sort(sortBreakpoints).map((b) => styles[`row--middle-${b}`]),
    bottom && bottom.sort(sortBreakpoints).map((b) => styles[`row--bottom-${b}`]),
    around && around.sort(sortBreakpoints).map((b) => styles[`row--around-${b}`]),
    between && between.sort(sortBreakpoints).map((b) => styles[`row--between-${b}`]),
    className,
  ), [around, between, bottom, center, className, end, evenly, middle, reverse, start, top]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="grid__row"
      className={classes}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Row;
