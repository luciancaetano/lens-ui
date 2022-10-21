---
inject: true
to: src/styles/theme/index.scss
after: \/\*\*\s\=\=\=\=imports\=\=\=\=\=\s\*\/
---
@import './<%= name.replace(/\s+/g, '').replace(/\W+/g, '').replace(/^\w/, c => c.toLowerCase()) %>';
