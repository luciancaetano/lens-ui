import React from 'react';
import { ILocaleProviderContext } from '../../../types';
import { DefaultLocales } from '../../../i18n';

const AlertContext = React.createContext<ILocaleProviderContext>({
  locale: DefaultLocales.enUs,
  setLocale: () => {},
});

export default AlertContext;
