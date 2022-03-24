/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './List';
import ListItem from './ListItem';
import { IListProps } from './List.types';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/List',
  component: List,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof List>;

const ListTemplate: ComponentStory<typeof List> = (args) => <List {...args} />;

const itemsData = (intent: any): any[] => [
  <ListItem key="1" intent={intent}>
    {intent || 'Item 1'}
  </ListItem>,
  <ListItem key="1" isHeading>
    {intent || 'Item 2'}
  </ListItem>,
  <ListItem key="1" intent={intent}>
    {intent || 'Item 2'}
  </ListItem>,
  <ListItem key="1" intent={intent}>
    {intent || 'Item 3'}
  </ListItem>,
  <ListItem key="1" intent={intent}>
    {intent || 'Item 4'}
  </ListItem>,
];

export const _List = ListTemplate.bind({});

_List.args = {
  children: itemsData('primary'),
  activeIndex: 2,
  intent: 'primary',
} as IListProps;
