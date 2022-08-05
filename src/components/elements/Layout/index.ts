import React from 'react';
import { ITestableProps } from '../../../types';
import AppLayout from './AppLayout/AppLayout';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

interface ICompoundedComponent extends React.ForwardRefExoticComponent<ITestableProps & React.HtmlHTMLAttributes<HTMLDivElement>> {
  Content: typeof Content;
  Sidebar: typeof Sidebar;
}

export default Object.assign(AppLayout, {
  Content, Sidebar,
}) as ICompoundedComponent;
