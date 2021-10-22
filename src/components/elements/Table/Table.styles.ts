import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Tr = styled.tr<{intent?: string}>`
  ${(props) => props.intent ? `color: var(--lens-ui-intents-${props.intent}-lighten-text) !important;` : ''}
  ${(props) => props.intent ? `background-color: var(--lens-ui-intents-${props.intent}-lighten) !important;` : ''}
  ${(props) => props.intent ? `border-color: var(--lens-ui-intents-${props.intent}-lighten-border) !important;` : ''}

  &:hover {
    ${(props) => props.intent ? `color: var(--lens-ui-intents-${props.intent}-text) !important;` : ''}
    ${(props) => props.intent ? `background-color: var(--lens-ui-intents-${props.intent}) !important;` : ''}
    ${(props) => props.intent ? `border-color: var(--lens-ui-intents-${props.intent}-border) !important;` : ''}
  }
`;

export const Td = styled.td<{intent?: string}>`
  ${(props) => props.intent ? `color: var(--lens-ui-intents-${props.intent}-lighten-text) !important;` : ''}
  ${(props) => props.intent ? `background-color: var(--lens-ui-intents-${props.intent}-lighten) !important;` : ''}
  ${(props) => props.intent ? `border-color: var(--lens-ui-intents-${props.intent}-lighten-border) !important;` : ''}

  &:hover {
    ${(props) => props.intent ? `color: var(--lens-ui-intents-${props.intent}-text) !important;` : ''}
    ${(props) => props.intent ? `background-color: var(--lens-ui-intents-${props.intent}) !important;` : ''}
    ${(props) => props.intent ? `border-color: var(--lens-ui-intents-${props.intent}-border) !important;` : ''}
  }
`;
