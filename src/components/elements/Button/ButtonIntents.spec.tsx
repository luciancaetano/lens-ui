import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import {
  Intents,
} from '../../../types';
import Buttom from './Button';
import { ButtonAppearanceEnum, IButtonProps, ButtonSizeEnum } from './Button.types';

describe('<Button/> intents ,variations and appearances', () => {
  let btnProps: IButtonProps = {};

  const testingJSX = () => (<Buttom testingID={String(btnProps.testingID)} {...btnProps}>Hello World</Buttom>);

  beforeEach(() => {
    btnProps = {
      appearance: 'default',
      className: '',
      disabled: false,
      intent: 'primary',
      size: 'normal',
      testingID: 'btn-testing-id',
      onBlur: undefined,
      onClick: undefined,
      onDoubleClick: undefined,
      onFocus: undefined,
      style: undefined,
    };
  });

  it('should check the button intents classname', () => {
    const mockedClasses = ['my-mocked-classname', 'my-second-mocked-classname'];
    btnProps.className = mockedClasses.join(' ');
    const { getByTestId } = render(testingJSX());

    const renderedButton = getByTestId(String(btnProps.testingID));

    mockedClasses.forEach((className) => {
      expect(renderedButton.classList.contains(className)).toBe(true);
    });
  });

  it('should check if the button appearance is valid', () => {
    const { getByTestId, rerender } = render(testingJSX());

    const interationCalls = jest.fn();

    Object.keys(ButtonAppearanceEnum).forEach((appearance) => {
      btnProps.appearance = appearance as any;
      rerender(testingJSX());

      const renderedButton = getByTestId(String(btnProps.testingID));

      expect(renderedButton.getAttribute('data-lens-appearance')).toBeTruthy();

      interationCalls();
    });

    expect(interationCalls).toBeCalledTimes(Object.keys(ButtonAppearanceEnum).length);
  });

  it('should check that the button has no undeclared classes or changes in intent/variation/appearance', () => {
    const { getByTestId, rerender } = render(testingJSX());

    const interationCalls = {
      intent: jest.fn(),
      appearance: jest.fn(),
    };

    Object.keys(Intents).forEach((intent) => {
      btnProps.intent = intent as any;
      rerender(testingJSX());

      const renderedButton = getByTestId(String(btnProps.testingID));

      expect(renderedButton.getAttribute('data-lens-intent')).toBe(intent);

      interationCalls.intent();
    });

    Object.keys(ButtonAppearanceEnum).forEach((appearance) => {
      btnProps.appearance = appearance as any;
      rerender(testingJSX());

      const renderedButton = getByTestId(String(btnProps.testingID));

      expect(renderedButton.getAttribute('data-lens-appearance')).toBe(appearance);

      interationCalls.appearance();
    });

    expect(interationCalls.intent).toBeCalledTimes(Object.keys(Intents).length);
    expect(interationCalls.appearance).toBeCalledTimes(Object.keys(ButtonAppearanceEnum).length);
  });

  it('should check if button size change classes', () => {
    const { rerender, container } = render(testingJSX());

    const interationCalls = jest.fn();

    Object.keys(ButtonSizeEnum).forEach((size) => {
      btnProps.size = size as any;
      rerender(testingJSX());

      expect(container.querySelector<HTMLElement>(`[data-lens-button-size="${size}"]`)).toBeInTheDocument();

      interationCalls();
    });

    expect(interationCalls).toBeCalledTimes(Object.keys(ButtonSizeEnum).length);
  });
});

describe('<Button/> states (disabled, large)', () => {
  let btnProps: IButtonProps = {};

  const testingJSX = () => (<Buttom testingID={String(btnProps.testingID)} {...btnProps}>Hello World</Buttom>);

  beforeEach(() => {
    btnProps = {
      appearance: 'default',
      className: '',
      disabled: false,
      intent: 'primary',
      size: 'small',
      testingID: 'btn-testing-id',
      onBlur: undefined,
      onClick: undefined,
      onDoubleClick: undefined,
      onFocus: undefined,
      style: undefined,
    };
  });

  it('should verify if button is disabled and not trigger clicked event', () => {
    btnProps.disabled = true;
    btnProps.onClick = jest.fn();
    const { getByTestId } = render(testingJSX());
    const renderedButton = getByTestId(String(btnProps.testingID));

    expect(renderedButton.getAttributeNames().find((attrName) => attrName === 'disabled')).toBe('disabled');

    fireEvent.click(renderedButton);

    expect(btnProps.onClick).toBeCalledTimes(0);
  });

  it('should verify if button is not disabled and trigger click event', () => {
    btnProps.disabled = false;
    btnProps.onClick = jest.fn();
    const { getByTestId } = render(testingJSX());
    const renderedButton = getByTestId(String(btnProps.testingID));

    expect(renderedButton.getAttributeNames().find((attrName) => attrName === 'disabled')).toBe(undefined);

    fireEvent.click(renderedButton);

    expect(btnProps.onClick).toBeCalledTimes(1);
  });
});
