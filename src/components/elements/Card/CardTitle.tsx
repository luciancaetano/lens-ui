import clsx from 'clsx';
import React from 'react';
import { ICardTitleProps } from './Card.types';
import { CLASSES } from '../../../css-classes';
import styles from './Card.module.scss';

const CardTitle: React.FC<ICardTitleProps> = ({
  children, className, subtitle, testingID, ...props
}) => {
  if (subtitle) {
    return (
      <h6
        {...props as any}
        data-lens-card-element="subtitle"
        data-testid={testingID}
        className={clsx(styles.cardSubtitle, CLASSES.ComponentName('CardTitle'), CLASSES.ComponentName('CardTitle--subtitle'), className)}
      >
        {children}
      </h6>
    );
  }

  return (
    <h4
      {...props as any}
      data-lens-card-element="title"
      data-testid={testingID}
      className={clsx(styles.cardTitle, CLASSES.ComponentName('CardTitle'), className)}
    >
      {children}
    </h4>
  );
};

export default CardTitle;
