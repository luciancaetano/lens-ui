import { CompoundedComponentWithRefType } from '../../../types';
import Tab from './Tab';
import Tabs from './Tabs';
import { ITabsProps } from './Tabs.types';

interface ICompoundedComponent extends CompoundedComponentWithRefType<ITabsProps, HTMLDivElement> {
  Tab: typeof Tab;
}

export default Object.assign(Tabs, {
  Tab,
}) as ICompoundedComponent;
