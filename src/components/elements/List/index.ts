import { CompoundedComponentWithRefType } from '../../../types';
import List from './List';
import { IListProps } from './List.types';
import ListGroup from './ListGroup';
import ListItem from './ListItem';

interface ICompoundedComponent extends CompoundedComponentWithRefType<IListProps, HTMLDivElement> {
  Item: typeof ListItem;
  Group: typeof ListGroup;
}

export default Object.assign(List, {
  Item: ListItem,
  Group: ListGroup,
}) as ICompoundedComponent;
