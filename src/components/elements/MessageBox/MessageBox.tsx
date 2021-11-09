/* eslint-disable jsx-a11y/control-has-associated-label */
import clsx from 'clsx';
import React, {
  useRef, useState, useCallback, useEffect,
  useMemo,
} from 'react';
import styles from './MessageBox.module.scss';
import { IMessageBoxProps } from './MessageBox.types';
import ProgressBar from '../ProgressBar/ProgressBar';
import Icon from '../Icon/Icon';
import { useProgressiveTimeout } from '../../../hooks';
import { sleep } from '../../../utils';

const STOP_RENDER_TIMEOUT = 500;

const MessageBox: React.FC<IMessageBoxProps> = ({
  className, testingID, id, intent = 'primary', striped, title, children, timeout, icon, closable = true, onClose, isOpen,
  ...props
}) => {
  const [isOpenState, setIsOpen] = useState(true);
  const [renderDisabled, setRenderDisabled] = useState(false);
  const progressBar = useRef<HTMLDivElement>(null);
  const progressDone = useRef(false);
  const timeOutRef = useRef<Function>(null);

  const renderDisableTimeout = useRef(async () => {
    if (!timeOutRef.current) {
      await sleep(STOP_RENDER_TIMEOUT, timeOutRef);
      setRenderDisabled(true);
    }
  });

  const show = useMemo(() => isOpen !== undefined ? isOpen : isOpenState, [isOpenState, isOpen]);

  const updateProgressBar = useCallback((progress: number) => {
    if (!progressBar.current) return;
    const element = progressBar.current.querySelector<HTMLDivElement>('[data-lens-element=\'progress-bar__indicator\']');
    if (element) {
      element.style.width = `${progress}%`;
    }
  }, []);

  const [start, stopProgress, inProgress] = useProgressiveTimeout(updateProgressBar, () => {
    if (onClose) {
      onClose(false);
    }
    setIsOpen(false);
    renderDisableTimeout.current();
  });

  const handleClose = useCallback(() => {
    stopProgress();
    setIsOpen(false);
    updateProgressBar(100);
    if (onClose) {
      onClose(false);
    }
    renderDisableTimeout.current();
  }, [stopProgress, onClose, updateProgressBar]);

  useEffect(() => {
    if (timeout > 0 && !inProgress.current && !progressDone.current) {
      progressDone.current = true;
      start(timeout);
    }
  }, [timeout, start, inProgress]);

  useEffect(() => () => {
    if (timeOutRef.current) {
      timeOutRef.current();
    }
  }, []);

  if (renderDisabled && !show) return null;

  return (
    <div
      {...props}
      id={id}
      data-testid={testingID}
      data-lens-element="message-box"
      className={clsx(
        styles.messageBox,
        striped && styles.messageBoxStriped,
        !show && styles.messageBoxHidden,
        styles[`message-box--intent-${intent}`],
        className,
      )}
    >
      {title && <div data-lens-element="message-box__title" className={styles.messageBoxTitle}>{title}</div>}
      {closable && (
        <button
          data-lens-element="message-box__close-button"
          className={clsx(styles.messageBoxCloseButton, styles[`message-box--intent-${intent}__close-button`])}
          onClick={handleClose}
        >
          <Icon name="BsXSquareFill" size="0.8rem" />
        </button>
      )}
      <div>
        {icon && <div data-lens-element="message-box__icon">{icon}</div>}
        <div className={clsx(styles.messageBoxContent)}>{children}</div>
      </div>
      {timeout && <ProgressBar progress={0} ref={progressBar} />}
    </div>
  );
};

export default MessageBox;
