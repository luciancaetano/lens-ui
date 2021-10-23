import clsx from 'clsx';
import React from 'react';
import { HTMLElementPropsType, ITestableProps } from '../../../types';
import { CLASSES } from '../../../css-classes';
import styles from './Card.module.scss';

const CardBody: React.FC<HTMLElementPropsType<HTMLDivElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => (
  <div
    {...props as any}
    data-testid={testingID}
    data-lens-card-element="body"
    className={clsx(styles.cardBody, CLASSES.ComponentName('CardBody'), className)}
  >
    {children}
  </div>
);

export default CardBody;
