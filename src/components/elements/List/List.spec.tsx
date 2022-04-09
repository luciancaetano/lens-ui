/* eslint-disable react/no-array-index-key */
import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import List from './List';
import ListItem from './ListItem';
import { Intents } from '../../../types';

describe('<List/>', () => {
  it('should render list items', () => {
    const items = [
      {
        children: 'First Item',
      },
      {
        children: 'Second Item',
        className: 'my-class',
      },
      {
        isHeading: true,
        children: 'Heading item',
      },
    ];
    const { getByText, container } = render(<List>{items.map((item, index) => <ListItem key={index} {...item} />)}</List>);

    items.forEach((item) => {
      expect(getByText(item.children as any)).toBeInTheDocument();
    });

    expect(container.querySelector<HTMLElement>('[data-lens-element="list__item--heading"]')).toBeInTheDocument();
    expect(getByText(items[1].children as string).classList.contains(items[1].className as string)).toBe(true);
  });

  it('should render correct intent', () => {
    const items = [
      {
        children: 'First Item',
      },
    ];
    const { getByTestId, rerender } = render(<List testingID="testingID">{items.map((item, index) => <ListItem key={index} {...item} />)}</List>);

    Object.keys(Intents).forEach((intent, index) => {
      rerender(<List intent={intent as any} testingID="testingID" key={index}>{items.map((item, index) => <ListItem key={index} {...item} />)}</List>);
      expect(getByTestId('testingID').getAttribute('data-lens-intent')).toBe(intent);
    });
  });

  it('should receive item click events', () => {
    const onItemClick = jest.fn();
    const items = [
      {
        children: 'First Item',
      },
      {
        children: 'Second Item',
      },
    ];
    const { getByText } = render(<List testingID="testingID">{items.map((item, index) => <ListItem key={index} {...item} onClick={() => onItemClick(item)} />)}</List>);

    fireEvent.click(getByText(items[1].children as string));

    expect(onItemClick).toHaveBeenCalled();

    expect(onItemClick.mock.calls[0][0]).toBe(items[1]);
  });
});
