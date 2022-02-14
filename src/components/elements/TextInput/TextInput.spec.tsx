import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('<TextInput/>', () => {
  it('should render TextInput input', () => {
    const { container } = render(
      <TextInput
        defaultValue="lorem impsum"
        id="testing-id"
        testingID="testing-target"
        type="search"
        isError
      />,
    );

    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should test input with defaultValue prop', () => {
    const { container } = render(
      <TextInput
        defaultValue="lorem impsum"
        id="testing-id"
        testingID="testing-target"
        multiline
        isError
      />,
    );

    expect(container.querySelector('textarea')).toBeInTheDocument();
    expect(container.querySelector('textarea').value).toBe('lorem impsum');
  });

  it('should return value in onChange event', async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(
      <TextInput testingID="testing-target" onChange={onChange} onBlur={onBlur} />,
    );

    fireEvent.click(container.querySelector('input'));
    userEvent.type(container.querySelector('input'), 'lorem impsum');
    fireEvent.blur(container.querySelector('input'));

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('lorem impsum');
  });
});
