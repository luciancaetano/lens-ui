# RadioGroup

RadioGroup allow the user to select one option from a set.

## Properties

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|options|`Array<IRadioGroupOption>`|-|The options to display in the radio group.|Yes|
|name|string|undefined|The name of the input|No|
|value|string|-|Value of the input|No|
|defaultValue|string|undefined|Default value of the input|No|
|inline|boolean|false|Whether the radio group should be displayed inline|No|
|onChange|`function(string,ChangeEvent)`|undefined|Callback for when the input changes|No|
|onBlur |`function(FocusEvent)`|undefined|Callback for when the input loses focus|No|
|tabIndex|number|undefined|The tab index of the input|No|
|disabled|boolean|undefined|Whether the input is disabled|No|
|autoFocus|boolean|undefined|Whether the input should be focused on mount|No|
|isError|boolean|undefined|Whether the input is in an error state|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|


### IRadioGroupOption (Object)

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|label|ReactNode|-|The label of the option|Yes|
|value|string|-|The value of the option|Yes|
|className|string|-|The class name of the option|No|
|tabIndex|number|undefined|The tab index of the option|No|


## Playground

```tsx
  <RadioGroup
    defaultValue="2"
    name="input"
    onBlur={() => {}}
    onChange={function noRefCheck() {}}
    options={[
      {
        label: 'Option1',
        value: '1'
      },
      {
        label: 'Option2',
        value: '2'
      },
      {
        label: 'Option3',
        value: '3'
      }
    ]}
  />
```