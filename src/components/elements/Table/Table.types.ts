import React from 'react';
import { IntentType, ITestableProps } from '../../../types';

export interface ITableItem {
  rowClassName?: string;
  rowIntent?: IntentType;
}

export type TableCellRendererType<T extends ITableItem> = (item: T) => React.ReactNode | React.ReactNode[];

export interface ITableCol<T extends ITableItem> {
  header: React.ReactNode | React.ReactNode[];
  headerClassName?: string;

  cellRenderer?: TableCellRendererType<T>;
  cellClassName?: string;
  cellIntent?: (item: T, index: number) => IntentType;
}

export type TableClumnsRecordType<T extends ITableItem> = Record<keyof Omit<T, 'rowClassName' | 'rowIntent'>, ITableCol<T>>;
export interface ITableProps<T extends ITableItem> extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  items: T[];
  cols: TableClumnsRecordType<T>;
  footer?: () => React.ReactNode | React.ReactNode[];
  onRowClick?: (item: T, index: number) => void;
}
