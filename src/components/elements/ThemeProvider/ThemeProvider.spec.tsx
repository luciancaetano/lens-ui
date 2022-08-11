import React from 'react';

import { render } from '@testing-library/react';
import ThemeProvider from './ThemeProvider';

describe('<ThemeProvider/>', () => {
  it('should render correct ThemeProvider children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<ThemeProvider>{childrenText}</ThemeProvider>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
