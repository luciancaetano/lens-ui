import clsx from 'clsx';
import React from 'react';
import styles from './Content.styles';
import { ILayoutContentProps } from './Content.types';
import { CLASSES } from '../../../../css-classes';

const Content: React.FC<ILayoutContentProps> = ({
  children, layout = 'vertical', className, testingID,
}) => (
  <styles.Content
    data-testid={testingID}
    flexDirection={layout === 'vertical' ? 'column' : 'row'}
    className={clsx(CLASSES.FontReset, 'lens-ui-layout__content', className)}
  >
    {children}
  </styles.Content>
);

export default Content;
