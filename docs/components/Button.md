# Button

Buttons allow users to take actions, and make actions, with a single click.

### Properties
The button properties extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|type|`button`, `submit`, `reset`|'button'|The type of button.|No|
|intent|`primary`, `secondary`, `success`, <br/>`info`, `warning`, `danger`|primary | The intent of the badge.|No|
|disabled|boolean|false|Whether the button is disabled.|No|
|active|boolean|false|Whether the button is active.|No|
|size|`normal`, `small`, `large`|'normal'|The size of the button.|No|
|appearance|`outlined`, `default`, `minimal`|'default'|The appearance of the button.|No|
|onClick|function|undefined|The function to call when the button is clicked.|No|
|onBlur|function|undefined|The function to call when the button loses focus.|No|
|onDoubleClick|function|undefined|The function to call when the button is double clicked.|No|
|onFocus|function|undefined|The function to call when the button gains focus.|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Playground

```tsx
    <Button
        intent="primary"
    >
        Hello World
    </Button>
```