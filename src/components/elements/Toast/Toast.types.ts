import { IPropsWithClassName, IPropsWithId, ITestableProps } from '../../../types';
import { IToastData } from '../../providers/ToastProvider/ToastProvider.types';

export interface IToastProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  data: IToastData;
}
