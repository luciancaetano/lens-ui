import styled from 'styled-components';

export const Container = styled.footer`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: .75rem;
  border-top: 1px solid var(--lens-ui-elements-modal-border-color);
  border-bottom-right-radius: calc(.4rem - 1px);
  border-bottom-left-radius: calc(.4rem - 1px);

  &> * {
    margin: .25rem;
  }
`;
