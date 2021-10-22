import clsx from 'clsx';
import React from 'react';
import { CardTitleStyle, CardSubTitleStyle } from './Card.styles';
import { ICardTitleProps } from './Card.types';
import { CLASSES } from '../../../css-classes';

const CardTitle: React.FC<ICardTitleProps> = ({
  children, className, subtitle, testingID, ...props
}) => {
  if (subtitle) {
    return (
      <CardSubTitleStyle {...props as any} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-card__subtitle', { subtitle }, className)}>
        {children}
      </CardSubTitleStyle>
    );
  }

  return (
    <CardTitleStyle {...props as any} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-card__title', { subtitle }, className)}>
      {children}
    </CardTitleStyle>
  );
};

export default CardTitle;
