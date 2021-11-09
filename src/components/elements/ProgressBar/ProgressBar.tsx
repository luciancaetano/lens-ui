import clsx from 'clsx';
import clamp from 'lodash/clamp';
import isnumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import React, { useMemo } from 'react';
import styles from './ProgressBar.module.scss';
import { IProgressBarProps } from './ProgressBar.types';

const ProgressBarSizeValues = {
  tiny: 0.400,
  normal: 0.625,
  medium: 0.925,
  big: 1.200,
};

/**
 * Progress indicators express the length of a process.
 */
const ProgressBar = React.forwardRef<HTMLDivElement, IProgressBarProps>(({
  className, testingID, id, progress, intent = 'primary', withLabel, size = 'normal', striped, ...props
}, ref) => {
  const percent = useMemo(() => `${clamp(progress, 0, 100)}%`, [progress]);
  const height = useMemo(() => {
    if (size === 'normal') {
      return ProgressBarSizeValues.normal;
    }

    if (size === 'big') {
      return ProgressBarSizeValues.big;
    }

    if (size === 'medium') {
      return ProgressBarSizeValues.medium;
    }

    if (size === 'tiny') {
      return ProgressBarSizeValues.tiny;
    }

    if (isString(size)) {
      return size;
    }

    return ProgressBarSizeValues.normal;
  }, [size]);
  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="progress-bar"
      data-lens-intent={intent}
      className={clsx(styles.progressBar, striped && styles.progressBarStriped, className)}
      style={{ height: isnumber(height) ? `${height}rem` : height }}
      ref={ref}
    >
      <div
        data-lens-element="progress-bar__indicator"
        data-lens-intent={intent}
        role="progressbar"
        className={clsx(
          styles[`progress-bar__indicator-intent-${intent}`],
          striped && styles[`progress-bar__indicator-intent-${intent}--striped`],
        )}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: percent }}
      >
        {withLabel && size !== 'tiny' && percent}
      </div>
    </div>
  );
});

export default ProgressBar;
