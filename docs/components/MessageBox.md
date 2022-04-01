# MessageBox

MessageBox alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

### Properties

```ts
export interface IMessageBoxProps extends ITestableProps, Omit<React.HtmlHTMLAttributes<HTMLElement>, 'title'> {
  intent?: IntentType;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
  timeout?: number;
  striped?: boolean;
  onClose?: (isOpen: false) => void;
  closable?: boolean;
  isOpen?: boolean;
}
```

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|intent|`primary`, `secondary`, `success`, <br/>`info`, `warning`, `danger`|primary | The intent of the badge.|No|
|icon|`ReactNode`|-|The icon to display.|No|
|title|`ReactNode`|-|The title of the message box.|No|
|children|`ReactNode`|-|The content of the message box.|Yes|
|timeout|`number`|3000|The time in milliseconds to show the message box.|No|
|striped|`boolean`|false|Whether the message box is striped.|No|
|onClose|`(isOpen: false) => void`|-|The callback function to be called when the message box is closed.|No|
|closable|`boolean`|true|Whether the message box is closable.|No|
|isOpen|`boolean`|true|Whether the message box is open.|No|
|testingID| string | - | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Playground

```tsx
  <MessageBox
    intent="primary"
    title="Title"
  >
    Hello world
  </MessageBox>
```