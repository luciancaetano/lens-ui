import clsx from 'clsx';
import React from 'react';
import { ICardImageProps } from './Card.types';
import { CLASSES } from '../../../css-classes';
import styles from './Card.module.scss';

const CardImage: React.FC<ICardImageProps> = ({
  className, roudTop, roudBottom, testingID, alt, ...props
}) => (
  <img
    {...props as any}
    data-testid={testingID}
    data-lens-card-element="image"
    alt={alt}
    className={clsx(
      CLASSES.ComponentName('CardImage'),
      roudTop && styles['card-image--image-top'],
      roudBottom && styles['card-image--image-bottom'],
      className,
    )}
  />
);

export default CardImage;
