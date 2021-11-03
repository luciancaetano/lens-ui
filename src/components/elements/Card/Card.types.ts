import React from 'react';
import { IntentType, HTMLElementPropsType, ITestableProps } from '../../../types';

export interface ICardProps extends ITestableProps, HTMLElementPropsType<HTMLDivElement> {
  intent?: IntentType;
}

export interface ICardImageProps extends ITestableProps, React.DetailedHTMLProps< React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  roudTop?: boolean;
  roudBottom?: boolean;
  alt: string;
}

export interface ICardTitleProps extends ITestableProps, HTMLElementPropsType<HTMLParagraphElement>{
  subtitle?: boolean;
}
