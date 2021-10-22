import {
  IPropsWithClassName, IPropsWithId, ITestableProps, IntentType,
} from '../../../types';

export interface IBadgeProps extends IPropsWithClassName, ITestableProps, IPropsWithId {
  intent?: IntentType;
}
