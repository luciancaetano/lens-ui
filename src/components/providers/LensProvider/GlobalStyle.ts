import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--lens-ui-typography-font-family);
    font-size: .875rem;
    font-style: normal;
    letter-spacing: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
  }

  .swal2-styled.swal2-confirm {
    background-color: var(--lens-ui-intents-primary);
  }

  .swal2-styled.swal2-cancel {
    background-color: var(--lens-ui-intents-secondary-dark);
  }

  .swal2-styled.swal2-deny {
    background-color: var(--lens-ui-intents-danger);
  }

  :root {
    --bs-font-sans-serif: var(--lens-ui-typography-font-family);
  }
`;

export default GlobalStyle;
