import {
  IntentType, IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface ILoaderProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
  type?: 'eclipse' | 'spinner' | 'oval';
  intent?: IntentType;
  size?: number;
}
