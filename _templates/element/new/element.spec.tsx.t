---
to: src/components/elements/<%= name %>/<%= name %>.spec.tsx
---
import React from 'react';

import { render } from '@testing-library/react';
import <%= name %> from './<%= name %>';

describe('<<%= name %>/>', () => {
  it('should render correct <%= name %> children', () => {
    const childrenText = 'hello_world';
    const { getByText } = render(<<%= name %>>{childrenText}</<%= name %>>);

    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
