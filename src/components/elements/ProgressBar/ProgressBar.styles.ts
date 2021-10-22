import styled from 'styled-components';
import isNumber from 'lodash/isNumber';

export const ProgressBarSizeValues = {
  tiny: 0.400,
  normal: 0.625,
  medium: 0.925,
  big: 1.200,
};

export const ProgressBarContainer = styled.div<{ size: any }>`
  display: flex;
  height: ${(props) => isNumber(props.size) ? `${props.size}rem` : props.size};
  overflow: hidden;
  font-size: .65625rem;
  background-color: #eaedf1;
  border-radius: .25rem;

  &.striped {
    background-image: linear-gradient(45deg, rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: .625rem .625rem;
  }
`;

export const Progress = styled.div<{ percent: string; intent: string }>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width .6s ease;
  width: ${(props) => props.percent};
  background-color: var(--lens-ui-intents-${(props) => props.intent});
  color: var(--lens-ui-intents-${(props) => props.intent}-text);
  border: var(--lens-ui-intents-${(props) => props.intent}-border);
  border-radius: .25rem;

  @-webkit-keyframes progress-bar-stripes {

    0% {
      background-position-x: .625rem
    }
  }

  @keyframes progress-bar-stripes {

    0% {
      background-position-x: .625rem
    }
  }

  
  &.striped {
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: .625rem .625rem;
    animation: 1s linear infinite progress-bar-stripes;
  }
`;
