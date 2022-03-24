/* eslint-disable react/no-array-index-key */
import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import List from './List';
import { IListItem } from './List.types';
import { Intent } from '../../../types';

describe('<List/>', () => {
  it('should render list items', () => {
    const items: IListItem<any>[] = [
      {
        content: 'First Item',
      },
      {
        content: 'Second Item',
        className: 'my-class',
      },
      {
        isHeading: true,
        content: 'Heading item',
      },
    ];
    const { getByText, container } = render(<List items={items} />);

    items.forEach((item) => {
      expect(getByText(item.content as any)).toBeInTheDocument();
    });

    expect(container.querySelector('[data-lens-element="list__item--heading"]')).toBeInTheDocument();
    expect(getByText(items[1].content as string).classList.contains(items[1].className)).toBe(true);
  });

  it('should render correct intent', () => {
    const items: IListItem<any>[] = [
      {
        content: 'First Item',
      },
    ];
    const { getByTestId, rerender } = render(<List items={items} testingID="testingID" />);

    Object.keys(Intent).forEach((intent, index) => {
      rerender(<List items={items} intent={intent as any} testingID="testingID" key={index} />);
      expect(getByTestId('testingID').getAttribute('data-lens-intent')).toBe(intent);
    });
  });

  it('should receive item click events', () => {
    const onItemClick = jest.fn();
    const items: IListItem<any>[] = [
      {
        content: 'First Item',
      },
      {
        content: 'Second Item',
      },
    ];
    const { getByText } = render(<List items={items} testingID="testingID" onItemClick={onItemClick} />);

    fireEvent.click(getByText(items[1].content as string));

    expect(onItemClick).toHaveBeenCalled();

    expect(onItemClick.mock.calls[0][0]).toBe(items[1]);
  });

  it('should handle custom renderer', () => {
    const onItemClick = jest.fn();
    const items: IListItem<any>[] = [
      {
        content: 'First Item',
      },
      {
        content: 'Second Item',
      },
    ];

    const renderer = (item: IListItem, index) => <div key={index}>render-item-{index}</div>;

    const { getByText } = render(<List items={items} testingID="testingID" onItemClick={onItemClick} renderer={renderer} />);

    items.forEach((item, index) => {
      expect(getByText(`render-item-${index}`)).toBeInTheDocument();
    });
  });
});
