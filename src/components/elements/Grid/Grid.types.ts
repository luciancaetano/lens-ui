import React from 'react';
import { ITestableProps } from '../../../types';

export type GridBreakpointsType = 'xs' | 'sm' | 'md' | 'lg';

export type GridBreakpointsIntervalType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface IRowProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  start?: GridBreakpointsType[];
  center?: GridBreakpointsType[];
  evenly?: GridBreakpointsType[];
  end?: GridBreakpointsType[];
  top?: GridBreakpointsType[];
  middle?: GridBreakpointsType[];
  bottom?: GridBreakpointsType[];
  around?: GridBreakpointsType[];
  between?: GridBreakpointsType[];
  reverse?: boolean;
}

export interface IColProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  first?: GridBreakpointsType[];
  last?: GridBreakpointsType[];

  xs?: GridBreakpointsIntervalType | true;
  sm?: GridBreakpointsIntervalType | true;
  md?: GridBreakpointsIntervalType | true;
  lg?: GridBreakpointsIntervalType | true;

  offsetXs?: GridBreakpointsIntervalType;
  offsetSm?: GridBreakpointsIntervalType;
  offsetMd?: GridBreakpointsIntervalType;
  offsetLg?: GridBreakpointsIntervalType;

  flexBasis?: string;

  reverse?: boolean;
}

export interface IContainerProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  fluid?: boolean;
}
