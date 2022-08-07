import useAlert, { setDefaultButtonsText } from './use-alert';
import { UseAlertHookType } from './use-alert.types';

interface ICompoundedAlertHook extends UseAlertHookType {
  setDefaultButtonsText: typeof setDefaultButtonsText;
}

export default Object.assign(useAlert, {
  setDefaultButtonsText,
}) as ICompoundedAlertHook;

export {
  AlertFunctionType, AlertIconType, IAlertResult, IAlertSettings, UseAlertHookType, IAlertHookResponse,
} from './use-alert.types';
