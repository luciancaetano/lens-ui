import React, { useState } from 'react';

import {
  fireEvent, render, renderHook, act,
} from '@testing-library/react';
import ApplicationProvider from '../../providers/ApplicationProvider/ApplicationProvider';
import RadioGroup from './RadioGroup';
import { IRadioGroupOption } from './RadioGroup.types';

const options: IRadioGroupOption[] = [
  { label: 'option1', value: '1', testingID: 'option1_testing' },
  { label: 'option2', value: '0', testingID: 'option2_testing' },
  { label: 'option3', value: 'option_3_value', testingID: 'option3_testing' },
];

describe('<RadioGroup/>', () => {
  it('render <RadioGroup/>', async () => {
    const testingID = 'myTetingId';

    const { getByTestId, getByText } = render(<ApplicationProvider><RadioGroup options={options} name="myRadioGroup" testingID={testingID} /></ApplicationProvider>);

    expect(getByTestId(testingID)).toBeInTheDocument();

    options.forEach((opt) => {
      expect(getByText(opt.label as string)).toBeInTheDocument();
    });
  });

  it('<RadioGroup/> default value', async () => {
    const testingID = 'myTetingId';

    const { getByTestId, getByText } = render(<ApplicationProvider><RadioGroup options={options} defaultValue={options[0].value} name="myRadioGroup" testingID={testingID} /></ApplicationProvider>);

    expect(getByTestId(testingID)).toBeInTheDocument();

    expect(getByText(options[0].label as string)?.parentElement?.firstChild).toHaveAttribute('checked');
  });

  it('<RadioGroup/> controlled', async () => {
    const testingID = 'myTetingId';

    const hook = renderHook(() => useState(null));

    const onChange = (value: any) => {
      act(() => {
        hook.result.current[1](value);
      });
    };

    const { getByTestId, getByText } = render(
      <ApplicationProvider>
        <RadioGroup
          value={hook.result.current[0]}
          options={options}
          onChange={onChange}
          name="myRadioGroup"
          testingID={testingID}
        />
      </ApplicationProvider>,
    );

    fireEvent.click(getByText(options[0].label as string));
    fireEvent.blur(getByText(options[0].label as string));

    expect(getByTestId(testingID)).toBeInTheDocument();
    expect(hook.result.current[0]).toBe(options[0].value);
  });

  it('<RadioGroup/> controlled each option', async () => {
    const testingID = 'myTetingId';

    const hook = renderHook(() => useState(null));

    const onChange = (value: any) => {
      act(() => {
        hook.result.current[1](value);
      });
    };

    const { getByTestId } = render(
      <ApplicationProvider>
        <RadioGroup
          value={hook.result.current[0]}
          options={options}
          onChange={onChange}
          name="myRadioGroup"
          testingID={testingID}
        />
      </ApplicationProvider>,
    );

    expect(getByTestId(testingID)).toBeInTheDocument();

    const getElement = (index: number): HTMLElement => getByTestId(String(options[index].testingID))?.querySelector<HTMLElement>('input') as HTMLElement;

    fireEvent.click(getElement(0));
    fireEvent.blur(getElement(0));
    expect(hook.result.current[0]).toBe(options[0].value);

    fireEvent.click(getElement(1));
    fireEvent.blur(getElement(1));
    expect(hook.result.current[0]).toBe(options[1].value);

    fireEvent.click(getElement(2));
    fireEvent.blur(getElement(2));
    expect(hook.result.current[0]).toBe(options[2].value);
  });
});
