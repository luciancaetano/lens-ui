import React from 'react';

import { render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

describe('<ButtonGroup/>', () => {
  it('should check if the children content is present', () => {
    const MockedButtons = ['Button1', 'Button2', 'Button3'];
    const result = render(
      <>
        <ButtonGroup>
          {MockedButtons.map((title) => (<Button key={title}>{title}</Button>))}
        </ButtonGroup>
        <ButtonGroup vertical>
          <Button>Button A</Button>
          <Button>Button B</Button>
        </ButtonGroup>
      </>,
    );

    MockedButtons.forEach((title) => {
      expect(result.getByText(title)).toHaveTextContent(title);
    });
  });
});
