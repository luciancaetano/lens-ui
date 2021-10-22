import React from 'react';

import { render } from '@testing-library/react';
import { IntentEnum } from '../../../types';
import Callout from './Callout';

const testingId = 'myTestingId';
const title = 'myTitle';
const icon = 'myIcon';

describe('<Callout/>', () => {
  it('should render correct Callout with title and icon', () => {
    const { getByTestId } = render(<Callout testingID={testingId} title={title} icon={<div>{icon}</div>} />);

    expect(getByTestId(testingId)).toBeInTheDocument();
  });

  it('should render correct Callout with only title', () => {
    const { getByText } = render(<Callout testingID={testingId} title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });

  it('should render correct Callout with only icon', () => {
    const { getByText } = render(<Callout testingID={testingId} icon={<div>{icon}</div>} />);

    expect(getByText(icon)).toBeInTheDocument();
  });

  it('should render correct Callout with title and icon', () => {
    const { getByText } = render(<Callout testingID={testingId} title={title} icon={<div>{icon}</div>} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(icon)).toBeInTheDocument();
  });

  it('should render all intents', () => {
    const { getByTestId, rerender } = render(<Callout testingID={testingId} icon={<div>{icon}</div>} />);

    Object.keys(IntentEnum).forEach((intent) => {
      rerender(<Callout testingID={testingId} intent={intent as any} icon={<div>{icon}</div>} />);
      expect(getByTestId(testingId).classList.contains(`intent-${intent}`)).toBe(true);
    });
  });

  it('should not have an intent', () => {
    const { getByTestId } = render(<Callout testingID={testingId} icon={<div>{icon}</div>} intent={undefined} />);

    Object.keys(IntentEnum).forEach((intent) => {
      expect(getByTestId(testingId).classList.contains(`intent-${intent}`)).toBe(false);
    });
  });
});
