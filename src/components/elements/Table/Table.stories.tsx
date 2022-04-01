/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { TableClumnsRecordType, ITableItem } from './Table.types';
import Icon from '../Icon/Icon';

export default {
  title: '2. Components/Table',
  component: Table,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Table>;

const TableTemplate: ComponentStory<typeof Table> = (args) => <Table {...args} />;

interface IItemTypeData extends ITableItem {
  id: number;
  name: string;
  phone: string;
}

const columnsData: TableClumnsRecordType<IItemTypeData> = {
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
  { id: 1, name: 'Alexa', phone: '(11) 97885-8888' },
  { id: 2, name: 'Ok', phone: '(22) 92365-1235' },
  { id: 3, name: 'Ciri', phone: '(33) 91258-4783' },
  {
    id: 4, name: 'Helena', phone: '(44) 94521-8725', rowIntent: 'danger',
  },
];

export const _Table = TableTemplate.bind({});
_Table.args = {
  cols: columnsData,
  items: itemsData,
};
