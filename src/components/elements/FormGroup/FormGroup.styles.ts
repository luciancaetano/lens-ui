import styled from 'styled-components';

const FormGroup = styled.div<{inline: boolean}>`
  display: flex;
  flex-direction: ${(props) => props.inline ? 'row' : 'column'};
  box-sizing: border-box;
  padding-bottom: .75rem;

  label {
    margin-bottom: .5rem;
    margin-right: ${(props) => props.inline ? '.7em' : '0'};
    color: var(--lens-ui-typography-faded-text-color);
    box-sizing: border-box;
    font-weight: 500;

    .required-helper {
      font-weight: bold;
      color: var(--lens-ui-intents-danger);
    }
  }

  .lens-ui-form-group__helper-text {
    font-size: .75rem;
    margin-top: .125rem;
    font-weight: 500;

    &.intent-default {
      color: var(--lens-ui-typography-faded-text-color);
    }

    &.intent-primary {
      color: var(--lens-ui-intents-primaryDark);
    }

    &.intent-secondary {
      color: var(--lens-ui-intents-secondary);
    }

    &.intent-success {
      color: var(--lens-ui-intents-success);
    }

    &.intent-info {
      color: var(--lens-ui-intents-infoDark);
    }

    &.intent-warning {
      color: var(--lens-ui-intents-warning);
    }

    &.intent-danger {
      color: var(--lens-ui-intents-danger);
    }
  }

  .lens-ui-radio-group {
    padding-left: 2.5rem;
  }

  .lens-ui-checkbox {
    padding-left: 2.5rem;
  }

  .lens-ui-switch {
    padding-left: 3.3rem;
  }

`;

const Content = styled.div<{inline: boolean}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: ${(props) => !props.inline ? '0.0rem' : '0'}
`;

export default { FormGroup, Content };
