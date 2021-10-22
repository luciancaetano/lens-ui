import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';

export const MoneyInputContainer = styled.div`
  position: relative;
  text-align: left;
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5em;
  box-sizing: border-box;
  padding-bottom: .75rem;
`;

export const Input = (styled.input`
display: block;
width: 100%;
padding: .47rem .75rem;
font-size: .875rem;
font-weight: 400;
line-height: 1.5;
color: var(--lens-ui-typography-text-color);
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
appearance: none;
border-radius: .25rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

&:focus {
  outline: 0;
  border: var(--lens-ui-input-base-border--active);
  outline: 0;
}

&.pinput-error {
  border: 1px solid var(--lens-ui-intents-danger-border);
}

`).withComponent(CurrencyInput);
