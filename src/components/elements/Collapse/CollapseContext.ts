import React, { useContext } from 'react';

export interface ICollapseContextType {
  activeIds: string[];
  set: (index: string[]) => void;
  expandIcon?: (isActive: boolean) => React.ReactNode;
  singleExpand?: boolean;
}

export const CollapseContext = React.createContext<ICollapseContextType | undefined>(undefined);

export function useCollapseContext() {
  const context = useContext(CollapseContext);

  if (!context) {
    throw new Error('<Collapse.Panel/> must be used within a <Collapse/>');
  }

  return context;
}
