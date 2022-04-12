import React from 'react';

import { render } from '@testing-library/react';
import Image from './Image';

describe('<Image/>', () => {
  it('should render correct Image children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Image>{childrenText}</Image>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
