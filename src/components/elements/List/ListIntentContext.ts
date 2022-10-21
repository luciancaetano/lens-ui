import React from 'react';
import { IntentType } from '../../../types';

export interface IListIntentContext {
  intent?: IntentType | null;
}

export default React.createContext<IListIntentContext>({

});
