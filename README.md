# LensUi Design System

Lens-ui is a basic design system focused on stability and simplicity.

### Installation

LensUI is available in [npm](https://www.npmjs.com/package/lens-ui).

To install just run:

#### with npm
`npm install lens-ui`

#### with yarn
`yarn add lens-ui`

### Configuration
Lens-ui uses contexts from LensProvider and css file, just import `lens-ui/dist/index.css` ,  `lens-ui/dist/reset.css` and declare `LensProvider` on app root.

Here's a quick example to get you started, **it's literally all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, LensProvider } from 'lens-ui';
import 'node_modules/lens-ui/dist/reset.css';
import 'node_modules/lens-ui/dist/main.css';

function App() {
  return (
      <LensProvider>
        <Button intent="success">Hello World</Button>
      </LensProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### Responsive meta tag

To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```
# Documentation

- [Badge](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Badge.md)
- [Breadcrumbs](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Breadcrumbs.md)
- [Button](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Button.md)
- [ButtonGroup](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/ButtonGroup.md)
- [Callout](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Callout.md)
- [Card](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Card.md)
- [Divider](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Divider.md)
- [DropDownMenu](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/DropDownMenu.md)
- [Icon](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Icon.md)
- [Layout](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Layout.md)
- [MenuList](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/MenuList.md)
- [MessageBox](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/MessageBox.md)
- [ProgressBar](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/ProgressBar.md)
- [Tabs](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Tabs.md)
- [CheckBox](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/CheckBox.md)
- [FormFooter](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/FormFooter.md)
- [FormGroup](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/FormGroup.md)
- [MaskedInput](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/MaskedInput.md)
- [MoneyInput](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/MoneyInput.md)
- [RadioGroup](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/RadioGroup.md)
- [Select](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/Select.md)
- [Switch](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/Switch.md)
- [TextInput](https://github.com/luciancaetano/lens-ui/blob/main/docs/components/Inputs/TextInput.md)