import clsx from 'clsx';
import React from 'react';
import { CardStyle } from './Card.styles';
import { ICardProps } from './Card.types';
import { CLASSES } from '../../../css-classes';

const Card: React.FC<ICardProps> = ({
  children, className, background = 'default', testingID, ...props
}) => (
  <CardStyle {...props as any} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-card', background !== 'default' && `bg-${background}`, className)}>
    {children}
  </CardStyle>
);

export default Card;
