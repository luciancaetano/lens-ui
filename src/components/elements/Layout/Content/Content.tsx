import clsx from 'clsx';
import React from 'react';
import { useTheme } from '../../../../hooks';
import styles from './Content.module.scss';
import { ILayoutContentProps } from './Content.types';

/**
 * The Content component handles content parts of the app
 */
const Content: React.FC<ILayoutContentProps> = ({
  children, layout = 'vertical', className, testingID, ...props
}) => {
  const [theme] = useTheme();

  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="layout__content"
      className={clsx(
        styles.content,
        styles[`content--direction-${layout === 'vertical' ? 'column' : 'row'}`],
        theme,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Content;
