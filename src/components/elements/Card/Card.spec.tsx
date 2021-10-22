import React from 'react';

import { render } from '@testing-library/react';
import LensProvider from '../../providers/LensProvider/LensProvider';
import Card from '.';

describe('<Card/>', () => {
  it('should test card element contents', () => {
    const textTestingId = 'textTestingId';
    const mockedCardText = 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.';
    const mockedCardLink = {
      url: 'https://google.com.br',
      text: 'Card Link',
      testingId: 'mockedCardLinkTestingId',
    };

    const titleTestingId = 'titleTestingId';
    const titleMockedText = 'Hello world';

    const imgTextingId = 'img-testing-id';

    const mockedCardImg = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';

    const result = render(
      (
        <LensProvider>
          <Card.Card>
            <Card.Body>
              <Card.Title testingID={titleTestingId}>
                {titleMockedText}
              </Card.Title>

              <Card.Title subtitle>
                {titleMockedText}
              </Card.Title>
            </Card.Body>
            <Card.Image roudTop src={mockedCardImg} testingID={imgTextingId} />
            <Card.Body>
              <Card.Text testingID={textTestingId}>
                {mockedCardText}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href={mockedCardLink.url} target="_blank" testingID={mockedCardLink.testingId}>
                {mockedCardLink.text}
              </Card.Link>
            </Card.Body>
            <Card.Image roudBottom src={mockedCardImg} />
          </Card.Card>
        </LensProvider>
      ),
    );

    expect(result.getByTestId(textTestingId)).toHaveTextContent(mockedCardText);
    expect(result.getByTestId(titleTestingId)).toHaveTextContent(titleMockedText);

    expect(result.getByTestId(mockedCardLink.testingId).innerHTML).toBe(mockedCardLink.text);
    expect(result.getByTestId(mockedCardLink.testingId).getAttribute('href')).toBe(mockedCardLink.url);

    expect(result.getByTestId(imgTextingId).getAttribute('src')).toBe(mockedCardImg);
  });

  it('should test card element backgrounds', () => {
    const result = render(
      (
        <LensProvider>
          <Card.Card background="primary" testingID="primary">
            content here
          </Card.Card>
          <Card.Card background="secondary" testingID="secondary">
            content here
          </Card.Card>
          <Card.Card background="success" testingID="success">
            content here
          </Card.Card>
          <Card.Card background="info" testingID="info">
            content here
          </Card.Card>
          <Card.Card background="warning" testingID="warning">
            content here
          </Card.Card>
          <Card.Card background="danger" testingID="danger">
            content here
          </Card.Card>
        </LensProvider>
      ),
    );

    expect(result.getByTestId('primary').classList.contains('bg-primary')).toBe(true);
    expect(result.getByTestId('secondary').classList.contains('bg-secondary')).toBe(true);
    expect(result.getByTestId('success').classList.contains('bg-success')).toBe(true);
    expect(result.getByTestId('info').classList.contains('bg-info')).toBe(true);
    expect(result.getByTestId('warning').classList.contains('bg-warning')).toBe(true);
    expect(result.getByTestId('danger').classList.contains('bg-danger')).toBe(true);
  });
});
