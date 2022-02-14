import clsx from 'clsx';
import React from 'react';
import { IBadgeProps } from './Badge.types';
import styles from './Badge.module.scss';

/**
 * Badge generates a small badge to the top-right of its child(ren).
 */
const Badge:React.FC<IBadgeProps> = ({
  className, testingID, id, children, intent = 'primary', type = 'solid', ...props
}) => (
  <div
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-intent={intent}
    data-lens-element="badge"
    className={clsx(
      styles.badge,
      styles[`badge--${type}-${intent}`],
      className,
    )}
  >
    {children}
  </div>
);

export default Badge;
