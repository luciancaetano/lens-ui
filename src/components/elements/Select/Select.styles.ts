import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  text-align: left;
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5em;
  box-sizing: border-box;
  padding-bottom: .75rem;
  z-index: 1;

  &* {
    z-index: 1;
  }

  .lens-ui-select-input__control {
    border: var(--lens-ui-input-base-border);
  }

  .lens-ui-select-input__control--is-focused:hover,
  .lens-ui-select-input__control--is-focused {
    border: var(--lens-ui-input-base-border--active);
    outline: 0;
  }

  .pinput-error .lens-ui-select-input__control--is-focused,
  .pinput-error .lens-ui-select-input__control {
    border: 1px solid var(--lens-ui-intents-danger-border);
    box-shadow: none;
  }

  &:active {
    filter: brightness(90%);
  }


`;
