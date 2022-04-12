---
to: src/components/elements/<%= name %>/<%= name %>.module.scss
---
@import '../../../style-lib';
<%
const ccname = name.replace(/\s+/g, '').replace(/\W+/g, '').replace(/^\w/, c => c.toLowerCase());
%>
.<%= ccname %> {
  @include lens-ui-typography;
}
