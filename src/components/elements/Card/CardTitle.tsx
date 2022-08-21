import clsx from 'clsx';
import React from 'react';
import { ICardTitleProps } from './Card.types';
import styles from './Card.module.scss';
import useTheme from '../../../hooks/use-theme';

const CardTitle: React.FC<ICardTitleProps> = ({
  children, className, subtitle, testingID, ...props
}) => {
  const theme = useTheme();

  if (subtitle) {
    return (
      <h6
        {...props as any}
        data-lens-element="card__subtitle"
        data-testid={testingID}
        className={clsx(styles.cardSubtitle, theme, className)}
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
      className={clsx(styles.cardTitle, theme, className)}
    >
      {children}
    </h4>
  );
};

export default CardTitle;
