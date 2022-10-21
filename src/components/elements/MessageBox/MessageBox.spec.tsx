import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import MessageBox from './MessageBox';

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
      <MessageBox title={title} testingID={testingId}>
        {children}
      </MessageBox>,
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
      <MessageBox title={title} testingID={testingId} closable>
        {children}
      </MessageBox>,
    );

    const childrenEl = getByText(children);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(childrenEl).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    fireEvent.click(container.querySelector<HTMLElement>('[data-lens-element="message-box__close-button"]') as HTMLElement);

    jest.advanceTimersByTime(10000);

    await sleep(500);

    expect(container).toMatchSnapshot();
  });

  it('should test automatic closing', async () => {
    const children = 'Hello world';
    const title = 'my_title';
    const testingId = 'my_testing_id';
    const onClose = jest.fn();

    const { getByTestId, getByText, container } = render(
      <MessageBox title={title} testingID={testingId} timeout={100} onClose={onClose} icon={<>Icon</>} striped>
        {children}
      </MessageBox>,
    );

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    jest.advanceTimersByTime(10000);

    await sleep(500);

    expect(onClose).toBeCalled();
    expect(container).toMatchSnapshot();
  });
});
