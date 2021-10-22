import styled from 'styled-components';

export const FormFooter = styled.div`
  display: flex;
  color: var(--lens-ui-elements-divider-text-color);

  .lens-ui-form-footer__delete-container {
    display: flex;
    flex: 1;
  }

  .lens-ui-form-footer-button {
    margin-right: .625rem;
  }
`;

export default { FormFooter };
