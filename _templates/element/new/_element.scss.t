---
to: src/styles/theme/_<%= name.replace(/\s+/g, '').replace(/\W+/g, '').replace(/^\w/, c => c.toLowerCase()) %>.scss
---
@import '../lib';
<%
const ccname = name.replace(/\s+/g, '').replace(/\W+/g, '').replace(/^\w/, c => c.toLowerCase());
%>

@mixin <%= ccname %>-theme {
  @include lens-def(<%= ccname %>, variable-name, modifier, #000);
}
