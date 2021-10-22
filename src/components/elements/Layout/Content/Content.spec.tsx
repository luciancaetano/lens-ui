import React from 'react';

import { render } from '@testing-library/react';
import Content from './Content';

describe('<Content/>', () => {
  it('should check if the children content is present', () => {
    const childrenContent = 'My-Children-Component';
    const { getByText, rerender } = render(
      <>
        <Content testingID="testing-target" layout="vertical">{childrenContent}</Content>
      </>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();

    rerender(
      <>
        <Content testingID="testing-target">{childrenContent}</Content>
      </>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();

    rerender(
      <>
        <Content testingID="testing-target" layout="horizontal">{childrenContent}</Content>
      </>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();
  });
});
