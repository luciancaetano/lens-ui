import clsx from 'clsx';
import React from 'react';
import { ITestableProps } from '../../../types';
import { CLASSES } from '../../../css-classes';
import styles from './Card.module.scss';

const CardLink: React.FC<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => (
  <a
    {...props as any}
    data-testid={testingID}
    data-lens-card-element="link"
    className={clsx(styles.cardLink, CLASSES.ComponentName('CardLink'), className)}
  >
    {children}
  </a>
);

export default CardLink;
