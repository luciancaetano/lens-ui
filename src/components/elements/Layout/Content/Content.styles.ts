import styled from 'styled-components';

const Content = styled.div<{flexDirection: string}>`
  flex-direction: ${(props) => props.flexDirection};
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  max-height: 100%;
  margin: 0;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--lens-ui-typography-text-color);
  background-color: var(--lens-ui-conent-bg-color);
`;

export default { Content };
