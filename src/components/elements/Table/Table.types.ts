import React from 'react';
import {
  IntentType,
  IPropsWithClassName, IPropsWithId, ITestableProps,
} from '../../../types';

export interface ITableItem {
  rowClassName?: string;
  rowIntent?: IntentType;
  [attrs: string]: unknown;
}

export type TableCellRendererType<T extends ITableItem> = (item: T) => React.ReactNode;

export interface ITableColumns<T extends ITableItem = any> {

  [attr: string]: {
    header: React.ReactNode;
    headerClassName?: string;

    cellRenderer?: TableCellRendererType<T>;
    cellClassName?: string;
    cellIntent?: (item: T, index: number) => IntentType;
  };
}

export interface ITableProps extends IPropsWithClassName, ITestableProps, IPropsWithId {
  items: ITableItem[];
  columns: ITableColumns<any>;
  footer?: () => React.ReactNode;
  onRowClick?: <T = ITableItem>(item: T, index: number) => void;
}
