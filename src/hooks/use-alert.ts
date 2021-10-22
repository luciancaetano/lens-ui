import { useContext } from 'react';
import { IUseAlertHookReponse } from '../components/providers';
import AlertContext from '../components/providers/AlertProvider/AlertContext';

const useAlert = (): IUseAlertHookReponse => {
  const {
    addAlert, cancelAlert, clearQueue, clearResults, activeAlert, queue, results,
  } = useContext(AlertContext);

  return {
    addAlert,
    cancelAlert,
    clearQueue,
    clearResults,
    queue,
    alertResults: results,
    activeAlert,
  };
};

export default useAlert;
