# LensUi Design System
This is a fork of a personal design system that I've been working on for some time.
In this public version I bring some improvements as well as design simplifications and remove some trashy codes.

[**See Storybook Here**](https://luciancaetano.github.io/lens-ui)

# Installation

Install LensUI, React UI framework.

LensUI is available as an [npm package](https://www.npmjs.com/package/lens-ui).

To install and save in your `package.json` dependencies, run:

#### with npm
`npm install lens-ui`

#### with yarn
`yarn add lens-ui`


# Usage

Get started with React and LensUI in no time, to access css variables you need to import css files.

`import 'node_modules/lens-ui/build/main.css';`

## Quick start

Here's a quick example to get you started, **it's literally all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, LensProvider } from 'lens-ui';
import 'node_modules/lens-ui/build/main.css';

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

LensUI is developed mobile-first, a strategy in which we first write code for mobile devices, and then scale up components as necessary using CSS media queries.
To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```
