import { CompoundedComponentWithRefType } from '../../../types';
import Menu from './Menu';
import { IMenuProps } from './Menu.types';
import MenuItem from './MenuItem';

interface ICompoundedComponent extends CompoundedComponentWithRefType<IMenuProps, HTMLDivElement> {
  Item: typeof MenuItem;
}

export default Object.assign(Menu, {
  Item: MenuItem,
}) as ICompoundedComponent;
