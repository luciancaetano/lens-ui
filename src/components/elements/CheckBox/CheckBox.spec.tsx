import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import CheckBox from './CheckBox';

describe('<CheckBox/>', () => {
  it('should render checkbox input', () => {
    const { container } = render(
      <CheckBox label="TestCheckbox" id="testing-id" checked testingID="testing-target" />,
    );

    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should render checkbox input with defaultChecked prop', () => {
    const { container } = render(
      <CheckBox label="TestCheckbox" defaultChecked testingID="testing-target" />,
    );

    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should test input with defaultChecked prop', () => {
    const { container } = render(
      <CheckBox label="TestCheckBox" defaultChecked testingID="testing-target" />,
    );

    expect(container.querySelector('input')).toBeInTheDocument();
    expect(container.querySelector('input').attributes).toHaveProperty('checked');
  });

  it('should test input with defaultChecked prop to be false', () => {
    const { container } = render(
      <CheckBox label="TestCheckBox" defaultChecked={false} testingID="testing-target" />,
    );

    expect(container.querySelector('input')).toBeInTheDocument();
    expect(container.querySelector('input').attributes).not.toHaveProperty('checked');
  });

  it('should return checked status in onChange event', async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(
      <CheckBox label="TestCheckbox" testingID="testing-target" onChange={onChange} onBlur={onBlur} />,
    );

    fireEvent.click(container.querySelector('input'));
    fireEvent.click(container.querySelector('input'));

    fireEvent.blur(container.querySelector('input'));
    fireEvent.blur(container.querySelector('input'));

    await new Promise((r) => setTimeout(r, 1000));

    expect(onChange.mock.calls.length).toBe(2);
    expect(onChange.mock.calls[0][0]).toBe(true);
    expect(onChange.mock.calls[1][0]).toBe(false);

    expect(onBlur.mock.calls.length).toBe(2);
  });
});
