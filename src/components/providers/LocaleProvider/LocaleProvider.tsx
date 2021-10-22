import React, { useState } from 'react';
import AlertContext from './LocaleContext';
import { ILocaleProviderProps } from './LocaleProvider.types';
import { LocaleType } from '../../../i18n';

const LocaleProvider: React.FC<ILocaleProviderProps> = ({ children, initialLocale }) => {
  const [locale, setLocale] = useState<LocaleType>(initialLocale);

  return (

    <AlertContext.Provider value={{
      locale,
      setLocale,
    }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default LocaleProvider;
