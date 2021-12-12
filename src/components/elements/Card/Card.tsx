import clsx from 'clsx';
import React from 'react';
import { ICardProps } from './Card.types';
import styles from './Card.module.scss';

/**
 * Cards contain content and actions about a single subject.
 */
const Card: React.FC<ICardProps> = function ({
  children, className, intent, testingID, ...props
}) {
  return (
    <div
      {...props as any}
      data-testid={testingID}
      data-lens-element="card"
      data-lens-intent={intent}
      className={clsx(
        styles.card,
        intent && styles[`card--bg-${intent}`],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
