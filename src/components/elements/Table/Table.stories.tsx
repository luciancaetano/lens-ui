/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { ITableColumns, ITableItem } from './Table.types';
import Icon from '../Icon/Icon';

export default {
  title: 'Components/Table',
  component: Table,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
} as ComponentMeta<typeof Table>;

const TableTemplate: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
);

interface IItemTypeData extends ITableItem {
  id: number;
  name: string;
  phone: string;
}

const columnsData: ITableColumns<IItemTypeData> = {
  id: {
    header: '#ID',
  },
  name: {
    header: 'Contact Name',
  },
  phone: {
    header: 'Contact Phone',
    cellRenderer: ({ phone }) => <div>{phone}&nbsp;<Icon name="BsPhone" /></div>,
  },
};

const itemsData: IItemTypeData[] = [
  { id: 1, name: 'Lucian', phone: '(11) 97885-8888' },
  { id: 2, name: 'Adriele', phone: '(22) 92365-1235' },
  { id: 3, name: 'Maria', phone: '(33) 91258-4783' },
  {
    id: 4, name: 'Helena', phone: '(44) 94521-8725', rowIntent: 'danger',
  },
  { id: 5, name: 'Clara', phone: '(81) 98546-5564' },
  { id: 6, name: 'Carlos', phone: '(11) 98541-54521' },
];

export const _Table = TableTemplate.bind({});
_Table.args = {
  columns: columnsData,
  items: itemsData,
};
