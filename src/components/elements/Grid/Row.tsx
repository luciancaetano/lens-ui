import clsx from 'clsx';
import React from 'react';
import { IRowProps } from './Grid.types';
import styles from './Grid.module.scss';

const Row = React.forwardRef<HTMLDivElement, IRowProps>(({
  className, testingID, id, children, around, between, bottom, center, end, middle, reverse, start, top, ...props
}, ref) => (
  <div
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-element="row"
    className={clsx(
      styles.row,
      'row',
      start && start.map((b) => `start-${b}`),
      center && center.map((b) => `center-${b}`),
      end && end.map((b) => `end-${b}`),
      top && top.map((b) => `top-${b}`),
      middle && middle.map((b) => `middle-${b}`),
      bottom && bottom.map((b) => `bottom-${b}`),
      around && around.map((b) => `around-${b}`),
      between && between.map((b) => `between-${b}`),
      reverse && 'reverse',
      className,
    )}
    ref={ref}
  >
    {children}
  </div>
));

export default Row;
