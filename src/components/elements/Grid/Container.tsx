import clsx from 'clsx';
import React from 'react';
import { IContainerProps } from './Grid.types';
import styles from './styles/Grid.module.scss';

const Container = React.forwardRef<HTMLDivElement, IContainerProps>(({
  className, testingID, id, children, fluid, ...props
}, ref) => (
  <div
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-element="grid__container"
    className={clsx(
      styles.container,
      fluid && styles.containerFluid,
      className,
    )}
    ref={ref}
  >
    {children}
  </div>
));

export default Container;
