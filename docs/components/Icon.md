# Icon

Guidance and suggestions for using icons with LensUI.

### Properties

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|name|string|-|The name of the icon to render.|Yes|
|fill|`primary`, `secondary`, `success`, <br/>`info`, `warning`, `danger`, "string"|-|The color of the icon.|No|
|size|string \| number | 1rem |The size of the icon.|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Playground

```tsx
    <Icon name="BsAlarm" />
```