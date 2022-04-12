import React from 'react';
import { ITestableProps } from '../../../types';

export interface IImageProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}
