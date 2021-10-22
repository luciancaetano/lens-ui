import React from 'react';
import {
  LensProvider, Card, Layout, IntentEnum,
} from '../../src/index';

export default {
  component: Card.Card,
  title: 'Surfaces/Card',
  excludeStories: /.*Data$/,
};

export const _Card = () => (
  <LensProvider>
    <Layout.Content layout="horizontal">
      <Card.Card style={{ maxWidth: 300, margin: 10 }}>
        <Card.Image roudTop src="https://images-na.ssl-images-amazon.com/images/I/91k1M7ujpmL._SX500_.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://google.com.br" target="_blank">
            Card Link
          </Card.Link>
        </Card.Body>
      </Card.Card>

      <Card.Card style={{ maxWidth: 300, margin: 10 }}>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Title subtitle>subtitle</Card.Title>
        </Card.Body>
        <Card.Image src="https://images-na.ssl-images-amazon.com/images/I/91k1M7ujpmL._SX500_.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </Card.Text>
        </Card.Body>
      </Card.Card>

      <Card.Card style={{ maxWidth: 300, margin: 10 }}>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Title subtitle>subtitle</Card.Title>
        </Card.Body>
        <Card.Image src="https://images-na.ssl-images-amazon.com/images/I/91k1M7ujpmL._SX500_.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </Card.Text>
        </Card.Body>
      </Card.Card>
    </Layout.Content>
  </LensProvider>
);

export const Backgrounds = () => (
  <LensProvider>
    <Layout.Content layout="horizontal">

      {Object.keys(IntentEnum).map(((intent) => (
        <Card.Card style={{ maxWidth: 200, margin: 10 }} background={intent as any}>
          <Card.Body>
            <Card.Title>{intent.toUpperCase()}</Card.Title>
            <Card.Title subtitle>subtitle</Card.Title>
          </Card.Body>
          <Card.Image src="https://images-na.ssl-images-amazon.com/images/I/91k1M7ujpmL._SX500_.jpg" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            </Card.Text>
            <Card.Link>
              Card Link
            </Card.Link>
          </Card.Body>
        </Card.Card>
      )))}

    </Layout.Content>
  </LensProvider>
);
