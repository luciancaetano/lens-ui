import React from 'react';

import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('<Sidebar/>', () => {
  it('should check if the children content is present', () => {
    const childrenContent = 'My-Children-Component';
    const { getByText } = render(
      <Sidebar testingID="testing-target">{childrenContent}</Sidebar>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();
  });
});
