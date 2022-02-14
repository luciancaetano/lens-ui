import clsx from 'clsx';
import isNumber from 'lodash/isNumber';
import clamp from 'lodash/clamp';
import map from 'lodash/map';
import React, {
  useRef, useEffect, useCallback, useMemo,
} from 'react';
import Icon from '../Icon/Icon';
import { useDevice, useToast } from '../../../hooks';
import styles from './Toast.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import { IToastProps } from './Toast.types';
import Button from '../Button/Button';

const INTERVAL = 250;

/**
 * Toast displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
const Toast:React.FC<IToastProps> = ({
  testingID, data,
}) => {
  const { removeToast } = useToast();
  const initialized = useRef(false);
  const interval = useRef<any>(INTERVAL);
  const timeProgress = useRef<number>(0);
  const progressBar = useRef<HTMLDivElement>(null);
  const { isPhone } = useDevice();

  const autoDismiss = useMemo(() => isNumber(data.dismiss), [data]);

  const updateProgress = useCallback((timePassed: number) => {
    if (!isNumber(data.dismiss) || !progressBar.current) return;

    const element = progressBar.current.querySelector<HTMLDivElement>('[data-lens-element=\'progress-bar__indicator\']');
    if (element) {
      element.style.width = `${clamp((timePassed / data.dismiss) * 100, 0, 100)}%`;
    }
  }, [data.dismiss]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (isNumber(data.dismiss)) {
        interval.current = setInterval(() => {
          if (timeProgress.current >= data.dismiss) {
            clearInterval(interval.current);
            setTimeout(() => removeToast(data.id), INTERVAL);
          } else {
            timeProgress.current += INTERVAL;
            updateProgress(timeProgress.current);
          }
        }, INTERVAL);
      }
    }
  }, [data, removeToast, updateProgress]);

  const handleClose = useCallback(() => {
    removeToast(data.id);
  }, [removeToast, data]);

  const actions = useMemo(() => map(data.actions, ({ content, ...action }) => (
    <Button {...action} className={clsx(styles.toastActionsContainerButton, action.className)} size="small">{content}</Button>
  )), [data.actions]);

  return (
    <div
      data-lens-element="toast"
      data-lens-intent={data.intent}
      data-testid={testingID}
      className={clsx(styles.toast, isPhone && styles.toastMobile, styles[`toast--intent-${data.intent}`], data.className)}
    >
      <div className={styles.toastMain}>
        {data.icon && (<div className={styles.toastIcon}>{data.icon}</div>)}
        <div className={styles.toastContent} data-lens-element="toast__content">{data.content}</div>
        {actions.length > 0 && (
          <div data-lens-element="toast__actions" className={clsx(styles.toastActionsContainer, data.actionsContainerClassName)}>
            {actions}
          </div>
        )}
        <div className={styles.toastButtonContainer} onClick={handleClose}>
          <button data-lens-element="toast__close-button">
            <Icon name="BsXSquareFill" />
          </button>
        </div>
      </div>
      {autoDismiss && <ProgressBar progress={0} size="tiny" ref={progressBar} />}
    </div>
  );
};
export default Toast;
