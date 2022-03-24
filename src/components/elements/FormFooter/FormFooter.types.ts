import React from 'react';
import { ITestableProps } from '../../../types';
import { ButtonAppearanceType } from '../Button/Button.types';

interface IFormFooterLocale {
  update: React.ReactNode;
  updating: React.ReactNode;
  save: React.ReactNode;
  saving: React.ReactNode;
  clear: React.ReactNode;
  cleaning: React.ReactNode;
  canceling: React.ReactNode;
  cancel: React.ReactNode;
  delete: React.ReactNode;
  deleting: React.ReactNode;
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
