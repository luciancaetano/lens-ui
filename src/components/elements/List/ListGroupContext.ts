import React from 'react';

export interface IListGroupContext {
  expanded?: boolean;
  onExpand?: () => void;
  setExpanded?: (expanded: boolean) => void;
  parentContext?: IListGroupContext;
}

export default React.createContext<IListGroupContext | undefined>(undefined);
