import clsx from 'clsx';
import isNumber from 'lodash/isNumber';
import clamp from 'lodash/clamp';
import map from 'lodash/map';
import React, {
  useRef, useEffect, useCallback, useMemo,
} from 'react';
import Icon from '../Icon/Icon';
import { useDevice, useToast } from '../../../hooks';
import { ToastContainer } from './Toast.styles';
import ProgressBar from '../ProgressBar/ProgressBar';
import { IToastProps } from './Toast.types';
import Button from '../Button/Button';
import { CLASSES } from '../../../css-classes';

const INTERVAL = 250;

const FormDivider:React.FC<IToastProps> = ({
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

    const element = progressBar.current.querySelector<HTMLDivElement>('.lens-ui-progress-bar-progress');
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
    <Button {...action} size="small">{content}</Button>
  )), [data.actions]);

  return (
    <ToastContainer data-testid={testingID} className={clsx(CLASSES.FontReset, 'lens-ui-toasts-toast', { mobile: isPhone }, `intent-${data.intent}`, data.className)}>
      <div className="lens-ui-toasts-toast-main">
        {data.icon && (<div className="lens-ui-toasts-toast-icon">{data.icon}</div>)}
        <div className="lens-ui-font-definition lens-ui-toasts-toast-content">{data.content}</div>
        {actions.length > 0 && (
          <div className={clsx('toast-close-actions-container', data.actionsContainerClassName)}>
            {actions}
          </div>
        )}
        <div className="toast-close-button-container" onClick={handleClose}>
          <button className="toast-close-button">
            <Icon name="BsXSquareFill" />
          </button>
        </div>
      </div>
      {autoDismiss && <ProgressBar progress={0} size="tiny" ref={progressBar} />}
    </ToastContainer>
  );
};
export default FormDivider;
