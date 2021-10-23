import React from 'react';

export interface IPropsWithClassName {
  className?: string;
}

export interface IPropsWithId {
  id?: string;
}

export interface ITestableProps {
  testingID?: string;
}

export type HTMLElementPropsType<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
