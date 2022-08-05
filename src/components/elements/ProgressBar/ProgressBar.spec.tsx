import React from 'react';

import { render } from '@testing-library/react';
import forEach from 'lodash/forEach';
import ApplicationProvider from '../../providers/ApplicationProvider/ApplicationProvider';
import ProgressBar from './ProgressBar';
import { ProgressBarSizeEnum, ProgressBarSizeEnumType } from './ProgressBar.types';
import { Intents, IntentType } from '../../../types';

const ProgressBarSizeValues: {
  [key in ProgressBarSizeEnumType]: number;
} = {
  tiny: 0.400,
  normal: 0.625,
  medium: 0.925,
  big: 1.200,
};

describe('<ProgressBar/>', () => {
  it('render <ProgressBar/>', async () => {
    const testingId = 'myTetingId';
    const { getByTestId } = render(<ApplicationProvider><ProgressBar progress={100} testingID={testingId} /></ApplicationProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
  });

  it('render <ProgressBar/> with label', async () => {
    const testingId = 'myTetingId';
    const { getByText } = render(<ApplicationProvider><ProgressBar progress={35} withLabel testingID={testingId} /></ApplicationProvider>);

    expect(getByText('35%')).toBeInTheDocument();
  });

  it('test <ProgressBar/> sizes', async () => {
    const testingId = 'myTestingId';

    const renderTest = (size: number | string) => <ApplicationProvider><ProgressBar progress={50} size={size} testingID={testingId} /></ApplicationProvider>;

    const { getByTestId, rerender } = render(renderTest('100px'));

    expect(getByTestId(testingId)).toBeInTheDocument();

    expect(getByTestId(testingId)).toHaveStyle({
      height: '100px',
    });

    forEach(ProgressBarSizeEnum, (size: string) => {
      rerender(renderTest(size));
      expect(getByTestId(testingId)).toHaveStyle({
        height: `${ProgressBarSizeValues[size]}rem`,
      });
    });
  });

  it('test <ProgressBar/> intents', async () => {
    const testingId = 'myTestingId';

    const renderTest = (intent: IntentType) => <ApplicationProvider><ProgressBar progress={50} intent={intent as IntentType} testingID={testingId} /></ApplicationProvider>;

    const { getByTestId, rerender, container } = render(renderTest('primary'));

    expect(getByTestId(testingId)).toBeInTheDocument();

    forEach(Intents, (intent: string) => {
      rerender(renderTest(intent as IntentType));
      expect(container.querySelector<HTMLElement>('[data-lens-element="progress-bar__indicator"]')?.getAttribute('data-lens-intent')).toBe(intent);
    });
  });

  it('test <ProgressBar/> on invalid value', async () => {
    const testingId = 'myTestingId';

    const { getByTestId } = render(
      <ApplicationProvider>
        <ProgressBar progress={50} size={10020022 as ProgressBarSizeEnumType} testingID={testingId} />
      </ApplicationProvider>,
    );

    expect(getByTestId(testingId)).toBeInTheDocument();

    expect(getByTestId(testingId)).toHaveStyle({
      height: `${ProgressBarSizeValues.normal}rem`,
    });
  });

  it('<ProgressBar/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<ApplicationProvider><ProgressBar progress={50} className={myClass} testingID={testingId} /></ApplicationProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
