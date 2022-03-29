import React from 'react';

import { render } from '@testing-library/react';
import forEach from 'lodash/forEach';
import LensProvider from '../../providers/LensProvider/LensProvider';
import ProgressBar from './ProgressBar';
import { ProgressBarSizeEnum, ProgressBarSizeEnumType } from './ProgressBar.types';
import { Intents, IntentType } from '../../../types';

const ProgressBarSizeValues = {
  tiny: 0.400,
  normal: 0.625,
  medium: 0.925,
  big: 1.200,
};

describe('<ProgressBar/>', () => {
  it('render <ProgressBar/>', async () => {
    const testingId = 'myTetingId';
    const { getByTestId } = render(<LensProvider><ProgressBar progress={100} testingID={testingId} /></LensProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
  });

  it('render <ProgressBar/> with label', async () => {
    const testingId = 'myTetingId';
    const { getByText } = render(<LensProvider><ProgressBar progress={35} withLabel testingID={testingId} /></LensProvider>);

    expect(getByText('35%')).toBeInTheDocument();
  });

  it('test <ProgressBar/> sizes', async () => {
    const testingId = 'myTestingId';

    const renderTest = (size) => <LensProvider><ProgressBar progress={50} size={size as ProgressBarSizeEnumType} testingID={testingId} /></LensProvider>;

    const { getByTestId, rerender } = render(renderTest('100px'));

    expect(getByTestId(testingId)).toBeInTheDocument();

    expect(getByTestId(testingId)).toHaveStyle({
      height: '100px',
    });

    forEach(ProgressBarSizeEnum, (size) => {
      rerender(renderTest(size as any));
      expect(getByTestId(testingId)).toHaveStyle({
        height: `${ProgressBarSizeValues[size]}rem`,
      });
    });
  });

  it('test <ProgressBar/> intents', async () => {
    const testingId = 'myTestingId';

    const renderTest = (intent) => <LensProvider><ProgressBar progress={50} intent={intent as IntentType} testingID={testingId} /></LensProvider>;

    const { getByTestId, rerender, container } = render(renderTest('100px'));

    expect(getByTestId(testingId)).toBeInTheDocument();

    forEach(Intents, (intent) => {
      rerender(renderTest(intent as any));
      expect(container.querySelector('[data-lens-element="progress-bar__indicator"]').getAttribute('data-lens-intent')).toBe(intent);
    });
  });

  it('test <ProgressBar/> on invalid value', async () => {
    const testingId = 'myTestingId';

    const { getByTestId } = render(
      <LensProvider>
        <ProgressBar progress={50} size={10020022 as ProgressBarSizeEnumType} testingID={testingId} />
      </LensProvider>,
    );

    expect(getByTestId(testingId)).toBeInTheDocument();

    expect(getByTestId(testingId)).toHaveStyle({
      height: `${ProgressBarSizeValues.normal}rem`,
    });
  });

  it('<ProgressBar/> must contain class', async () => {
    const myClass = 'settClassCustom';
    const testingId = 'myTestingId';
    const { getByTestId } = render(<LensProvider><ProgressBar progress={50} className={myClass} testingID={testingId} /></LensProvider>);

    expect(getByTestId(testingId)).toBeInTheDocument();
    expect(getByTestId(testingId)).toHaveClass(myClass);
  });
});
