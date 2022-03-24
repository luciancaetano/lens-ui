import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import Button from '../Button/Button';
import styles from './FormFooter.module.scss';
import { IFormFooterProps } from './FormFooter.types';

/**
 * FormFooter display's form actions like, save, cancel delete etc.
 */
const FormFooter:React.FC<IFormFooterProps> = ({
  className, testingID, id, onCancel, onDelete, onSave = 'submit', isUpdate, state,
  cancelAppearance, cancelDisabled, deleteAppearance, deleteDisabled,
  saveAppearance, saveDisabled, cancelIsReset, locale = {
    cancel: 'Cancel',
    canceling: 'Cancelling',
    cleaning: 'Cleaning',
    clear: 'Clear',
    delete: 'Delete',
    deleting: 'Deleting',
    save: 'Save',
    saving: 'Saving',
    update: 'Update',
    updating: 'Updating',
  },
  children, childrenPos = 'betweenSaveAndCancel', ...props
}) => {
  const saveButtonLabel = useMemo(() => {
    if (state === 'saving') {
      return isUpdate ? locale.updating : locale.saving;
    } if (isUpdate) {
      return locale.update;
    }

    return locale.save;
  }, [state, isUpdate, locale.save, locale.updating, locale.saving, locale.update]);

  const cancelButtonLabel = useMemo(() => {
    if (state === 'canceling') return cancelIsReset ? locale.cleaning : locale.canceling;
    return cancelIsReset ? locale.clear : locale.cancel;
  }, [state, cancelIsReset, locale.cleaning, locale.canceling, locale.clear, locale.cancel]);

  const deleteButtonLabel = useMemo(() => {
    if (state === 'deleting') return locale.deleting;
    return locale.delete;
  }, [locale.delete, locale.deleting, state]);

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
    <div
      id={id}
      data-testid={testingID}
      data-lens-element="form-footer"
      className={clsx(styles.formFooter, className)}
      {...props}
    >
      <div className={styles.formFooterDeleteContainer}>
        {childrenPos === 'beforeDelete' && children}
        {onDelete && (
          <Button
            className={styles.formFooterButton}
            intent="danger"
            appearance={deleteAppearance}
            disabled={deleteDisabled || isLoading}
            onClick={handleDelete}
            parentId="form-footer__delete"
          >
            {deleteButtonLabel}
          </Button>
        )}
        {childrenPos === 'afterDelete' && children}
      </div>
      {childrenPos === 'beforeCancel' && children}
      {onCancel && (
        <Button
          className={styles.formFooterButton}
          intent="warning"
          type={cancelButtonType}
          appearance={cancelAppearance}
          disabled={cancelDisabled || isLoading}
          onClick={handleCancel}
          parentId="form-footer__cancel"
        >
          {cancelButtonLabel}
        </Button>
      )}
      {childrenPos === 'betweenSaveAndCancel' && children}
      {onSave && (
        <Button
          className={styles.formFooterButton}
          intent="success"
          type={onSave === 'submit' ? 'submit' : 'button'}
          appearance={saveAppearance}
          disabled={saveDisabled || isLoading}
          onClick={handleSave}
          parentId="form-footer__save"
        >
          {saveButtonLabel}
        </Button>
      )}
      {childrenPos === 'afterSave' && children}
    </div>
  );
};

export default FormFooter;
