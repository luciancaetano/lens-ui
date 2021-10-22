import { IPropsWithClassName, IPropsWithId, ITestableProps } from '../../../types';

export interface IButtonGroupProps extends IPropsWithClassName, ITestableProps, IPropsWithId {
  vertical?: boolean;
}
