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
};

const Typography: React.FC<ITypographyProps> = ({ variant, noWrap }) => React.createElement(variantMap[variant], {
  style: {
    whiteSpace: noWrap ? 'nowrap' : 'normal',
  },
  className: clsx(styles.root, styles[variant]),
}, 'Typography');

export default Typography;
