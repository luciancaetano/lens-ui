import clsx from 'clsx';
import React from 'react';
import { IBadgeProps } from './Badge.types';
import styles from './Badge.module.scss';

const Badge:React.FC<IBadgeProps> = ({
  className, testingID, id, children, intent = 'primary',
}) => (
  <div
    id={id}
    data-testid={testingID}
    data-lens-intent={intent}
    data-lens-element="badge"
    className={clsx(
      styles.badge,
      styles[`badge--intent-${intent}`],
      className,
    )}
  >
    {children}
  </div>
);

export default Badge;
