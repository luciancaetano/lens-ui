---
to: src/components/elements/<%= name %>/<%= name %>.tsx
---
import clsx from 'clsx';
import React from 'react';
import { I<%= name %>Props } from './<%= name %>.types';
import styles from './<%= name %>.module.scss';
<%
  const ccname = name.replace(/\s+/g, '').replace(/\W+/g, '').replace(/^\w/, c => c.toLowerCase());
%>
const <%= name %>:React.FC<I<%= name %>Props> = ({
  className, testingID, id, children, ...props
}) => (
  <div
    {...props}
    id={id}
    data-testid={testingID}
    data-lens-element="<%= ccname %>"
    className={clsx(
      styles.<%= ccname %>,
      className,
    )}
  >
    {children}
  </div>
);

export default <%= name %>;
