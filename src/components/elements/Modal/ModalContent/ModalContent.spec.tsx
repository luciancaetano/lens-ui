import React from 'react';

import { render } from '@testing-library/react';
import ModalContent from './ModalContent';

describe('<ModalContent/>', () => {
  it('render <ModalContent/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<ModalContent>{myChildren}</ModalContent>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('<ModalContent/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<ModalContent className={myClass} testingID={testingId} />);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
