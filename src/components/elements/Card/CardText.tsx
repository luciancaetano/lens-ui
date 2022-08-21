import clsx from 'clsx';
import React from 'react';
import { ICardTextProps } from './Card.types';
import styles from './Card.module.scss';
import useTheme from '../../../hooks/use-theme';

const CardText: React.FC<ICardTextProps> = ({
  children, className, testingID, ...props
}) => {
  const [theme] = useTheme();

  return (
    <p
      {...props as any}
      data-testid={testingID}
      data-lens-element="card__text"
      className={clsx(styles.cardText, theme, className)}
    >
      {children}
    </p>
  );
};

export default CardText;
