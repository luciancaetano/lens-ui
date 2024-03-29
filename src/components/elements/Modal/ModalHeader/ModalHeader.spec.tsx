import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import ModalHeader from './ModalHeader';

describe('<ModalHeader/>', () => {
  it('render <ModalHeader/> with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<ModalHeader>{myChildren}</ModalHeader>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('receive onClose event', async () => {
    const onClose = jest.fn();

    render(<ModalHeader onClose={onClose} />);

    fireEvent.click(window.document.querySelector<HTMLElement>('[data-lens-element="modal__header__close-button"]') as HTMLElement);

    expect(onClose).toBeCalled();
  });

  it('<ModalHeader/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<ModalHeader className={myClass} testingID={testingId} />);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
