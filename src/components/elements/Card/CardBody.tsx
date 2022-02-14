import clsx from 'clsx';
import React from 'react';
import { ITestableProps } from '../../../types';
import styles from './Card.module.scss';

const CardBody: React.FC<React.HtmlHTMLAttributes<HTMLDivElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => (
  <div
    {...props as any}
    data-testid={testingID}
    data-lens-element="card__body"
    className={clsx(styles.cardBody, className)}
  >
    {children}
  </div>
);

export default CardBody;
