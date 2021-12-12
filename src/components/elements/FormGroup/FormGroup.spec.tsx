import React from 'react';

import { render } from '@testing-library/react';
import FormGroup from './FormGroup';
import { IntentType } from '../../../types';

describe('<FormGroup/>', () => {
  it('should check if the children content is present', () => {
    const childrenContent = 'My-Children-Component';
    const { getByText } = render(
      <FormGroup testingID="testing-target">{childrenContent}</FormGroup>,
    );

    expect(getByText(childrenContent)).toBeInTheDocument();
  });

  it('test helperText attibute', () => {
    const testingText = 'My-Children-Component';
    const { getByText } = render(
      <FormGroup testingID="testing-target" helperText={testingText} />,
    );

    expect(getByText(testingText)).toBeInTheDocument();
  });

  it('test helperTextIntent attibute', () => {
    const testRender = (helperTextIntent: IntentType) => render(
      <FormGroup testingID="testing-target" helperTextIntent={helperTextIntent} helperText="helper text" />,
    ).container.querySelector(`[data-lens-form-group-helpertext-intent="${helperTextIntent}"]`);

    expect(testRender('danger')).toBeInTheDocument();
    expect(testRender('info')).toBeInTheDocument();
    expect(testRender('primary')).toBeInTheDocument();
    expect(testRender('secondary')).toBeInTheDocument();
    expect(testRender('success')).toBeInTheDocument();
    expect(testRender('warning')).toBeInTheDocument();
  });

  it('test required attibute', () => {
    const { container } = render(
      <FormGroup testingID="testing-target" required />,
    );

    expect(container.querySelector('[data-lens-element="form-group__required_helper"]')).toBeInTheDocument();
    expect(container.querySelector('[data-lens-element="form-group__required_helper"]').innerHTML).toBe('&nbsp;*');
  });
});
