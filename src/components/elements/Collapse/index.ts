import React from 'react';
import Collapse from './Collapse';
import { ICollapseProps } from './Collapse.types';
import CollapsePanel from './CollapsePanel';

interface ICompoundedComponent extends React.ForwardRefExoticComponent<ICollapseProps>{
  Panel: typeof CollapsePanel;
}

export default Object.assign(Collapse, {
  Panel: CollapsePanel,
}) as ICompoundedComponent;
