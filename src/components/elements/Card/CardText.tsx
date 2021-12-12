import clsx from 'clsx';
import React from 'react';
import { ICardTextProps } from './Card.types';
import styles from './Card.module.scss';

const CardText: React.FC<ICardTextProps> = function ({
  children, className, testingID, ...props
}) {
  return (
    <p
      {...props as any}
      data-testid={testingID}
      data-lens-element="card__text"
      className={clsx(styles.cardText, className)}
    >
      {children}
    </p>
  );
};

export default CardText;
