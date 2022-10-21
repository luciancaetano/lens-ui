import React from 'react';

export interface ITestableProps {
  testingID?: string;
}

export type CompoundedComponentWithRefType<Props, Ref> = React.ForwardRefExoticComponent<Props & React.RefAttributes<Ref>>;

export type SizeType = 'small' | 'medium' | 'large';
