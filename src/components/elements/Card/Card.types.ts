import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface ICardProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLDivElement> {
  intent?: IntentType;
}

export interface ICardImageProps extends ITestableProps, React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  roudTop?: boolean;
  roudBottom?: boolean;
  alt?: string;
}

export interface ICardTitleProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement>{
  subtitle?: boolean;
}

export interface ICardTextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement>, ITestableProps {

}
