import clsx from 'clsx';
import React from 'react';
import useTheme from '../../../hooks/use-theme';
import { ITestableProps } from '../../../types';
import styles from './Card.module.scss';

const CardLink: React.FC<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => {
  const [theme] = useTheme();

  return (
    <a
      {...props as any}
      data-testid={testingID}
      data-lens-element="card__link"
      className={clsx(styles.cardLink, theme, className)}
    >
      {children}
    </a>
  );
};

export default CardLink;
