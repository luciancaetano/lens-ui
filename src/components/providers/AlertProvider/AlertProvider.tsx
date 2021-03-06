import omit from 'lodash/omit';
import React, {
  useState, useEffect, useCallback,
  useRef, useMemo,
} from 'react';
import swal from 'sweetalert2';
import { randomId } from '../../../utils/index';
import AlertContext from './AlertContext';
import {
  IAlertItemData, IAlertItemRequest, IAlertResult,
} from './AlertProvider.types';

const AlertProvider: React.FC<{children: React.ReactNode | React.ReactNode[]}> = ({ children }) => {
  const [activeAlert, setActiveAlert] = useState<IAlertItemData | null>(null);
  const [queue, setQueue] = useState<IAlertItemData[]>([]);
  const [results, setResults] = useState<Record<string, IAlertResult>>({});
  const [showingId, setShowingId] = useState<string | null>(null);
  const promiseResolvers = useRef<Record<string, Function>>({});

  const runAlert = useCallback(() => {
    if (activeAlert && activeAlert.id !== showingId) {
      setShowingId(activeAlert.id);

      const {
        id, icon, text, title, settings,
      } = activeAlert;

      const {
        showCancelButton, showCloseButton, showConfirmButton, showDenyButton,
        cancelButtonText, confirmButtonText, denyButtonText, focusCancel, reverseButtons,
        focusConfirm, focusDeny,
      } = settings || {};

      swal.fire({
        title,
        icon,
        text,
        cancelButtonText: cancelButtonText || 'Cancel',
        confirmButtonText: confirmButtonText || 'Confirm',
        denyButtonText: denyButtonText || 'Deny',
        showCancelButton,
        showCloseButton,
        showConfirmButton: showConfirmButton === undefined ? true : showConfirmButton,
        showDenyButton,
        focusCancel,
        focusConfirm: focusConfirm === undefined && !focusCancel && focusDeny ? true : focusConfirm,
        focusDeny,
        reverseButtons: reverseButtons === undefined ? true : reverseButtons,
      }).then((response) => {
        const result = {
          alertId: id,
          isConfirmed: response.isConfirmed,
          isDenied: response.isDenied,
          isDismissed: response.isDenied,
          value: response.value === true,
          at: new Date(),
        };
        setResults(() => ({
          [id]: result,
        }));
        setActiveAlert(null);
        setShowingId(null);
        if (promiseResolvers.current[id]) {
          promiseResolvers.current[id](result);
          promiseResolvers.current = omit(promiseResolvers.current, id);
        }
      });
    }
  }, [activeAlert, showingId]);

  runAlert();

  useEffect(() => {
    if (!activeAlert) {
      setActiveAlert(() => {
        const [lastItem] = queue.splice(-1, 1) || [];
        if (lastItem) {
          setQueue((q) => q.filter((item) => item.id !== lastItem.id));
        }
        return lastItem;
      });
    }
  }, [queue, activeAlert]);

  const addAlert = useCallback((alert: IAlertItemRequest) => {
    const currId = randomId();
    const promise = new Promise<IAlertResult>((resolve) => {
      promiseResolvers.current[currId] = resolve;
    });
    const data: IAlertItemData = { id: currId, ...alert };
    setQueue((q) => [data, ...q]);

    return promise;
  }, []);

  const cancelAlert = useCallback(() => {
    setShowingId((id) => {
      setQueue((q) => q.filter((item) => item.id !== id));
      return null;
    });
  }, []);

  const clearQueue = useCallback(() => {
    setQueue([]);
  }, []);

  const clearResults = useCallback(() => {
    setResults({});
  }, []);

  const data = useMemo(() => ({
    queue,
    activeAlert,
    results,
    addAlert,
    cancelAlert,
    clearQueue,
    clearResults,
  }), [queue, activeAlert, results, addAlert, cancelAlert, clearQueue, clearResults]);

  return (
    <AlertContext.Provider value={data}>
      {React.Children.toArray(children)}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
