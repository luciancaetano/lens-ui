import clsx from 'clsx';
import React from 'react';
import { CLASSES } from '../../../css-classes';
import { IBadgeProps } from './Badge.types';
import styles from './Badge.module.scss';

console.log(styles);

const Badge:React.FC<IBadgeProps> = ({
  className, testingID, id, children, intent = 'primary',
}) => (
  <div
    id={id}
    data-testid={testingID}
    className={clsx(
      styles.badge,
      styles[`badge--intent-${intent}`],
      CLASSES.ComponentName('Badge'),
      className,
    )}
  >
    {children}
  </div>
);

export default Badge;
