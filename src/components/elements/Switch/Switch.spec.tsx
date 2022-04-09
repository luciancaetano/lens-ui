import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('<Switch/>', () => {
  it('should render Switch input', () => {
    const { container } = render(
      <Switch label="TestSwitch" id="testing-id" checked testingID="testing-target" />,
    );

    expect(container.querySelector<HTMLElement>('input')).toBeInTheDocument();
  });

  it('should test input with defaultChecked prop', () => {
    const { container } = render(
      <Switch label="TestSwitch" defaultChecked testingID="testing-target" />,
    );

    expect(container.querySelector<HTMLElement>('input')).toBeInTheDocument();
    expect(container.querySelector<HTMLElement>('input')?.attributes).toHaveProperty('checked');
  });

  it('should test input with defaultChecked prop to be false', () => {
    const { container } = render(
      <Switch label="TestSwitch" defaultChecked={false} testingID="testing-target" />,
    );

    expect(container.querySelector<HTMLElement>('input')).toBeInTheDocument();
    expect(container.querySelector<HTMLElement>('input')?.attributes).not.toHaveProperty('checked');
  });

  it('should return checked status in onChange event', async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(
      <Switch label="TestSwitch" testingID="testing-target" onChange={onChange} onBlur={onBlur} />,
    );

    fireEvent.click(container.querySelector<HTMLElement>('input') as HTMLElement);
    fireEvent.click(container.querySelector<HTMLElement>('input') as HTMLElement);

    fireEvent.blur(container.querySelector<HTMLElement>('input') as HTMLElement);
    fireEvent.blur(container.querySelector<HTMLElement>('input') as HTMLElement);

    await new Promise((r) => setTimeout(r, 1000));

    expect(onChange.mock.calls.length).toBe(2);
    expect(onChange.mock.calls[0][0]).toBe(true);
    expect(onChange.mock.calls[1][0]).toBe(false);

    expect(onBlur.mock.calls.length).toBe(2);
  });
});
