import styled from 'styled-components';

export const Container = styled.div<{rightPadding: number}>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem ${(props) => props.rightPadding}rem 1rem 1rem;
  border-bottom: .0625rem solid var(--lens-ui-elements-modal-border-color);
  border-top-left-radius: calc(.4rem - .0625rem);
  border-top-right-radius: calc(.4rem - .0625rem);
  position: relative;

  & > header {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .close-button-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.9375rem;
    width: 1.9375rem;
    border: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--lens-ui-typography-faded-text-color);
  }
`;
