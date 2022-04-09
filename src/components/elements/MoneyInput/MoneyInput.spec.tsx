/* eslint-disable no-console */
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoneyInput from './MoneyInput';
import { sleep } from '../../../utils';

describe('<MoneyInput/>', () => {
  it('should render <MoneyInput/> input', () => {
    const { container } = render(
      <MoneyInput
        defaultValue={1000}
        id="testing-id"
        testingID="testing-target"
      />,
    );
    const input: HTMLElement = container.querySelector<HTMLElement>('[data-lens-element="money-input__input"]') as HTMLInputElement;

    expect(input).toBeInTheDocument();
  });

  it('should test input with defaultValue prop', async () => {
    const { container } = render(
      <MoneyInput
        defaultValue={10000}
        id="testing-id"
        testingID="testing-target"
        isError
        decimalSeparator="."
        thousandSeparator=","
        precision={2}
      />,
    );

    const input: HTMLInputElement = container.querySelector<HTMLInputElement>('[data-lens-element="money-input__input"]') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    await sleep(1000);

    expect(input?.value).toBe('10,000.00');
  });

  it('should return value in onChange event', async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(
      <MoneyInput testingID="testing-target" onChange={onChange} onBlur={onBlur} />,
    );

    const input: HTMLElement = container.querySelector<HTMLElement>('[data-lens-element="money-input__input"]') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    fireEvent.click(input);
    await userEvent.type(input, '1000');
    fireEvent.blur(input);

    await sleep(1000);

    expect(onChange).toHaveBeenCalled();
  });
});
