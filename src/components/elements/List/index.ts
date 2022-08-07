import React from 'react';
import List from './List';
import { IListProps } from './List.types';
import ListItem from './ListItem';

interface ICompoundedComponent extends React.ForwardRefExoticComponent<IListProps> {
  Item: typeof ListItem;
}

export default Object.assign(List, {
  Item: ListItem,
}) as ICompoundedComponent;
