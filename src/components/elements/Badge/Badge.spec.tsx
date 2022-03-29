import React from 'react';

import { render } from '@testing-library/react';
import { Intents } from '../../../types';
import Badge from './Badge';

describe('<Badge/>', () => {
  it('should render correct badge children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<Badge>{childrenText}</Badge>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });

  it('should render correct badge ss', () => {
    const testingId = 'my-testing-id';
    const { getByTestId, rerender } = render(<Badge testingID={testingId}>1</Badge>);

    expect(getByTestId(testingId).getAttribute('data-lens-intent')).toBe('primary');

    Object.keys(Intents).forEach((intent) => {
      rerender(<Badge testingID={testingId} intent={intent as any}>1</Badge>);
      expect(getByTestId(testingId).getAttribute('data-lens-intent')).toBe(intent);
    });
  });
});
