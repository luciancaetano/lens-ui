import clsx from 'clsx';
import React from 'react';
import { ITestableProps } from '../../../types';
import styles from './Card.module.scss';

const CardLink: React.FC<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & ITestableProps> = function ({
  children, className, testingID, ...props
}) {
  return (
    <a
      {...props as any}
      data-testid={testingID}
      data-lens-element="card__link"
      className={clsx(styles.cardLink, className)}
    >
      {children}
    </a>
  );
};

export default CardLink;
