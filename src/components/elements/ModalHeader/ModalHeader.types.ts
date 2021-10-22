import {
  IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface IModalHeaderProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  onClose?: (reason: 'x-close-header') => void;
}
