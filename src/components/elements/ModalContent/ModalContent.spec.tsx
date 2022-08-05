import React from 'react';

import { render } from '@testing-library/react';
import ApplicationProvider from '../../providers/ApplicationProvider/ApplicationProvider';
import ModalContent from './ModalContent';

describe('<ModalContent/>', () => {
  it('render <ModalContent/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<ApplicationProvider><ModalContent>{myChildren}</ModalContent></ApplicationProvider>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('<ModalContent/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<ApplicationProvider><ModalContent className={myClass} testingID={testingId} /></ApplicationProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
