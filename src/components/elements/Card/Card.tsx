import clsx from 'clsx';
import React from 'react';
import { ICardProps } from './Card.types';
import { CLASSES } from '../../../css-classes';
import styles from './Card.module.scss';

const Card: React.FC<ICardProps> = ({
  children, className, background, testingID, ...props
}) => (
  <div
    {...props as any}
    data-testid={testingID}
    className={clsx(
      styles.card,
      background && styles[`card--bg-${background}`],
      CLASSES.ComponentName('Card'),
      className,
    )}
  >
    {children}
  </div>
);

export default Card;
