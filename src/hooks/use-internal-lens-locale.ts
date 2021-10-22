import { useCallback, useContext } from 'react';
import get from 'lodash/get';
import { LocaleProviderHookResponseType } from '../components/providers';
import LocaleContext from '../components/providers/LocaleProvider/LocaleContext';
import { LocaleKeyType } from '../i18n';

const useInternalLensLocale = (): LocaleProviderHookResponseType => {
  const { locale, setLocale } = useContext(LocaleContext);

  const _ = useCallback((key: LocaleKeyType) => get(locale, [key], key), [locale]);

  return [_, setLocale];
};

export default useInternalLensLocale;
