import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  &.lens-ui-tabs-style-vertical {
    flex-direction: row;

    .lens-ui-tabs-content {
      padding: .5rem .5rem .5rem 1rem;
    }

    .lens-ui-tabs-container {
      display: flex;
      flex-direction: column;
      color: var(--lens-ui-typography-most-faded-text-color);
      border-right: 1px solid var(--lens-ui-elements-tabs-border);

      .lens-ui-tabs-tab-item {
        display: block;
        padding: .5rem 1rem;
        margin-right: -1px;
        background: 0 0;
        border: 1px solid transparent;
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem;
        cursor: pointer;

        &:hover {
          color: var(--lens-ui-typography-faded-text-color);
          border-top-color: var(--lens-ui-elements-tabs-border-faded);
          border-bottom-color: var(--lens-ui-elements-tabs-border-faded);
          border-left-color: var(--lens-ui-elements-tabs-border-faded);
          border-right-color: var(--lens-ui-elements-tabs-border);
          isolation: isolate;
        }

        &.active {
          color: var(--lens-ui-typography-text-color);
          background-color: #fff;
          border-top-color: var(--lens-ui-elements-tabs-border);
          border-bottom-color: var(--lens-ui-elements-tabs-border);
          border-left-color: var(--lens-ui-elements-tabs-border);
          border-right-color: #fff;
        }
      }
    }

  }

  &.lens-ui-tabs-style-horizontal {

    .lens-ui-tabs-content {
      padding: 1rem .5rem;
    }

    .lens-ui-tabs-container {
      display: flex;
      flex-direction: row;
      color: var(--lens-ui-typography-most-faded-text-color);
      border-bottom: 1px solid var(--lens-ui-elements-tabs-border);

      .lens-ui-tabs-tab-item {
        display: block;
        padding: .5rem 1rem;
        margin-bottom: -1px;
        background: 0 0;
        border: 1px solid transparent;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
        cursor: pointer;

        &:hover {
          color: var(--lens-ui-typography-faded-text-color);
          border-color: var(--lens-ui-elements-tabs-border-faded) var(--lens-ui-elements-tabs-border-faded) var(--lens-ui-elements-tabs-border);
          isolation: isolate;
        }

        &.active {
          color: var(--lens-ui-typography-text-color);
          background-color: #fff;
          border-color: var(--lens-ui-elements-tabs-border) var(--lens-ui-elements-tabs-border) #fff;
        }
      }
    }
  }
`;
