---
to: src/components/elements/<%= name %>/<%= name %>.types.ts
---
import React from 'react';
import { ITestableProps } from '../../../types';

export interface I<%= name %>Props extends ITestableProps, React.HtmlHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}
