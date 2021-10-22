/* eslint-disable no-console */
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MaskedInput from './MaskedInput';

describe('<MaskedInput/>', () => {
  let oldcerr: any = null;
  beforeAll(() => {
    oldcerr = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = oldcerr;
  });

  it('should render MaskedInput input', () => {
    const { container } = render(
      <>
        <MaskedInput
          mask="99/99/9999"
          defaultValue="11/22/1111"
          id="testing-id"
          testingID="testing-target"
        />
      </>,
    );

    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should test input with defaultValue prop', () => {
    const { container } = render(
      <>
        <MaskedInput
          mask="99/99/9999"
          defaultValue="11/22/1111"
          id="testing-id"
          testingID="testing-target"
        />
      </>,
    );

    expect(container.querySelector('input')).toBeInTheDocument();
    expect(container.querySelector('input').value).toBe('11/22/1111');
  });

  it('should return value in onChange event', async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(
      <>
        <MaskedInput mask="99/99/9999" testingID="testing-target" onChange={onChange} onBlur={onBlur} />
      </>,
    );

    fireEvent.click(container.querySelector('input'));
    userEvent.type(container.querySelector('input'), '11/22/1111');
    fireEvent.blur(container.querySelector('input'));

    expect(onChange).toHaveBeenCalled();
  });
});
