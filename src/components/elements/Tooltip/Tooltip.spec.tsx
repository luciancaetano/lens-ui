import React from 'react';

import { render } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('<Tooltip/>', () => {
  it('should render correct Tooltip children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Tooltip>{childrenText}</Tooltip>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
