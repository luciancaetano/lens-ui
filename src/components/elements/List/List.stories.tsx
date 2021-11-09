/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './List';
import { IListItem, IListProps } from './List.types';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: 'Components/List',
  component: List,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
} as ComponentMeta<typeof List>;

const ListTemplate: ComponentStory<typeof List> = (args) => (
  <List {...args} />
);

const itemsData = (intent: any): IListItem[] => [
  { content: intent || 'Item 1' },
  { content: 'Heading', isHeading: true },
  { content: intent || 'Item 2' },
  { content: intent || 'Item 3' },
  { content: intent || 'Item 4' },
];

export const _List = ListTemplate.bind({});

_List.args = {
  items: itemsData(null),
  activeIndex: 2,
  intent: 'primary',
} as IListProps;
