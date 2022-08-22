/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useMemo } from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import styles from './Table.module.scss';
import { ITableItem, ITableProps } from './Table.types';
import { CLASSES } from '../../../css-classes';
import { useTheme } from '../../../hooks';

/**
 * Table display sets of data.
 */
function Table<T extends ITableItem = {}>({
  className, testingID, id, cols, items, footer, ...props
}: ITableProps<T>) {
  const [theme] = useTheme();

  const heading = useMemo(() => map(cols, (col, key) => (
    <th key={key} className={col.headerClassName}>
      {col.header}
    </th>
  )), [cols]);

  const tableItems = useMemo(() => map(items, (item, index) => (
    <tr className={clsx(styles[`table__tr--intent-${item.rowIntent || 'default'}`], item.rowClassName)} key={index}>
      {map(cols, (col, key) => {
        const colIntent = typeof col.cellIntent === 'function' ? col.cellIntent(item, index) : 'default';

        return (
          <td
            key={`${index}-${key}`}
            className={clsx(
              styles.tableTd,
              styles[`table__td--intent-${colIntent}`],
              col.cellClassName,
            )}
          >
            {typeof col.cellRenderer === 'function' ? col.cellRenderer(item) : get(item, key)}
          </td>
        );
      })}
    </tr>
  )), [items, cols]);

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="table"
      className={clsx(styles.table, theme, className)}
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
    </div>
  );
}

export default Table;
