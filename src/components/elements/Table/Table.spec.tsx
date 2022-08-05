import React from 'react';
import get from 'lodash/get';
import { render } from '@testing-library/react';
import ApplicationProvider from '../../providers/ApplicationProvider/ApplicationProvider';
import Table from './Table';
import { TableClumnsRecordType, ITableItem } from './Table.types';

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
    cellIntent: () => 'primary',
  },
  phone: {
    header: 'Contact Phone',
    cellRenderer: ({ phone }) => <div>{phone}_MyCustomIcon</div>,
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

describe('<Table/>', () => {
  it('render <Table/>', async () => {
    const { getByText } = render(
      <ApplicationProvider>
        <Table cols={columnsData} items={itemsData} />
      </ApplicationProvider>,
    );

    itemsData.forEach((item) => {
      expect(getByText(item.name as string)).toBeInTheDocument();
      expect(getByText(`${item.phone}_MyCustomIcon`)).toBeInTheDocument();
    });

    Object.keys(columnsData).map((k: string) => get(columnsData, k)).forEach((column) => {
      expect(getByText(column.header as string)).toBeInTheDocument();
    });
  });

  it('render <Table/> render footer', async () => {
    const myFooterText = 'myFooterText';
    const { getByText } = render(
      <ApplicationProvider>
        <Table cols={columnsData} items={itemsData} footer={() => <div>{myFooterText}</div>} />
      </ApplicationProvider>,
    );

    expect(getByText(myFooterText)).toBeInTheDocument();
  });
});
