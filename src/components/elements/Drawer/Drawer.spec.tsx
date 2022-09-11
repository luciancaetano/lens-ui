import React from 'react';

import { render } from '@testing-library/react';
import Drawer from './Drawer';

describe('<Drawer/>', () => {
  it('should render correct Drawer children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Drawer>{childrenText}</Drawer>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
