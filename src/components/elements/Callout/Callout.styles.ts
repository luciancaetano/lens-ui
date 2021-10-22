import styled from 'styled-components';

interface IContainerProps {
  dataColor: string;
  dataColorLight: string;
  dataColorLighten: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  font-size: .65625rem;
  border-radius: .25rem;
  position: relative;
  color: var(--lens-ui-typography-text-color);

  .lens-ui-callout-content-container {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin: 1rem;

    h1 {
      font-size: 1rem;
      color: ${(props) => props.dataColor};
      text-align: center;
      font-weight: bold;
      margin-bottom: 0;
      padding-bottom: .5rem;
    }

    .lens-ui-callout-icon-holder {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      svg {
        fill: ${(props) => props.dataColorLighten};
      }
    }

    .lens-ui-callout-content-holder {
      color: ${(props) => props.dataColorLight};
      font-size: .8rem;
    }
  }
`;
