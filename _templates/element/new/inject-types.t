---
inject: true
to: src/components/elements/index.ts
after: \/\*\* \=\=\=\=\generated-code-types===== \*\/
skip_if: <%= name %>.types
---
export * from './<%= name %>/<%= name %>.types';