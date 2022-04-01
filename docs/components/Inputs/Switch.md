# Switch

The Switch component toggle the state of a single setting on or off.

### Properties

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|label|ReactNode|-|Label for the switch|Yes|
|checked|boolean|undefined|Whether the switch is checked|No|
|defaultChecked|boolean|undefined|Whether the switch is checked by default|No|
|onChange|`function(boolean,ChangeEvent)`|undefined|Callback for when the switch changes|No|
|onBlur |`function(FocusEvent)`|undefined|Callback for when the switch loses focus|No|
|tabIndex|number|undefined|The tab index of the switch|No|
|disabled|boolean|undefined|Whether the switch is disabled|No|
|autoFocus|boolean|undefined|Whether the switch should be focused on mount|No|
|name|string|undefined|The name of the switch|No|
|inputProps|object|undefined|Additional props to pass to the input element [Html Input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Playground

```tsx
   <Switch label="It's all ok, 🔥"/>
```