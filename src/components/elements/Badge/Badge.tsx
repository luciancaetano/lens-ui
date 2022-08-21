import clsx from 'clsx';
import React from 'react';
import { IBadgeProps } from './Badge.types';
import styles from './Badge.module.scss';
import useTheme from '../../../hooks/use-theme';

/**
 * Badge generates a small badge to the top-right of its child(ren).
 */
const Badge:React.FC<IBadgeProps> = ({
  className, testingID, id, children, intent = 'primary', type = 'solid', ...props
}) => {
  const theme = useTheme();
  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-intent={intent}
      data-lens-element="badge"
      className={clsx(
        styles.badge,
        theme,
        styles[`badge--${type}-${intent}`],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
