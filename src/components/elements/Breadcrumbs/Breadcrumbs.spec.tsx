import React from 'react';

import { render } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';
import { IBreadcrumbLink } from './Breadcrumbs.types';
import LensProvider from '../../providers/LensProvider/LensProvider';

const links: IBreadcrumbLink[] = [
  { title: 'item_1', testingID: 'testingId_1' },
  { title: 'item_2', testingID: 'testingId_2', url: 'https://google.com.br' },
  { title: 'item_3', testingID: 'testingId_3' },
  { title: 'item_4', testingID: 'testingId_4' },
  { title: 'item_5', testingID: 'testingId_5', url: 'https://google.com.br' },
];

describe('<Breadcrumbs/>', () => {
  it('should render correct Breadcrumbs links', () => {
    const { getByTestId, rerender } = render(<LensProvider><Breadcrumbs history={links} /></LensProvider>);
    links.forEach((link) => {
      rerender(<LensProvider><Breadcrumbs history={links} /></LensProvider>);
      expect(getByTestId(String(link.testingID))).toBeInTheDocument();
    });
  });

  it('should render item[0, 2, 3] as an span', () => {
    const { getByTestId } = render(<LensProvider><Breadcrumbs history={links} /></LensProvider>);

    expect(getByTestId(String(links[0].testingID)).tagName).toBe('SPAN');
    expect(getByTestId(String(links[2].testingID)).tagName).toBe('SPAN');
    expect(getByTestId(String(links[3].testingID)).tagName).toBe('SPAN');
  });

  it('should render item[1] as an link', () => {
    const { getByTestId } = render(<LensProvider><Breadcrumbs history={links} /></LensProvider>);

    expect(getByTestId(String(links[1].testingID)).tagName).toBe('A');
  });

  it('should render last item as span', () => {
    const { getByTestId } = render(<LensProvider><Breadcrumbs history={links} /></LensProvider>);

    expect(getByTestId(String(links[4].testingID)).tagName).toBe('SPAN');
  });
});
