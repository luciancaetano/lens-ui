import React from 'react';
import { IBaseTabProps } from './Tabs.types';

export interface ITabsContextType {
  register: (tabId: string, props: IBaseTabProps) => void;
  unregister: (tabId: string) => void;
  updateProps: (tabId: string, props: IBaseTabProps) => void;
  registred: (tabId: string) => boolean;
  activeId: string | null;
  vertical?: boolean;
  onCloseTab?: (tabId: string) => void;
  getIndex:(tabId: string) => number;
}

export default React.createContext<ITabsContextType>({
  register: () => {},
  activeId: null,
  unregister: () => {},
  updateProps: () => {},
  registred: () => false,
  getIndex: () => -1,
});
