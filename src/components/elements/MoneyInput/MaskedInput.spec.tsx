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

    expect(container.querySelector('input')).toBeInTheDocument();
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

    expect(container.querySelector('input')).toBeInTheDocument();

    await sleep(1000);

    expect(container.querySelector('input').value).toBe('10,000.00');
  });

  it('should return value in onChange event', async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(
      <MoneyInput testingID="testing-target" onChange={onChange} onBlur={onBlur} />,
    );

    fireEvent.click(container.querySelector('input'));
    userEvent.type(container.querySelector('input'), '1000');
    fireEvent.blur(container.querySelector('input'));

    expect(onChange).toHaveBeenCalled();
  });
});
