import clsx from 'clsx';
import React from 'react';
import { HTMLElementPropsType, ITestableProps } from '../../../types';
import { CardTextStyle } from './Card.styles';
import { CLASSES } from '../../../css-classes';

const CardText: React.FC<HTMLElementPropsType<HTMLParagraphElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => (
  <CardTextStyle {...props as any} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-card__text', className)}>
    {children}
  </CardTextStyle>
);

export default CardText;
