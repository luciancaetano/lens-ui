import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { useInternalLensLocale } from '../../..';
import Button from '../Button/Button';
import styles from './FormFooter.styles';
import { IFormFooterProps } from './FormFooter.types';
import { CLASSES } from '../../../css-classes';

const FormFooter:React.FC<IFormFooterProps> = ({
  className, testingID, id, onCancel, onDelete, onSave = 'submit', isUpdate, state,
  cancelAppearance, cancelDisabled, deleteAppearance, deleteDisabled,
  saveAppearance, saveDisabled, cancelIsReset,
  children, childrenPos = 'betweenSaveAndCancel',
}) => {
  const [_] = useInternalLensLocale();

  const saveButtonLabel = useMemo(() => {
    if (state === 'saving') {
      return isUpdate ? _('FormFooter/updating') : _('FormFooter/saving');
    } if (isUpdate) {
      return _('FormFooter/update');
    }

    return _('FormFooter/save');
  }, [state, _, isUpdate]);

  const cancelButtonLabel = useMemo(() => {
    if (state === 'canceling') return cancelIsReset ? _('FormFooter/cleaning') : _('FormFooter/cancel=>loading');
    return cancelIsReset ? _('FormFooter/clear') : _('FormFooter/cancel');
  }, [state, _, cancelIsReset]);

  const deleteButtonLabel = useMemo(() => {
    if (state === 'deleting') return _('FormFooter/deleting');
    return _('FormFooter/delete');
  }, [state, _]);

  const handleSave = useCallback(() => {
    if (typeof onSave === 'function') {
      onSave();
    }
  }, [onSave]);

  const handleCancel = useCallback(() => {
    if (typeof onCancel === 'function') {
      onCancel();
    }
  }, [onCancel]);

  const handleDelete = useCallback(() => {
    if (typeof onDelete === 'function') {
      onDelete();
    }
  }, [onDelete]);

  const cancelButtonType = useMemo(() => cancelIsReset ? 'reset' : 'button', [cancelIsReset]);

  const isLoading = useMemo(() => state !== 'ready', [state]);

  return (
    <styles.FormFooter id={id} data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-form-footer', className)}>
      <div className="lens-ui-form-footer__delete-container">
        {childrenPos === 'beforeDelete' && children}
        {onDelete && (
          <Button
            className="lens-ui-form-footer-button lens-ui-form-footer-button__delete"
            intent="danger"
            appearance={deleteAppearance}
            disabled={deleteDisabled || isLoading}
            onClick={handleDelete}
          >{deleteButtonLabel}
          </Button>
        )}
        {childrenPos === 'afterDelete' && children}
      </div>
      {childrenPos === 'beforeCancel' && children}
      {onCancel && (
        <Button
          className="lens-ui-form-footer-button lens-ui-form-footer-button__cancel"
          intent="warning"
          type={cancelButtonType}
          appearance={cancelAppearance}
          disabled={cancelDisabled || isLoading}
          onClick={handleCancel}
        >{cancelButtonLabel}
        </Button>
      )}
      {childrenPos === 'betweenSaveAndCancel' && children}
      {onSave && (
        <Button
          className="lens-ui-form-footer-button lens-ui-form-footer-button__save"
          intent="success"
          type={onSave === 'submit' ? 'submit' : 'button'}
          appearance={saveAppearance}
          disabled={saveDisabled || isLoading}
          onClick={handleSave}
        >{saveButtonLabel}
        </Button>
      )}
      {childrenPos === 'afterSave' && children}
    </styles.FormFooter>
  );
};

export default FormFooter;
