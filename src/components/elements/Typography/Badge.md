# Badge

This is a small emblem commonly used to represent tags.

### Properties

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|type|`solid`, `subtle`, `outlined` |solid | The type of the badge.|No|
|intent|`primary`, `secondary`, `success`, <br/>`info`, `warning`, `danger`|primary | The intent of the badge.|No|
|testingID| string | - | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Playground

```tsx
    <Badge intent="primary">Hello World</Badge>
    <Badge intent="secondary" type="outlined">Hello World now Outlined</Badge>
    <Badge intent="success" type="subtle">Hello World in Subtle</Badge>
    <Badge intent="danger">Danger</Badge>
    <Badge intent="info">Info</Badge>
    <Badge intent="warning">Warning</Badge>
```