import React from 'react';
import { IntentType, HTMLElementPropsType, ITestableProps } from '../../../types';

export interface ICardProps extends ITestableProps, HTMLElementPropsType<HTMLDivElement> {
  background?: IntentType;
}

export interface ICardImageProps extends ITestableProps, React.DetailedHTMLProps< React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  roudTop?: boolean;
  roudBottom?: boolean;
}

export interface ICardTitleProps extends ITestableProps, HTMLElementPropsType<HTMLParagraphElement>{
  subtitle?: boolean;
}
