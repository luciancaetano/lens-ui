import styled from 'styled-components';

export const Divider = styled.div`
  color: var(--lens-ui-elements-divider-text-color);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  padding-left: .313rem;
  padding-right: .313rem;
  font-size: 1rem;
  user-select: none;

  &::after,
  &::before {
    content: '';
    flex: 1;
    border-bottom: 2px solid var(--lens-ui-elements-divider-color);
  }

  &::before {
    flex: .05;
  }


  &:not(:empty)::before {
    margin-right: .25em;
  }

  &:not(:empty)::after {
    margin-left: .25em;
  }

`;

export default { Divider };
