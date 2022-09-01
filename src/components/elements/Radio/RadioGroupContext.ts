import React from 'react';
import { SizeType } from '../../../types';

export interface IRadioGroupContextData {
  value: string | number | undefined;
  onChange: (value: string | number | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
  inline?: boolean;
  disabled?: boolean;
  isContextPresent: boolean;
  name: string;
  size?: SizeType;
}

export default React.createContext<IRadioGroupContextData>({
  value: undefined,
  onChange: () => {},
  isContextPresent: false,
  name: '',
});
