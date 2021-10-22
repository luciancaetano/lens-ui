import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import LensProvider from '../../providers/LensProvider/LensProvider';
import ModalHeader from './ModalHeader';

describe('<ModalHeader/>', () => {
  it('render <ModalHeader/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<LensProvider><ModalHeader>{myChildren}</ModalHeader></LensProvider>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('receive onClose event', async () => {
    const onClose = jest.fn();

    render(<LensProvider><ModalHeader onClose={onClose} /></LensProvider>);

    fireEvent.click(window.document.querySelector('.close-button-holder'));

    expect(onClose).toBeCalled();
  });

  it('<ModalHeader/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<LensProvider><ModalHeader className={myClass} testingID={testingId} /></LensProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
