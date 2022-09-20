import { CompoundedComponentWithRefType } from '../../../types';
import List from './List';
import { IListProps } from './List.types';
import ListItem from './ListItem';

interface ICompoundedComponent extends CompoundedComponentWithRefType<IListProps, HTMLDivElement> {
  Item: typeof ListItem;
}

export default Object.assign(List, {
  Item: ListItem,
}) as ICompoundedComponent;
