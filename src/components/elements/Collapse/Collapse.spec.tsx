import React from 'react';

import { render } from '@testing-library/react';
import Collapse from './Collapse';

describe('<Collapse/>', () => {
  it('should render correct Collapse children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Collapse>{childrenText}</Collapse>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
