---
inject: true
to: src/components/elements/index.ts
after: \/\*\* \=\=\=\=\generated-code-element===== \*\/
skip_if: default as <%= name %>
---
export { default as <%= name %> } from './<%= name %>/<%= name %>';