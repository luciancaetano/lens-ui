import styled from 'styled-components';

export const Container = styled.div`
  --stripped-opacity: .03;

  display: flex;
  overflow: hidden;
  font-size: .65625rem;
  border-radius: .1rem;
  flex-direction: column;
  position: relative;
  margin-top: .2rem;
  margin-bottom: .2rem;
  box-sizing: border-box;
  transition: opacity linear .3s;

  &.hidden {
    opacity: 0;
  }

  .lens-ui-message-box-title {
    padding: .2rem;
    flex: 1;
    font-size: .8rem;
    font-weight: bold;
  }

  .lens-ui-message-box-content {
    padding: .2rem;
    flex: 1;
    font-size: .8rem;
  }

  .lens-ui-progress-bar,
  .lens-ui-progress-bar-progress {
    border-radius: 0;
    height: .3rem;
  }

  .lens-ui-message-box-close-button {
    position: absolute;
    border: 0;
    background: transparent;
    top: 0;
    right: 0;
    display: flex;
    width: 20px;
    height: 20px;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  &.striped {
    background-image: linear-gradient(45deg, rgba(255,255,255,var(--stripped-opacity)) 25%,transparent 25%,transparent 50%,rgba(255,255,255,var(--stripped-opacity)) 50%,rgba(255,255,255,var(--stripped-opacity)) 75%,transparent 75%,transparent);
    background-size: .625rem .625rem;
  }

  &.intent-primary {
    background-color: var(--lens-ui-intents-primary);
    color: var(--lens-ui-intents-primary-text);
    border: 1px solid var(--lens-ui-intents-primary-border);

    .lens-ui-message-box-close-button {
      color: var(--lens-ui-intents-primary-text);
    }

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
    background-color: var(--lens-ui-intents-secondary);
    color: var(--lens-ui-intents-secondary-text);
    border: 1px solid var(--lens-ui-intents-secondary-border);

    .lens-ui-message-box-close-button {
      color: var(--lens-ui-secondary-primary-text);
    }

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
    background-color: var(--lens-ui-intents-success);
    color: var(--lens-ui-intents-success-text);
    border: 1px solid var(--lens-ui-intents-success-border);

    .lens-ui-message-box-close-button {
      color: var(--lens-ui-success-primary-text);
    }

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
    background-color: var(--lens-ui-intents-info);
    color: var(--lens-ui-intents-info-text);
    border: 1px solid var(--lens-ui-intents-info-border);

    .lens-ui-message-box-close-button {
      color: var(--lens-ui-success-info-text);
    }

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
    background-color: var(--lens-ui-intents-warning);
    color: var(--lens-ui-intents-warning-text);
    border: 1px solid var(--lens-ui-intents-warning-border);

    .lens-ui-message-box-close-button {
      color: var(--lens-ui-success-warning-text);
    }

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
    background-color: var(--lens-ui-intents-danger);
    color: var(--lens-ui-intents-danger-text);
    border: 1px solid var(--lens-ui-intents-danger-border);

    .lens-ui-message-box-close-button {
      color: var(--lens-ui-success-danger-text);
    }

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
