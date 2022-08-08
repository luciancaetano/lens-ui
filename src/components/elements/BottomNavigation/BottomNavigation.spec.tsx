import React from 'react';

import { render } from '@testing-library/react';
import BottomNavigation from './BottomNavigation';

describe('<BottomNavigation/>', () => {
  it('should render correct BottomNavigation children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<BottomNavigation>{childrenText}</BottomNavigation>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
