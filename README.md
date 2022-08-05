# LensUi Design System [[docs]](https://luciancaetano.github.io/lens-ui)

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

ReactDOM.render(<App />, document.querySelector<HTMLElement>('#app'));
```

### Responsive meta tag

To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```
