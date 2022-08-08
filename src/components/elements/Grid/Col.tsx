import clsx from 'clsx';
import React from 'react';
import { IColProps } from './Grid.types';
import styles from './Grid.module.scss';

const Col:React.FC<IColProps> = ({
  className, testingID, id, children, first, last, lg, md, offsetLg, offsetMd, offsetSm, offsetXs, sm, xs, ...props
}) => (
  <div
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-element="col"
    className={clsx(
      styles.col,
      first && first.map((b) => `first-${b}`),
      last && last.map((b) => `last-${b}`),
      xs && `col-xs-${xs}`,
      sm && `col-sm-${sm}`,
      md && `col-md-${md}`,
      lg && `col-lg-${lg}`,
      offsetXs && `col-xs-offset-${offsetXs}`,
      offsetSm && `col-sm-offset-${offsetSm}`,
      offsetMd && `col-md-offset-${offsetMd}`,
      offsetLg && `col-lg-offset-${offsetLg}`,
      className,
    )}
  >
    {children}
  </div>
);

export default Col;
