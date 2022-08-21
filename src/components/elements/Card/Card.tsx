import clsx from 'clsx';
import React from 'react';
import { ICardProps } from './Card.types';
import styles from './Card.module.scss';
import useTheme from '../../../hooks/use-theme';

/**
 * Cards are used to display content in a way that is easily digestible and discoverable.
 */
const Card: React.FC<ICardProps> = ({
  children, className, intent, testingID, ...props
}) => {
  const theme = useTheme();

  return (
    <div
      {...props as any}
      data-testid={testingID}
      data-lens-element="card"
      data-lens-intent={intent}
      className={clsx(
        styles.card,
        theme,
        intent && styles[`card--bg-${intent}`],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
