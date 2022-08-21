import clsx from 'clsx';
import React from 'react';
import useTheme from '../../../hooks/use-theme';
import { ITestableProps } from '../../../types';
import styles from './Card.module.scss';

const CardBody: React.FC<React.HtmlHTMLAttributes<HTMLDivElement> & ITestableProps> = ({
  children, className, testingID, ...props
}) => {
  const theme = useTheme();

  return (
    <div
      {...props as any}
      data-testid={testingID}
      data-lens-element="card__body"
      className={clsx(styles.cardBody, theme, className)}
    >
      {children}
    </div>
  );
};

export default CardBody;
