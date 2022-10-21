import React from 'react';

import { render } from '@testing-library/react';
import InputSlider from './Slider';

describe('<InputSlider/>', () => {
  it('should render correct InputSlider children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<InputSlider>{childrenText}</InputSlider>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
