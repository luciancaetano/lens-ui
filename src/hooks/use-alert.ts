import { useContext } from 'react';
import { IUseAlertHookReponse } from '../components/providers';
import AlertContext from '../components/providers/AlertProvider/AlertContext';

const useAlert = (): IUseAlertHookReponse => {
  const {
    addAlert, cancelAlert,
  } = useContext(AlertContext);

  return {
    alert: addAlert,
    cancelAlert,
  };
};

export default useAlert;
