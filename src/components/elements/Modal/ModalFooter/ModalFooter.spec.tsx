import React from 'react';

import { render } from '@testing-library/react';
import ApplicationProvider from '../../../providers/ApplicationProvider/ApplicationProvider';
import ModalFooter from './ModalFooter';

describe('<ModalFooter/>', () => {
  it('render <ModalFooter/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<ApplicationProvider><ModalFooter>{myChildren}</ModalFooter></ApplicationProvider>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('<ModalFooter/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<ApplicationProvider><ModalFooter className={myClass} testingID={testingId} /></ApplicationProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
