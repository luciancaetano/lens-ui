import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import DateInput from './DateInput';

describe('<DateInput/>', () => {
  it('should render DateInput', () => {
    const testingID = 'myTestingId';
    const { getByTestId } = render(<DateInput testingID={testingID} />);

    expect(getByTestId(testingID)).toBeInTheDocument();
  });

  it('should render DateInput with no locale', () => {
    const testingID = 'myTestingId';
    const { getByTestId } = render(<DateInput testingID={testingID} locale={null} />);

    expect(getByTestId(testingID)).toBeInTheDocument();
  });

  it('should test date input default type', async () => {
    const onChange = jest.fn();
    const testingID = 'myTestingId';
    const testValue = '1991-03-03 15:00:00';
    const { container, getByText } = render(<DateInput testingID={testingID} onChange={onChange} value={testValue} />);

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();

    expect(input.value).toBe('03/03/1991');

    fireEvent.focus(input);

    fireEvent.click(getByText('15'));

    fireEvent.blur(input);

    expect(input.value).toBe('15/03/1991');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toBe('1991-03-15 15:00:00');
  });

  it('should test date input default type="month-only"', async () => {
    const onChange = jest.fn();
    const testingID = 'myTestingId';
    const testValue = '05';
    const { container } = render(<DateInput type="month-only" testingID={testingID} onChange={onChange} value={testValue} />);

    const input = container.querySelector('input');

    expect(input.value).toBe(testValue);

    expect(input).toBeInTheDocument();

    fireEvent.focus(input);

    fireEvent.click(container.querySelector('.rmdp-day'));

    fireEvent.blur(input);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toBe('1');
  });

  it('should test date input default type="range"', async () => {
    const onChange = jest.fn();
    const testingID = 'myTestingId';
    const testValue = [];
    const now = {
      y: new Date().getFullYear(),
      m: (new Date().getMonth() + 1).toString().padStart(2, '0'),
    };
    const { container, getByText } = render(<DateInput displayFormat="DD/MM/YYYY" testingID={testingID} type="multiple" dateFormat="yyyy-MM-dd" onChange={onChange} value={testValue} />);

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();

    fireEvent.focus(input);

    fireEvent.click(getByText('10'));
    fireEvent.click(getByText('20'));

    fireEvent.blur(input);

    expect(input.value).toBe(`10/${now.m}/${now.y}, 20/${now.m}/${now.y}`);
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toStrictEqual([`${now.y}-${now.m}-10`, `${now.y}-${now.m}-20`,
    ]);
  });

  it('should test date input default type="multiple"', async () => {
    const onChange = jest.fn();
    const testingID = 'myTestingId';
    const testValue = ['1991-03-03 00:00:00'];
    const { container, getByText } = render(<DateInput testingID={testingID} type="multiple" onChange={onChange} value={testValue} />);

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();

    fireEvent.focus(input);

    fireEvent.click(getByText('16'));
    fireEvent.focus(input);
    fireEvent.click(getByText('17'));
    fireEvent.focus(input);
    fireEvent.click(getByText('18'));

    fireEvent.blur(input);

    expect(input.value).toBe('03/03/1991, 16/03/1991, 17/03/1991, 18/03/1991');
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toStrictEqual(['1991-03-03 00:00:00', '1991-03-16 00:00:00', '1991-03-17 00:00:00', '1991-03-18 00:00:00']);
  });

  it('should test date input default type="year-only"', async () => {
    const onChange = jest.fn();
    const testingID = 'myTestingId';
    const testValue = '2021';
    const { container, getByText } = render(<DateInput type="year-only" testingID={testingID} onChange={onChange} value={testValue} />);

    const input = container.querySelector('input');

    expect(input.value).toBe(testValue);

    expect(input).toBeInTheDocument();

    fireEvent.focus(input);

    fireEvent.click(getByText('2020'));

    fireEvent.blur(input);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toBe('2020');
  });

  it('should test date input default type="time-only"', async () => {
    const onChange = jest.fn();
    const testingID = 'myTestingId';
    const testValue = '21:44:46';

    const { container } = render(<DateInput type="time-only" name={testingID} testingID={testingID} onChange={onChange} value={testValue} />);

    const theInput = window.document.querySelector<HTMLInputElement>(`input[name="${testingID}"]`);

    expect(theInput).toBeInTheDocument();

    expect(theInput.value).toBe(`${testValue} PM`);

    fireEvent.focus(theInput);

    const inputHH = container.querySelector('input[name="hour"]');
    const inputMM = container.querySelector('input[name="minute"]');
    const inputSS = container.querySelector('input[name="second"]');

    expect(inputHH).toBeInTheDocument();
    expect(inputMM).toBeInTheDocument();
    expect(inputSS).toBeInTheDocument();
    fireEvent.click(container.querySelector('.rmdp-arrow-container'));

    fireEvent.blur(theInput);

    expect(onChange.mock.calls[0][0]).toBe('22:44:46');
  });
});
