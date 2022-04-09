import React from 'react';
import clsx from 'clsx';
import { ITypographyProps } from './Typography.types';
import styles from './Typography.module.scss';

const variantMap: { [key: string]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  button: 'span',
};

const Typography: React.FC<ITypographyProps> = ({
  variant, noWrap, intent, children, testingID, align = 'inherit', gutterBottom,
}) => React.createElement(variantMap[variant], {
  style: {
    ...(intent ? {
      '--typography-intent-color': `var(--lens-ui-intents-${intent})`,
    } : {}),
    '--typography-align': align,
    '--typography-gutter-bottom': gutterBottom ? '0.35em' : '0',
  },
  'data-lens-element': 'typography',
  className: clsx(styles.root, styles[variant], noWrap && styles.noWrap),
  ...({ 'data-testid': testingID } as any),
}, children);

export default Typography;
