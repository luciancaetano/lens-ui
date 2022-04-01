# Callout

Callouts contains call to actions in a single subject.

### Properties

| Property | Type | Default Value | Description | Required |
|---|---|---|---|---|
|title|ReactNode| undefined |Title of the callout|No|
|icon|ReactNode| undefined |Icon to display|No|
|children|ReactNode| undefined |Content of the callout|Yes|
|intent|`primary`, `secondary`, `success`, <br/>`info`, `warning`, `danger`|- |Intent of the callout|No|
|testingID| string | undefined | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|


### Playground

```tsx
  <Callout
    icon={<Icon name="BsHouse" size="5rem"/>}
    title="Hello world"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas massa mauris, eget mattis lorem fermentum a. Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat. Etiam nec tortor nec felis vehicula placerat id eu nisl. Aliquam erat volutpat. Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit. Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
  </Callout>
```