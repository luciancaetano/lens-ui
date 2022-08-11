import React from 'react';
import { IBottomNavigationContextData } from './BottomNavigationContext.types';

export default React.createContext<IBottomNavigationContextData>({
  activeId: null,
  onSelect: () => {},
});
