import React from 'react';
import { ITestableProps } from '../../../types';
import { ButtonAppearanceType } from '../Button/Button.types';

interface IFormFooterLocale {
  update: React.ReactNode | React.ReactNode[];
  updating: React.ReactNode | React.ReactNode[];
  save: React.ReactNode | React.ReactNode[];
  saving: React.ReactNode | React.ReactNode[];
  clear: React.ReactNode | React.ReactNode[];
  cleaning: React.ReactNode | React.ReactNode[];
  canceling: React.ReactNode | React.ReactNode[];
  cancel: React.ReactNode | React.ReactNode[];
  delete: React.ReactNode | React.ReactNode[];
  deleting: React.ReactNode | React.ReactNode[];
}

export interface IFormFooterProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  saveAppearance?: ButtonAppearanceType;
  cancelAppearance?: ButtonAppearanceType;
  deleteAppearance?: ButtonAppearanceType;
  isUpdate?: boolean;
  state: 'saving' | 'deleting' | 'canceling' | 'ready';
  onSave?: (() => void) | 'submit';
  onCancel?: () => void;
  onDelete?: () => void;
  saveDisabled?: boolean;
  cancelDisabled?: boolean;
  deleteDisabled?: boolean;
  cancelIsReset?: boolean;
  childrenPos?: 'afterDelete' | 'beforeDelete' | 'afterCancel' | 'beforeCancel' | 'betweenSaveAndCancel' | 'afterSave';
  locale?: IFormFooterLocale;
}
