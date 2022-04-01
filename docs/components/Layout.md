# Layout

The Layout component's handles application layout.

### Layout.AppLayout properties
The properties of Layout.AppLayout extends the `<div>` element.

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|testingID| string | undefined | The id used for testing purposes, `<div data-testid="my-test-id"/>` |No|

### Layout.Content properties
The properties of Layout.AppLayout extends the `<div>` element.

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|layout|`horizontal`, `vertical`|`vertical`|The layout orientation.|Yes|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Layout.SideBar properties
The properties of Layout.AppLayout extends the `<aside>` element.

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|testingID| string | undefined | The id used for testing purposes, `<div data-testid="my-test-id"/>` |No|

### Basic layout

```tsx
  <Layout.AppLayout>
    <div>
      App Header
    </div>
    <Layout.Content>
      Hello world
    </Layout.Content>
    <div>
      AppFooter
    </div>
  </Layout.AppLayout>
```

### Layout wit sidebar

```tsx
  <Layout.AppLayout>
  <div>
      App Header
  </div>
  <Layout.Content layout="horizontal">
      <Layout.Sidebar>
          Side content
      </Layout.Sidebar>
      <Layout.Content>
          Hello world
      </Layout.Content>
  </Layout.Content>
  <div>
      AppFooter
  </div>
  </Layout.AppLayout>
```