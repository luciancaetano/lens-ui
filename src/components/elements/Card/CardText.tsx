import clsx from 'clsx';
import React from 'react';
import { HTMLElementPropsType, ITestableProps } from '../../../types';
import { CLASSES } from '../../../css-classes';
import styles from './Card.module.scss';

const CardText: React.FC<HTMLElementPropsType<HTMLParagraphElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => (
  <p
    {...props as any}
    data-testid={testingID}
    data-lens-card-element="text"
    className={clsx(styles.cardText, CLASSES.ComponentName('CardText'), className)}
  >
    {children}
  </p>
);

export default CardText;
