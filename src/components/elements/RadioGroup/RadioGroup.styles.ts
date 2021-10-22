import styled from 'styled-components';

export const RadioGroupContainer = styled.div`
  position: relative;
  text-align: left;
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5em;
  box-sizing: border-box;

  .lens-ui-radio-group-item-container {
    padding-top: .4rem;
    padding-bottom: .4rem;
  }

  .lens-ui-radio-group-item-container:first-child {
    padding-top: 0;
  }

  .lens-ui-radio-group-item-container:last-child {
    padding-bottom: 0;
  }
`;

export const Input = styled.input`
  width: 1em;
  height: 1em;
  margin-top: .08em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: .063rem solid rgba(0,0,0,.25);
  appearance: none;
  transition: background-color .15s ease-in-out,background-position .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
  float: left;
  margin-left: -1.5em;
  border-radius: 50%;
  position: absolute;

  &:checked {
    background-color: #525ce5;
    border-color: #525ce5;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
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
