import React from 'react';

import Table from '../../src/components/elements/Table/Table';
import Icon from '../../src/components/elements/Icon/Icon';
import { ITableColumns, ITableItem } from '../../src/components/elements/Table/Table.types';
import LensProvider from '../../src/components/providers/LensProvider/LensProvider';

export default {
  component: Table,
  title: 'Data Presentation/Table',
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

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

export const _Table = () => (
  <LensProvider>
    <Table columns={columnsData} items={itemsData} />
  </LensProvider>
);
