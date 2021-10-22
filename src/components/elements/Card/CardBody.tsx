import clsx from 'clsx';
import React from 'react';
import { HTMLElementPropsType, ITestableProps } from '../../../types';
import { CardBodyStyle } from './Card.styles';
import { CLASSES } from '../../../css-classes';

const CardBody: React.FC<HTMLElementPropsType<HTMLDivElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => (
  <CardBodyStyle {...props as any} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-card__body', className)}>
    {children}
  </CardBodyStyle>
);

export default CardBody;
