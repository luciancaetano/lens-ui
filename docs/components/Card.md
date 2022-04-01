# Card

Cards are used to display content in a way that is easily digestible and discoverable.


### Card.Card
The Card.Card component is the main component of the Card.
The properties of card title extends the `<div>` element.

| Property | Type | Default Value | Description | Required |
|---|---|---|---|---|
|intent|`primary`, `secondary`, `success`, <br/>`info`, `warning`, `danger`|undefined|Intent of the callout|No|
|testingID| string | - | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Card.Body
The Card.Body component is the body of the Card.
The properties of card body are the same as the ones of the `<div>` element.

| Property | Type | Default Value | Description | Required |
|---|---|---|---|---|
|testingID| string | - | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Card.Title
The Card.Title ise used to display the title's of the Card.
The properties of card title extends the `<h1>` element.

| Property | Type | Default Value | Description | Required |
|---|---|---|---|---|
|subtitle|boolean|false|If true, the title will be displayed as a subtitle|No|
|testingID| string | - | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|

### Card.Text
The Card.Text is used to display text's in the Card.
The properties of card text extends the `<p>` element.

### Card.Link
The Card.Link is used to display links in the Card.
The properties of card link extends the `<a>` element.

### Card.Image
The Card.Image is used to display images in the Card.
The properties of card image extends the `<img>` element.

| Property | Type | Default Value | Description | Required |
|---|---|---|---|---|
|roudTop|boolean|false|If true, the top of image will be displayed with rounded corners|No|
|roudBottom|boolean|false|If true, the bottom of image will be displayed with rounded corners|No|
|alt|string| - | The alternative text for the image|No|
|testingID| string | - | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|


## Playground

```tsx
<div style={{maxWidth: '30rem', padding: '0rem 5rem'}}>
  <Card.Card>
    <Card.Body>
      <Card.Title>Hello world</Card.Title>
      <Card.Title subtitle>subtitle</Card.Title>
    </Card.Body>
    <Card.Image src="https://picsum.photos/1024" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
      </Card.Text>
      <Card.Link>
        Card Link
      </Card.Link>
    </Card.Body>
  </Card.Card>
</div>
```