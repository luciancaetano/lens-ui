import React from 'react';

import { render } from '@testing-library/react';
import Divider from './Divider';

describe('<Divider/>', () => {
  it('should check if the children content is present', () => {
    const childrenContent = 'My-Children-Component';
    const { getByText } = render(
      <>
        <Divider testingID="testing-target">{childrenContent}</Divider>
      </>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();
  });
});
