import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import {
  IntentEnum,
} from '../../../types';
import Buttom from './Button';
import { ButtonAppearanceEnum, IButtonProps, ButtonSizeEnum } from './Button.types';

describe('<Button/> content(children) and events', () => {
  it('should check if the children content is present', () => {
    const childrenMock = 'Hello_Mocked_World';
    const result = render(<Buttom type="submit"><div>{childrenMock}</div></Buttom>);

    expect(result.getByText(childrenMock)).toHaveTextContent(childrenMock);
  });

  it('should check if the children content is not present', () => {
    const testIdMock = 'mock-testing';
    const result = render(<Buttom testingID={testIdMock} />);

    expect(result.getByTestId(testIdMock).childNodes.length).toBe(0);
  });

  it('should verify that the button has been successfully clicked', () => {
    const mockedClick = jest.fn();
    const testIdMock = 'mock-testing';

    const result = render(<Buttom onClick={mockedClick} testingID={testIdMock}>{testIdMock}</Buttom>);

    expect(result.getByTestId(testIdMock)).toBeTruthy();

    fireEvent.click(result.getByTestId(testIdMock));

    expect(mockedClick).toBeCalled();
  });

  it('should verify that the button has been successfully blurred', () => {
    const mockedClick = jest.fn();
    const testIdMock = 'mock-testing';

    const result = render(<Buttom onBlur={mockedClick} testingID={testIdMock}>{testIdMock}</Buttom>);

    expect(result.getByTestId(testIdMock)).toBeTruthy();

    fireEvent.blur(result.getByTestId(testIdMock));

    expect(mockedClick).toBeCalled();
  });

  it('should verify that the button has been successfully focused', () => {
    const mockedClick = jest.fn();
    const testIdMock = 'mock-testing';

    const result = render(<Buttom onFocus={mockedClick} testingID={testIdMock}>{testIdMock}</Buttom>);

    expect(result.getByTestId(testIdMock)).toBeTruthy();

    fireEvent.focus(result.getByTestId(testIdMock));

    expect(mockedClick).toBeCalled();
  });

  it('should verify that the button has been successfully double clicked', () => {
    const mockedClick = jest.fn();
    const testIdMock = 'mock-testing';

    const result = render(<Buttom onDoubleClick={mockedClick} testingID={testIdMock}>{testIdMock}</Buttom>);

    expect(result.getByTestId(testIdMock)).toBeTruthy();

    fireEvent.doubleClick(result.getByTestId(testIdMock));

    expect(mockedClick).toBeCalled();
  });
});

describe('<Button/> intents ,variations and appearances', () => {
  let btnProps: IButtonProps = {};

  const testingJSX = () => (<Buttom testingID={btnProps.testingID} {...btnProps}>Hello World</Buttom>);

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

    const renderedButton = getByTestId(btnProps.testingID);

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

      const renderedButton = getByTestId(btnProps.testingID);

      expect(renderedButton.classList.contains(`appearance-${appearance}`)).toBe(true);

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

    Object.keys(IntentEnum).forEach((intent) => {
      btnProps.intent = intent as any;
      rerender(testingJSX());

      const renderedButton = getByTestId(btnProps.testingID);

      expect(renderedButton.classList.contains(`intent-${intent}`)).toBe(true);

      interationCalls.intent();
    });

    Object.keys(ButtonAppearanceEnum).forEach((appearance) => {
      btnProps.appearance = appearance as any;
      rerender(testingJSX());

      const renderedButton = getByTestId(btnProps.testingID);

      expect(renderedButton.classList.contains(`appearance-${appearance}`)).toBe(true);

      interationCalls.appearance();
    });

    expect(interationCalls.intent).toBeCalledTimes(Object.keys(IntentEnum).length);
    expect(interationCalls.appearance).toBeCalledTimes(Object.keys(ButtonAppearanceEnum).length);
  });

  it('should check if button size change classes', () => {
    const { getByTestId, rerender } = render(testingJSX());

    const interationCalls = jest.fn();

    Object.keys(ButtonSizeEnum).forEach((size) => {
      btnProps.size = size as any;
      rerender(testingJSX());

      const renderedButton = getByTestId(btnProps.testingID);

      expect(renderedButton.classList.contains(`size-${size}`)).toBe(true);

      interationCalls();
    });

    expect(interationCalls).toBeCalledTimes(Object.keys(ButtonSizeEnum).length);
  });
});

describe('<Button/> states (disabled, large)', () => {
  let btnProps: IButtonProps = {};

  const testingJSX = () => (<Buttom testingID={btnProps.testingID} {...btnProps}>Hello World</Buttom>);

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
    const renderedButton = getByTestId(btnProps.testingID);

    expect(renderedButton.getAttributeNames().find((attrName) => attrName === 'disabled')).toBe('disabled');

    fireEvent.click(renderedButton);

    expect(btnProps.onClick).toBeCalledTimes(0);
  });

  it('should verify if button is not disabled and trigger click event', () => {
    btnProps.disabled = false;
    btnProps.onClick = jest.fn();
    const { getByTestId } = render(testingJSX());
    const renderedButton = getByTestId(btnProps.testingID);

    expect(renderedButton.getAttributeNames().find((attrName) => attrName === 'disabled')).toBe(undefined);

    fireEvent.click(renderedButton);

    expect(btnProps.onClick).toBeCalledTimes(1);
  });
});
