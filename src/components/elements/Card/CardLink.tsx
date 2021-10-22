import clsx from 'clsx';
import React from 'react';
import { ITestableProps } from '../../../types';
import { CardLinkStyle } from './Card.styles';
import { CLASSES } from '../../../css-classes';

const CardLink: React.FC<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => (
  <CardLinkStyle {...props as any} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-card__link', className)}>
    {children}
  </CardLinkStyle>
);

export default CardLink;
