import React from 'react';

import { render } from '@testing-library/react';
import Paginator from './Paginator';

describe('<Paginator/>', () => {
  it('should render correct Paginator children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Paginator>{childrenText}</Paginator>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
