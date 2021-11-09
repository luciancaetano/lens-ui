import React from 'react';
import { BeforeMaskedStateChangeStates, InputState } from 'react-input-mask';
import { ITestableProps } from '../../../types';

export interface IMaskedInputProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange' | 'onBlur'> {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
  mask: string | Array<(string | RegExp)>;
  maskPlaceholder?: string | null;
  alwaysShowMask?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  /**
    * In case you need to implement more complex masking behavior, you can provide
    * beforeMaskedStateChange function to change masked value and cursor position
    * before it will be applied to the input.
    *
    * * previousState: Input state before change. Only defined on change event.
    * * currentState: Current raw input state. Not defined during component render.
    * * nextState: Input state with applied mask. Contains value and selection fields.
    */
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
}
