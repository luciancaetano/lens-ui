---
inject: true
to: src/styles/theme/index.scss
after: \/\*\*\s\=\=\=\=theme\=\=\=\=\=\s\*\/
---
@include <%= name.replace(/\s+/g, '').replace(/\W+/g, '').replace(/^\w/, c => c.toLowerCase()) %>-theme;
