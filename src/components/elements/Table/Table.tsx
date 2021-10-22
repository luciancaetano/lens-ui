/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useMemo } from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import {
  Container, Tr, Td,
} from './Table.styles';
import { ITableProps } from './Table.types';
import { CLASSES } from '../../../css-classes';

const Table:React.FC<ITableProps> = ({
  className, testingID, id, columns, items, footer,
}) => {
  const heading = useMemo(() => map(columns, (col, key) => (
    <th key={key} className={col.headerClassName}>
      {col.header}
    </th>
  )), [columns]);

  const tableItems = useMemo(() => map(items, (item, index) => (
    <Tr className={clsx(CLASSES.FontReset, item.rowClassName)} intent={item.rowIntent} key={index}>
      {map(columns, (col, key) => (
        <Td
          key={`${index}-${key}`}
          className={clsx(CLASSES.FontReset, col.cellClassName)}
          intent={typeof col.cellIntent === 'function' && col.cellIntent(item, index)}
        >
          {typeof col.cellRenderer === 'function' ? col.cellRenderer(item) : get(item, key)}
        </Td>
      ))}
    </Tr>
  )), [items, columns]);

  return (
    <Container
      id={id}
      data-testid={testingID}
      className={clsx(CLASSES.FontReset, 'lens-ui-table', className)}
      data-role="table-container"
    >
      <table className={CLASSES.Table}>
        <thead>
          <tr className="lens-ui-font-definition">
            {heading}
          </tr>
        </thead>
        <tbody>
          {tableItems}
        </tbody>
        {typeof footer === 'function' && (
          <tfoot>{footer()}</tfoot>
        )}
      </table>
    </Container>
  );
};

export default Table;
