import { LocaleType, LocaleKeyType } from '../../../i18n';

export type LocaleProviderHookResponseType = [(key: LocaleKeyType) => string, (locale: LocaleType) => void];

export interface ILocaleProviderProps {
  initialLocale: LocaleType;
}
