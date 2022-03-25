import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('<DatePicker/>', () => {
  it('should render DatePicker', () => {
    const testingID = 'myTestingId';
    const { getByTestId } = render(<DatePicker testingID={testingID} />);

    expect(getByTestId(testingID)).toBeInTheDocument();
  });
});
