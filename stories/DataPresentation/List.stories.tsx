import React from 'react';

import List from '../../src/components/elements/List/List';
import { ListItem } from '../../src/components/elements/List/List.types';
import LensProvider from '../../src/components/providers/LensProvider/LensProvider';
import { IntentEnum } from '../../src/types';

export default {
  component: List,
  title: 'Data Presentation/List',
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

const itemsData = (intent: any): ListItem[] => [
  { content: intent || 'Item 1' },
  { content: 'Heading', isHeading: true },
  { content: intent || 'Item 2' },
  { content: intent || 'Item 3' },
  { content: intent || 'Item 4' },
];

export const _List = () => (
  <LensProvider>
    <List items={itemsData(null)} activeIndex={2} />
  </LensProvider>
);

export const _ListIntents = () => (
  <LensProvider>
    {Object.keys(IntentEnum).map((intent) => (
      <>
        <List items={itemsData(intent)} activeIndex={2} intent={intent as any} />
        <br />
      </>
    ))}
  </LensProvider>
);
