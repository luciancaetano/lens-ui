import styled from 'styled-components';

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--lens-ui-elements-layout-sidebar-background-color);
  min-width: 16.875rem;
  color: var(--lens-ui-elements-layout-sidebar-text-color);
  border-right: var(--lens-ui-elements-layout-sidebar-border-right);
  max-height: 100%;
  z-index: 1;
`;

export default { Sidebar };
