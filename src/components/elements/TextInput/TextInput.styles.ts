import styled from 'styled-components';

export const TextInputContainer = styled.div`
  position: relative;
  text-align: left;
  display: block;
  min-height: 1.3125rem;
  box-sizing: border-box;

  &.search {
    position: relative;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: .47rem .75rem;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--lens-ui-typography-text-color);
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &.search {
    padding-right: 2.125rem;
  }

  &:focus {
    outline: 0;
    border: var(--lens-ui-input-base-border--active);
    outline: 0;
  }

  &.pinput-error {
    border: 1px solid var(--lens-ui-intents-danger-border);
  }

`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: .47rem .75rem;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--lens-ui-typography-text-color);
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  min-height: 100px;
  scrollbar-width: thin;
  scrollbar-color: var(--lens-ui-scrollbar-thumb) var(--lens-ui-scrollbar-track);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 11px;
    cursor: default;
  }

  &::-webkit-scrollbar-track {
    background: var(--lens-ui-scrollbar-track);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--lens-ui-scrollbar-thumb) ;
    border-radius: 6px;
    border: 3px solid var(--lens-ui-scrollbar-track);
  }

  &:focus {
    outline: 0;
    border: var(--lens-ui-input-base-border--active);
    outline: 0;
  }

  &.pinput-error {
    border: 1px solid var(--lens-ui-intents-danger-border);
  }

`;

export const SearchIcon = styled.div`
  position: absolute;
  top: .438rem;
  right: .75rem;
`;
