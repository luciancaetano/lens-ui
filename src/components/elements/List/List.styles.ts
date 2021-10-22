import styled from 'styled-components';
import { IntentType } from '../../../types';

interface IContainerProps {
  intent: IntentType;
}

export const Container = styled.div<IContainerProps>`
  .lens-ui-list-item,
  .lens-ui-list-heading {
    padding: .75rem .75rem;
    font-size: .95rem;
    border-top: 1px solid var(--lens-ui-elements-list-border);
  }

  .lens-ui-list-item:last-child,
  .lens-ui-list-heading:last-child {
    border-bottom: 1px solid var(--lens-ui-elements-list-border);
  }

  .lens-ui-list-item:hover {
    background-color: hsl(var(--lens-ui-hue-${(props) => props.intent}), 74%, 95%);
  }

  .lens-ui-list-item.active {
    color: var(--lens-ui-intents-${(props) => props.intent}-lighten-text);
    background-color: var(--lens-ui-intents-${(props) => props.intent}-lighten);
  }

  .lens-ui-list-heading {
    padding: .3rem .75rem;
    font-size: .8rem;
    background-color: var(--lens-ui-elements-tabs-header-bg);
  }
`;
