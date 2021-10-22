import React from 'react';

import { render } from '@testing-library/react';
import LensProvider from '../../providers/LensProvider/LensProvider';
import ModalFooter from './ModalFooter';

describe('<ModalFooter/>', () => {
  it('render <ModalFooter/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<LensProvider><ModalFooter>{myChildren}</ModalFooter></LensProvider>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('<ModalFooter/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<LensProvider><ModalFooter className={myClass} testingID={testingId} /></LensProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
