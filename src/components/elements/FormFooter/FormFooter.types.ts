import React from 'react';
import { ITestableProps } from '../../../types';
import { ButtonAppearanceType } from '../Button/Button.types';

interface IFormFooterLocale {
  update: JSX.Element | JSX.Element[];
  updating: JSX.Element | JSX.Element[];
  save: JSX.Element | JSX.Element[];
  saving: JSX.Element | JSX.Element[];
  clear: JSX.Element | JSX.Element[];
  cleaning: JSX.Element | JSX.Element[];
  canceling: JSX.Element | JSX.Element[];
  cancel: JSX.Element | JSX.Element[];
  delete: JSX.Element | JSX.Element[];
  deleting: JSX.Element | JSX.Element[];
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
