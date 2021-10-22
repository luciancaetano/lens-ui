import React, { useState } from 'react';

import Tabs from '../../src/components/elements/Tabs/Tabs';
import { TabsItem } from '../../src/components/elements/Tabs/Tabs.types';
import LensProvider from '../../src/components/providers/LensProvider/LensProvider';

export default {
  component: Tabs,
  title: 'Surfaces/Tabs',
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

const tabsItemsData:TabsItem[] = [
  {
    id: '1',
    title: 'Tab1',
  },
  {
    id: '2',
    title: 'Tab2',
  },
  {
    id: '3',
    title: 'Tab3',
  },
];

const renderRabsContentData = (tab: TabsItem | null) => (
  <>
    {tab?.id === '1' && (
      <div>
        <h1>Tab 1 content</h1>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tristique justo.
        Sed fermentum ante sed congue porttitor. Phasellus facilisis justo nisl, non tincidunt nunc varius eget.
        Vestibulum gravida suscipit ligula, sit amet vehicula nisl pellentesque ac. Sed vulputate, velit ut commodo cursus,
        enim felis vestibulum tellus, non consectetur nunc mi id quam. Proin neque mi, semper in sodales ac, ornare vel libero.
        Praesent elit lorem, eleifend nec malesuada sit amet, tincidunt in sem. Cras laoreet facilisis sodales. Suspendisse vitae
        felis suscipit, viverra lectus quis, rutrum mauris. Aenean molestie, ligula id aliquam pharetra, sem odio gravida leo,
        non aliquet ipsum tellus ut nulla. Aliquam porttitor ligula quis mauris ultrices, a posuere ex pulvinar.
      </div>
    )}
    {tab?.id === '2' && (
      <div>
        <h1>Tab 2 content</h1>

        Duis rhoncus lorem vel lacus pretium vehicula. Integer venenatis,
        purus et efficitur vulputate, diam massa consequat mi, nec sollicitudin nisi
        tortor et ante. Morbi pretium metus orci, ut hendrerit enim tincidunt eget.
        Suspendisse potenti. Praesent volutpat ex ac malesuada convallis. Sed urna justo,
        egestas id eros eu, suscipit vehicula ligula. Suspendisse nec feugiat leo. Suspendisse
        nisl velit, venenatis vel iaculis a, elementum a enim. Maecenas vehicula imperdiet efficitur. Etiam at lacinia sapien.

      </div>
    )}
    {tab?.id === '3' && (
      <div>
        <h1>Tab 3 content</h1>

        Donec id diam dolor. Curabitur id nisl et tortor rutrum facilisis id sit amet purus. Donec dictum nisl
        vitae turpis lobortis iaculis. Fusce sodales semper odio, sed vestibulum elit iaculis ullamcorper.
        Phasellus eget sapien hendrerit purus finibus faucibus sit amet accumsan eros. Praesent eget convallis arcu.
        Nunc consectetur fermentum ipsum, a convallis dolor ullamcorper eu. Phasellus mi justo, venenatis eget rutrum
        quis, commodo quis massa. Aliquam finibus, elit nec vehicula eleifend, metus sapien accumsan ipsum, at lacinia
        urna tellus vitae nulla. Etiam in egestas felis, a egestas ex. Mauris at justo nibh. In vel erat leo. In volutpat
        ac metus ac aliquam. Quisque gravida diam sed justo vestibulum molestie. Proin viverra, felis vitae tincidunt sodales,
        neque mi lacinia est, at luctus diam nunc et nibh. Nam non nunc enim.
      </div>
    )}
  </>
);

export const _TabsControlled = () => {
  const [activeTab, setActiveTab] = useState(tabsItemsData[0].id);

  return (
    <Tabs tabs={tabsItemsData} activeTab={activeTab} onChange={(id) => setActiveTab(id)}>
      {renderRabsContentData}
    </Tabs>
  );
};

export const _TabsUncontrolled = () => (
  <Tabs tabs={tabsItemsData} initialActiveTab="1">
    {renderRabsContentData}
  </Tabs>
);

export const _TabsVertical = () => (
  <Tabs tabs={tabsItemsData} initialActiveTab="1" vertical>
    {renderRabsContentData}
  </Tabs>
);
