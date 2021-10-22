import clsx from 'clsx';
import clamp from 'lodash/clamp';
import isString from 'lodash/isString';
import React, { useMemo } from 'react';
import { ProgressBarContainer, Progress, ProgressBarSizeValues } from './ProgressBar.styles';
import { IProgressBarProps } from './ProgressBar.types';

const ProgressBar = React.forwardRef<HTMLDivElement, IProgressBarProps>(({
  className, testingID, id, progress, intent = 'primary', withLabel, size = 'normal', striped,
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
    <ProgressBarContainer
      id={id}
      data-testid={testingID}
      className={clsx('lens-ui-progress-bar', className, { striped })}
      size={height}
      ref={ref}
    >
      <Progress
        percent={percent}
        intent={intent}
        role="progressbar"
        className={clsx('lens-ui-progress-bar-progress', { striped }, intent && `intent-${intent}`)}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {withLabel && size !== 'tiny' && percent}
      </Progress>
    </ProgressBarContainer>
  );
});

export default ProgressBar;
