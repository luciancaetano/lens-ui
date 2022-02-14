import React, { useMemo, useState } from 'react';
import AlertContext from './LocaleContext';
import { ILocaleProviderProps } from './LocaleProvider.types';
import { LocaleType } from '../../../i18n';

const LocaleProvider: React.FC<ILocaleProviderProps> = ({ children, initialLocale }) => {
  const [locale, setLocale] = useState<LocaleType>(initialLocale);

  const data = useMemo(() => ({
    locale,
    setLocale,
  }), [locale, setLocale]);

  return (

    <AlertContext.Provider value={data}>
      {children}
    </AlertContext.Provider>
  );
};

export default LocaleProvider;
