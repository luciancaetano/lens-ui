import React from 'react';

import { render } from '@testing-library/react';
import LensProvider from '../../providers/LensProvider/LensProvider';
import ModalContent from './ModalContent';

describe('<ModalContent/>', () => {
  it('render <ModalContent/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<LensProvider><ModalContent>{myChildren}</ModalContent></LensProvider>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('<ModalContent/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<LensProvider><ModalContent className={myClass} testingID={testingId} /></LensProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
