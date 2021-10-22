import React from 'react';

import { render } from '@testing-library/react';
import { IntentEnum } from '../../../types';
import Loader from './Loader';

describe('<Loader/>', () => {
  it('should render correct Loader children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Loader>{childrenText}</Loader>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });

  it('should render correct Loader intents', () => {
    const testingId = 'my-testing-id';
    const { getByTestId, rerender } = render(<Loader testingID={testingId} intent={null}>1</Loader>);

    Object.keys(IntentEnum).forEach((intent) => {
      rerender(<Loader testingID={testingId} intent={intent as any} size={20}>1</Loader>);
      expect(getByTestId(testingId)).toMatchSnapshot(intent);
    });
  });

  it('should render correct Loader types', () => {
    const testingId = 'my-testing-id';
    const { getByTestId, rerender } = render(<Loader testingID={testingId} intent={null}>1</Loader>);

    ['eclipse', 'spinner', 'oval'].forEach((type) => {
      rerender(<Loader testingID={testingId} type={type as any}>1</Loader>);
      expect(getByTestId(testingId)).toMatchSnapshot(type);
    });
  });
});
