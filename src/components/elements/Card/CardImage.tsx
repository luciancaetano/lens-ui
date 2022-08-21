import clsx from 'clsx';
import React from 'react';
import { ICardImageProps } from './Card.types';
import styles from './Card.module.scss';
import useTheme from '../../../hooks/use-theme';

const CardImage: React.FC<ICardImageProps> = ({
  className, roudTop, roudBottom, testingID, alt, ...props
}) => {
  const theme = useTheme();

  return (
    <img
      {...props as any}
      data-testid={testingID}
      data-lens-element="card__image"
      alt={alt}
      className={clsx(
        roudTop && styles['card-image--image-top'],
        roudBottom && styles['card-image--image-bottom'],
        theme,
        className,
      )}
    />
  );
};

export default CardImage;
