import styled from 'styled-components';
import { ANIMATIONS } from '../../../css-classes';
import { Layers } from '../../../utils';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: ${Layers.Modal};
  box-sizing: border-box;
  background-color: hsl(0deg, 0%, 20%,50%);
  animation: ${ANIMATIONS.AnimFadeIn} .2s linear;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  transition: transform .3s ease-out,-webkit-transform .3s ease-out;
  max-width: 31.25rem;
  width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-clip: padding-box;
  border-radius: .4rem;
  outline: 0;
  background-color: var(--lens-ui-elements-modal-background-color);
  border: 1px solid var(--lens-ui-elements-modal-border-color);

  &.size-medium {
    width: 50vw;
    height: 70vh;
    max-width: 50vw;
  }

  &.size-fullscreen {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    border: 0;
    border-radius: 0;
  }
`;
