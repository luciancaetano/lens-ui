import { SliderProps } from 'rc-slider';
import React from 'react';
import HandleTooltip from './HandleTooltip';

export const handleRender = (tipFormatter?: (value: number) => React.ReactNode, handle?: (value: number) => React.ReactNode): SliderProps['handleRender'] => (node, { value, dragging }) => (
  <HandleTooltip value={value} visible={dragging} tipFormatter={tipFormatter} handle={handle}>
    {node}
  </HandleTooltip>
);
