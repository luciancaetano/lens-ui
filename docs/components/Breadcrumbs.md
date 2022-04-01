# Breadcrumbs

Breadcrumbs allow users to make selections from a range of pages or navigation history.

### Properties

| Property | Type | Default Value | Description | Required |
|---|---|---|---|---|
|type|solid \| subtle \| outlined|**primary**|The type of the breadcrumb.|No|
|history|IBreadcrumbLink[]|-|The history of the breadcrumb.|Yes|
|onItemClick|<p style={{minWidth: "300px"}}>``function(IBreadcrumbLink, MouseEvent)``</p>|-|The function to call when an item is clicked.|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

#### Datatype IBreadcrumbLink(Object)
| Property | Type | Default Value | Description | Required |
| --- | --- | --- | --- |
| title | React.ReactNode | The text to display for the link | Yes |
| url | string | The URL to navigate to when the link is clicked | No |
|testingID| string |The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` | No |

### Playground

```tsx
  <Breadcrumbs
    history={[
      {
        title: 'Home'
      },
      {
        title: 'Profile'
      },
      {
        title: 'Settings'
      }
    ]}
    onItemClick={function noRefCheck(){}}
  >
    Hello World
  </Breadcrumbs>
```