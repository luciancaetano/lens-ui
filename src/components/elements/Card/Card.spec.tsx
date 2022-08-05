import React from 'react';

import { render } from '@testing-library/react';
import ApplicationProvider from '../../providers/ApplicationProvider/ApplicationProvider';
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
        <ApplicationProvider>
          <Card>
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
          </Card>
        </ApplicationProvider>
      ),
    );

    expect(result.getByTestId(textTestingId)).toHaveTextContent(mockedCardText);
    expect(result.getByTestId(titleTestingId)).toHaveTextContent(titleMockedText);

    expect(result.getByTestId(mockedCardLink.testingId).innerHTML).toBe(mockedCardLink.text);
    expect(result.getByTestId(mockedCardLink.testingId).getAttribute('href')).toBe(mockedCardLink.url);

    expect(result.getByTestId(imgTextingId).getAttribute('src')).toBe(mockedCardImg);
  });

  it('should test card element intents', () => {
    const result = render(
      (
        <ApplicationProvider>
          <Card intent="primary" testingID="primary">
            content here
          </Card>
          <Card intent="secondary" testingID="secondary">
            content here
          </Card>
          <Card intent="success" testingID="success">
            content here
          </Card>
          <Card intent="info" testingID="info">
            content here
          </Card>
          <Card intent="warning" testingID="warning">
            content here
          </Card>
          <Card intent="danger" testingID="danger">
            content here
          </Card>
        </ApplicationProvider>
      ),
    );

    expect(result.container.querySelector<HTMLElement>('[data-lens-intent=\'primary\']')).toBeInTheDocument();
    expect(result.container.querySelector<HTMLElement>('[data-lens-intent=\'secondary\']')).toBeInTheDocument();
    expect(result.container.querySelector<HTMLElement>('[data-lens-intent=\'success\']')).toBeInTheDocument();
    expect(result.container.querySelector<HTMLElement>('[data-lens-intent=\'info\']')).toBeInTheDocument();
    expect(result.container.querySelector<HTMLElement>('[data-lens-intent=\'warning\']')).toBeInTheDocument();
    expect(result.container.querySelector<HTMLElement>('[data-lens-intent=\'danger\']')).toBeInTheDocument();
  });
});
