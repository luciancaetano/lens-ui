/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './index';
import Layout from '../Layout/index';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { IntentEnum } from '../../../types';

export default {
  title: '2. Components/Card',
  component: Card.Card,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Card.Card>;

const cardStyle = { maxWidth: 300, margin: 10 } as any;

const Template: ComponentStory<typeof Card.Card> = (args) => <Card.Card {...args} />;

export const _Card = (args) => (
  <LensProvider>
    <Layout.Content layout="horizontal">
      <Template style={cardStyle} {...args}>
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
      </Template>

      <Template style={cardStyle} {...args}>
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
      </Template>

      <Template style={cardStyle} {...args}>
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
      </Template>
    </Layout.Content>
  </LensProvider>
);

export const Backgrounds = () => (
  <LensProvider>
    <Layout.Content layout="horizontal">

      {Object.keys(IntentEnum).map(((intent) => (
        <Card.Card style={cardStyle} intent={intent as any}>
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
