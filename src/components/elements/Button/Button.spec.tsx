import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttom from './Button';

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
