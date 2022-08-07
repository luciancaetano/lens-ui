import React from 'react';

import { render } from '@testing-library/react';
import ModalFooter from './ModalFooter';

describe('<ModalFooter/>', () => {
  it('render <ModalFooter/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<ModalFooter>{myChildren}</ModalFooter>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('<ModalFooter/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<ModalFooter className={myClass} testingID={testingId} />);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
