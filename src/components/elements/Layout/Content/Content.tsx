import clsx from 'clsx';
import React from 'react';
import styles from './Content.module.scss';
import { ILayoutContentProps } from './Content.types';
import { CLASSES } from '../../../../css-classes';

const Content: React.FC<ILayoutContentProps> = ({
  children, layout = 'vertical', className, testingID,
}) => (
  <div
    data-testid={testingID}
    className={clsx(
      styles.content, styles[`content--direction-${layout === 'vertical' ? 'column' : 'row'}`],
      CLASSES.ComponentName('Layout__Content'),
      className,
    )}
  >
    {children}
  </div>
);

export default Content;
