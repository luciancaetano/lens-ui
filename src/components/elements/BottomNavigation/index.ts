import { CompoundedComponentWithRefType } from '../../../types';
import BottomNavigation from './BottomNavigation/BottomNavigation';
import BottomNavigationAction from './BottomNavigationAction/BottomNavigationAction';
import { IBottomNavigationProps } from './index.types';

interface ICompoundedComponent extends CompoundedComponentWithRefType<IBottomNavigationProps, HTMLDivElement>{
  Action: typeof BottomNavigationAction;
}

export default Object.assign(BottomNavigation, {
  Action: BottomNavigationAction,
}) as ICompoundedComponent;
