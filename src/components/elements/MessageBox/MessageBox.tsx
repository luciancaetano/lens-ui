/* eslint-disable jsx-a11y/control-has-associated-label */
import clsx from 'clsx';
import React, {
  useRef, useState, useCallback, useEffect,
  useMemo,
} from 'react';
import { Container } from './MessageBox.styles';
import { IMessageBoxProps } from './MessageBox.types';
import ProgressBar from '../ProgressBar/ProgressBar';
import Icon from '../Icon/Icon';
import { useProgressiveTimeout } from '../../../hooks';
import { sleep } from '../../../utils';

const STOP_RENDER_TIMEOUT = 500;

const MessageBox: React.FC<IMessageBoxProps> = ({
  className, testingID, id, intent = 'primary', striped, title, children, timeout, icon, closable = true, onClose, isOpen,
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
    const element = progressBar.current.querySelector<HTMLDivElement>('.lens-ui-progress-bar-progress');
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
    <Container
      id={id}
      data-testid={testingID}
      className={clsx('lens-ui-message-box', className, { striped }, `intent-${intent}`, { hidden: !show })}
    >
      {title && <div className="lens-ui-font-definition lens-ui-message-box-title">{title}</div>}
      {closable && <button className="lens-ui-message-box-close-button" onClick={handleClose}><Icon name="BsXSquareFill" size="0.8rem" /></button>}
      <div className="lens-ui-message-box-main">
        {icon && <div className="lens-ui-message-box-icon">{icon}</div>}
        <div className="lens-ui-font-definition lens-ui-message-box-content">{children}</div>
      </div>
      {timeout && <ProgressBar progress={0} ref={progressBar} />}
    </Container>
  );
};

export default MessageBox;
