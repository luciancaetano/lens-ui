import clsx from 'clsx';
import React from 'react';
import { CardImageStyle } from './Card.styles';
import { ICardImageProps } from './Card.types';

const CardImage: React.FC<ICardImageProps> = ({
  children, className, roudTop, roudBottom, testingID, ...props
}) => (
  <CardImageStyle {...props as any} data-testid={testingID} className={clsx('lens-ui-card__image', roudTop && 'image-top', roudBottom && 'image-bottom', className)}>
    {children}
  </CardImageStyle>
);

export default CardImage;
