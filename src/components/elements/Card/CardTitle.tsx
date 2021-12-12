import clsx from 'clsx';
import React from 'react';
import { ICardTitleProps } from './Card.types';
import styles from './Card.module.scss';

const CardTitle: React.FC<ICardTitleProps> = function ({
  children, className, subtitle, testingID, ...props
}) {
  if (subtitle) {
    return (
      <h6
        {...props as any}
        data-lens-element="card__subtitle"
        data-testid={testingID}
        className={clsx(styles.cardSubtitle, className)}
      >
        {children}
      </h6>
    );
  }

  return (
    <h4
      {...props as any}
      data-lens-element="card__title"
      data-testid={testingID}
      className={clsx(styles.cardTitle, className)}
    >
      {children}
    </h4>
  );
};

export default CardTitle;
