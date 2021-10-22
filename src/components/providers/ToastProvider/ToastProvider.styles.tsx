import styled from 'styled-components';
import { Layers } from '../../../utils';

export const RenderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: ${Layers.Toast};
  display: flex;
  flex-direction: column;
  padding: .5rem;

  &.top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &.top-right {
    align-items: flex-end;
    justify-content: flex-start;
  }

  &.bottom-left {
    align-items: flex-start;
    justify-content: flex-end;
  }

  &.bottom-right {
    align-items: flex-end;
    justify-content: flex-end;
  }

  &.top-center {
    align-items: center;
    justify-content: flex-start;
  }

  &.bottom-center {
    align-items: center;
    justify-content: flex-end;
  }

  &.mobile {
    align-items: center;
  }
`;
