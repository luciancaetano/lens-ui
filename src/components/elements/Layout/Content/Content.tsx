import clsx from 'clsx';
import React from 'react';
import styles from './Content.module.scss';
import { ILayoutContentProps } from './Content.types';

/**
 * The Content component handles content parts of the app
 */
const Content: React.FC<ILayoutContentProps> = function ({
  children, layout = 'vertical', className, testingID, ...props
}) {
  return (
    <div
      {...props}
      data-testid={testingID}
      data-lens-element="layout__content"
      className={clsx(
        styles.content,
        styles[`content--direction-${layout === 'vertical' ? 'column' : 'row'}`],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Content;
