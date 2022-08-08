import React from 'react';

import { render } from '@testing-library/react';
import Row from './Row';

describe('<Row/>', () => {
  it('should render correct Row children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Row>{childrenText}</Row>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
