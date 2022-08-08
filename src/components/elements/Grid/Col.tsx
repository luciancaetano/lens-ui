import clsx from 'clsx';
import React, { useMemo } from 'react';
import { IColProps } from './Grid.types';
import styles from './styles/Grid.module.scss';
import { sortBreakpoints } from './utils';

const Col:React.FC<IColProps> = ({
  className, testingID, id, children, first, last, lg, md, offsetLg, offsetMd, offsetSm, offsetXs, sm, xs, reverse, ...props
}) => {
  const classes = useMemo(() => clsx(
    styles.col,
    reverse && styles.colReverse,
    first && first.sort(sortBreakpoints).map((b) => styles[`col--first-${b}`]),
    last && last.sort(sortBreakpoints).map((b) => styles[`col--last-${b}`]),
    xs && (xs === true ? styles['col--xs'] : styles[`col--xs-${xs}`]),
    sm && (sm === true ? styles['col--sm'] : styles[`col--sm-${sm}`]),
    md && (md === true ? styles['col--md'] : styles[`col--md-${md}`]),
    lg && (lg === true ? styles['col--lg'] : styles[`col--lg-${lg}`]),
    offsetXs && styles[`col--xs-offset-${offsetXs}`],
    offsetSm && styles[`col--sm-offset-${offsetSm}`],
    offsetMd && styles[`col--md-offset-${offsetMd}`],
    offsetLg && styles[`col--lg-offset-${offsetLg}`],
    className,
  ), [className, first, last, lg, md, offsetLg, offsetMd, offsetSm, offsetXs, reverse, sm, xs]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="grid__col"
      className={classes}
    >
      {children}
    </div>
  );
};

export default Col;
