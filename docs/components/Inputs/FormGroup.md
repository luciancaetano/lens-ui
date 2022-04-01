# FormGroup

The FormGroup component can be used handle a form control and offer additional functionality as label, help text, and validation.

### Properties

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|label|ReactNode|-|Label for the form group|No|
|contentClassName|string|-|Class name for the content|No|
|inline|boolean|false|Whether the label should be inline or not|No|
|helperText|ReactNode|-|Helper text to display below the form group|No|
|helperTextIntent|`primary`, `secondary`, `success`, <br/>`info`, `warning`, `danger`|-|Intent type for the helper text|No|
|labelFor|string|-|ID of the label|No|
|required|boolean|false|Whether the form group is required|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Playground

```tsx
    <FormGroup label="Name" required helperText="Please enter your name" helperTextIntent="warning">
        <TextInput type="text" name="name" />
    </FormGroup>
```