/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuList from './MenuList';
import { IMenuListProps, IMenuListItemType } from './MenuList.types';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/MenuList',
  component: MenuList,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof MenuList>;

const MenuListTemplate: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args} />
);

const itemsData = (intent: any): IMenuListItemType[] => [
  { content: intent || 'Item 1' },
  { content: 'Heading', isHeading: true },
  { content: intent || 'Item 2' },
  { content: intent || 'Item 3' },
  { content: intent || 'Item 4' },
];

export const _MenuList = MenuListTemplate.bind({});

_MenuList.args = {
  items: itemsData(null),
} as IMenuListProps;
