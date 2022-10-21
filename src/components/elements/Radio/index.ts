import { CompoundedComponentWithRefType } from '../../../types';
import Radio from './Radio';
import { IRadioProps } from './Radio.types';
import RadioGroup from './RadioGroup';

interface ICompoundedComponent extends CompoundedComponentWithRefType<IRadioProps, HTMLDivElement> {
  Group: typeof RadioGroup;
}

export default Object.assign(Radio, {
  Group: RadioGroup,
}) as ICompoundedComponent;
