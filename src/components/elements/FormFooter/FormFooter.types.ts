import { IPropsWithClassName, IPropsWithId, ITestableProps } from '../../../types';
import { ButtonAppearanceType } from '../Button/Button.types';

export interface IFormFooterProps extends ITestableProps, IPropsWithClassName, IPropsWithId {
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
}
