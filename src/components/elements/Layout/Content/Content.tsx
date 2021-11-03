import clsx from 'clsx';
import React from 'react';
import styles from './Content.module.scss';
import { ILayoutContentProps } from './Content.types';

const Content: React.FC<ILayoutContentProps> = ({
  children, layout = 'vertical', className, testingID,
}) => (
  <div
    data-testid={testingID}
    data-lens-element="layout__content"
    className={clsx(
      styles.content, styles[`content--direction-${layout === 'vertical' ? 'column' : 'row'}`],
      className,
    )}
  >
    {children}
  </div>
);

export default Content;
