import React from 'react';

import { render } from '@testing-library/react';
import FormGroup from './FormGroup';
import { IntentType } from '../../../types';

describe('<FormGroup/>', () => {
  it('should check if the children content is present', () => {
    const childrenContent = 'My-Children-Component';
    const { getByText } = render(
      <>
        <FormGroup testingID="testing-target">{childrenContent}</FormGroup>
      </>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();
  });

  it('test helperText attibute', () => {
    const testingText = 'My-Children-Component';
    const { getByText } = render(
      <>
        <FormGroup testingID="testing-target" helperText={testingText} />
      </>,
    );

    expect(getByText(testingText)).toBeInTheDocument();
  });

  it('test helperTextIntent attibute', () => {
    const testRender = (helperTextIntent: IntentType) => render(
      <>
        <FormGroup testingID="testing-target" helperTextIntent={helperTextIntent} helperText="helper text" />
      </>,
    ).container.querySelector('.lens-ui-form-group__helper-text').classList.contains(`intent-${helperTextIntent}`);

    expect(testRender('danger')).toBe(true);
    expect(testRender('info')).toBe(true);
    expect(testRender('primary')).toBe(true);
    expect(testRender('secondary')).toBe(true);
    expect(testRender('success')).toBe(true);
    expect(testRender('warning')).toBe(true);
  });

  it('test required attibute', () => {
    const { container } = render(
      <>
        <FormGroup testingID="testing-target" required />
      </>,
    );

    expect(container.querySelector('.lens-ui-form-group__required-helper')).toBeInTheDocument();
    expect(container.querySelector('.lens-ui-form-group__required-helper').innerHTML).toBe('&nbsp;*');
  });
});
