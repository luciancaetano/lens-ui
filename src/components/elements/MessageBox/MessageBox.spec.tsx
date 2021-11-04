import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import MessageBox from './MessageBox';
import LensProvider from '../../providers/LensProvider/LensProvider';
import { sleep } from '../../../utils';

jest.useFakeTimers();

jest.mock('../../../utils', () => ({
  sleep: () => true,
  Layers: {
    Toast: 1,
  },
}));

describe('<MessageBox/>', () => {
  it('should test component rederization', async () => {
    const children = 'Hello world';
    const title = 'my_title';
    const testingId = 'my_testing_id';

    const { getByTestId, getByText } = render(
      <LensProvider>
        <MessageBox title={title} testingID={testingId}>
          {children}
        </MessageBox>
      </LensProvider>,
    );

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
  });

  it('should test the close button uncontrolled state', async () => {
    const children = 'Hello world';
    const title = 'my_title';
    const testingId = 'my_testing_id';

    const { getByTestId, getByText, container } = render(
      <LensProvider>
        <MessageBox title={title} testingID={testingId} closable>
          {children}
        </MessageBox>
      </LensProvider>,
    );

    const childrenEl = getByText(children);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(childrenEl).toBeInTheDocument();
    expect(container.querySelector('[data-lens-element="message-box__close-button"]')).toBeInTheDocument();

    fireEvent.click(container.querySelector('[data-lens-element="message-box__close-button"]'));

    jest.advanceTimersByTime(10000);

    await sleep(1000);

    expect(childrenEl).not.toBeInTheDocument();
    expect(container.querySelector('[data-lens-element="message-box__close-button"]')).not.toBeInTheDocument();
  });

  it('should test automatic closing', async () => {
    const children = 'Hello world';
    const title = 'my_title';
    const testingId = 'my_testing_id';
    const onClose = jest.fn();

    const { getByTestId, getByText, container } = render(
      <LensProvider>
        <MessageBox title={title} testingID={testingId} timeout={3000} onClose={onClose} icon={<>Icon</>} striped>
          {children}
        </MessageBox>
      </LensProvider>,
    );

    const childrenEl = getByText(children);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(childrenEl).toBeInTheDocument();
    expect(container.querySelector('[data-lens-element="message-box__close-button"]')).toBeInTheDocument();

    jest.advanceTimersByTime(10000);

    await sleep(1000);

    expect(onClose).toBeCalled();
    expect(childrenEl).not.toBeInTheDocument();
    expect(container.querySelector('[data-lens-element="message-box__close-button"]')).not.toBeInTheDocument();
  });
});
