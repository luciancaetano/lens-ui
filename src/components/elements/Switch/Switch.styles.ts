import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  text-align: left;
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5em;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 2em;
  height: 1em;
  margin-top: .20em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  border: .063rem solid rgba(0,0,0,.25);
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  float: left;
  margin-left: -2.5em;
  position: absolute;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  border-radius: 2em;
  transition: background-position .15s ease-in-out;

  &:checked {
    background-color: #525ce5;
    border-color: #525ce5;
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }

  &:active {
    filter: brightness(90%);
  }

  &:focus {
    border-color: #b1bbc4;
    outline: 0;
    box-shadow: var(--lens-ui-input-base--active-box-shadow);
  }
`;

export const Label = styled.label`
  user-select: none;
  cursor: pointer;
  margin-bottom: 0;
  font-weight: 500;
  box-sizing: border-box;
  color: var(--lens-ui-typography-faded-text-color);
`;
