import React from 'react';

import { render } from '@testing-library/react';
import AppLayout from './AppLayout';

describe('<AppLayout/>', () => {
  it('should check if the children AppLayout is present', () => {
    const childrenAppLayout = 'My-Children-Component';
    const { getByText } = render(
      <AppLayout testingID="testing-target">{childrenAppLayout}</AppLayout>,
    );

    expect(getByText(childrenAppLayout)).toBeInTheDocument();
  });
});
