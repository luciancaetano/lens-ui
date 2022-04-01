# ButtonGroup

The ButtonGroup component can be used to group related buttons.

### Properties

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|vertical|boolean|false| Whether the button group should be vertical.|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Playground

```tsx
    <ButtonGroup>
        <Button>
            Button 1
        </Button>
        <Button>
            Button 2
        </Button>
        <Button>
            Button 3
        </Button>
    </ButtonGroup>
```