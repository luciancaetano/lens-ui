import React from 'react';
import { BeforeMaskedStateChangeStates, InputState, Props as InputMaskProps } from 'react-input-mask';
import { ITestableProps } from '../../../types';

export type MakedInputFilterType = (value: string) => string;

export interface IMaskedInputProps extends ITestableProps, Omit<InputMaskProps, 'onChange' | 'onBlur'> {
  /**
   * Mask string. Format characters are:
   * * `9`: `0-9`
   * * `a`: `A-Z, a-z`
   * * `\*`: `A-Z, a-z, 0-9`
   *
   * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
   * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
   */
  mask: string | Array<(string | RegExp)>;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  tabIndex?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
  maskPlaceholder?: string | null;
  alwaysShowMask?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  filter?: MakedInputFilterType;
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
