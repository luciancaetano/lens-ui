import clsx from 'clsx';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import RcSlider from 'rc-slider';
import { ISliderProps } from './Slider.types';
import styles from './Slider.module.scss';
import { useTheme } from '../../../hooks';
import 'rc-slider/assets/index.css';
import { handleRender } from './Handler';

const Slider:React.FC<ISliderProps> = ({
  className, testingID, id, max, min, defaultValue, dots, inputDebounceWait = 50,
  marks, onChange, step, tooltip, reverse, value, vertical, range, allowCross, intent = 'primary', ...props
}) => {
  const [theme] = useTheme();

  const debouncedOnChange = useDebouncedCallback((value: number | number[]) => {
    onChange?.(value);
  }, inputDebounceWait);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="slider"
      className={clsx(
        styles.slider,
        styles[`slider--intent-${intent}`],
        theme,
        className,
      )}
    >
      <RcSlider
        min={min}
        max={max}
        defaultValue={defaultValue}
        value={value}
        vertical={vertical}
        step={step}
        onChange={onChange ? debouncedOnChange : undefined}
        range={!!range}
        dots={dots}
        reverse={reverse}
        handleRender={handleRender(tooltip)}
        {...(range ? { count: range } : {})}
        allowCross={allowCross}
        marks={marks}
      />
    </div>
  );
};

export default Slider;
