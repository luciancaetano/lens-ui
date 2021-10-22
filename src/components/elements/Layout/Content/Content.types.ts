import { IPropsWithClassName, ITestableProps } from '../../../../types';

export interface ILayoutContentProps extends ITestableProps, IPropsWithClassName {
  layout?: 'horizontal' | 'vertical';
}
