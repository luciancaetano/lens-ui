import styled from 'styled-components';

export const ToastContainer = styled.div`
  pointer-events: all;
  min-width: 300px;
  border-radius: .1rem;
  margin-top: .3rem;
  box-shadow: 0px 0px 3px #0000004d;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .lens-ui-progress-bar,
  .lens-ui-progress-bar-progress {
    border-radius: 0;
    height: .3rem;
  }

  .lens-ui-toasts-toast-main {
    display: flex;
    flex: 1;
    padding: .25rem .5rem;
  }

  .lens-ui-toasts-toast-icon {
    display: flex;
    padding-right: .2rem;
    align-items: center;
    justify-content: center;
  }

  .lens-ui-toasts-toast-content {
    display: flex;
    padding: .2rem;
    flex: 1;
    font-size: .8rem;
    align-items: center;
  }

  &.mobile {
    width: 100%;
  }

  .toast-close-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .toast-close-button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 19px;
      width: 19px;
      padding: 0;
      border-radius: .2rem;
    }
  }

  .toast-close-actions-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;

    .lens-ui-button {
      padding: .2rem .2rem;
    }
  }

  &.intent-primary {
    background-color: var(--lens-ui-intents-primary-dark);
    color: var(--lens-ui-intents-primary-dark-text);
    border: 1px solid var(--lens-ui-intents-primary-dark-border);

    .toast-close-button {
      background-color: transparent;
      border: 0;
      color: var(--lens-ui-intents-primary-dark-text);
    }

    .lens-ui-progress-bar {
      background-color: var(--lens-ui-intents-primary-darken);
    }

    .lens-ui-progress-bar-progress {
      background-color: #fff;
    }
  }

  &.intent-secondary {
    background-color: var(--lens-ui-intents-secondary-dark);
    color: var(--lens-ui-intents-secondary-dark-text);
    border: 1px solid var(--lens-ui-intents-secondary-dark-border);

    .toast-close-button {
      background-color: transparent;
      border: 0;
      color: var(--lens-ui-intents-secondary-dark-text);
    }

    .lens-ui-progress-bar {
      background-color: var(--lens-ui-intents-secondary-darken);
    }

    .lens-ui-progress-bar-progress {
      background-color: #fff;
    }
  }

  &.intent-success {
    background-color: var(--lens-ui-intents-success-dark);
    color: var(--lens-ui-intents-success-dark-text);
    border: 1px solid var(--lens-ui-intents-success-dark-border);

    .toast-close-button {
      background-color: transparent;
      border: 0;
      color: var(--lens-ui-intents-success-dark-text);
    }

    .lens-ui-progress-bar {
      background-color: var(--lens-ui-intents-success-darken);
    }

    .lens-ui-progress-bar-progress {
      background-color: #fff;
    }
  }

  &.intent-info {
    background-color: var(--lens-ui-intents-info-dark);
    color: var(--lens-ui-intents-info-dark-text);
    border: 1px solid var(--lens-ui-intents-info-dark-border);

    .toast-close-button {
      background-color: transparent;
      border: 0;
      color: var(--lens-ui-intents-info-dark-text);
    }

    .lens-ui-progress-bar {
      background-color: var(--lens-ui-intents-info-darken);
    }

    .lens-ui-progress-bar-progress {
      background-color: #fff;
    }
  }

  &.intent-warning {
    background-color: var(--lens-ui-intents-warning-dark);
    color: var(--lens-ui-intents-warning-dark-text);
    border: 1px solid var(--lens-ui-intents-warning-dark-border);

    .toast-close-button {
      background-color: transparent;
      border: 0;
      color: var(--lens-ui-intents-warning-dark-text);
    }

    .lens-ui-progress-bar {
      background-color: var(--lens-ui-intents-warning-darken);
    }

    .lens-ui-progress-bar-progress {
      background-color: #fff;
    }
  }

  &.intent-danger {
    background-color: var(--lens-ui-intents-danger-dark);
    color: var(--lens-ui-intents-danger-dark-text);
    border: 1px solid var(--lens-ui-intents-danger-dark-border);

    .toast-close-button {
      background-color: transparent;
      border: 0;
      color: var(--lens-ui-intents-danger-dark-text);
    }

    .lens-ui-progress-bar {
      background-color: var(--lens-ui-intents-danger-darken);
    }

    .lens-ui-progress-bar-progress {
      background-color: #fff;
    }
  }
`;
