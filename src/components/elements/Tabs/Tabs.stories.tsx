/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from './Tabs';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { ITabsItem } from './Tabs.types';

export default {
  title: '2. Components/Tabs',
  component: Tabs,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Tabs>;

const renderRabsContentData = (tab: ITabsItem | null) => (
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

const TabsTemplate: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} />
);

const tabsItemsData:ITabsItem[] = [
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

export const _TabsControlled = (args) => {
  const [activeTab, setActiveTab] = useState(tabsItemsData[0].id);

  return (
    <TabsTemplate
      tabs={tabsItemsData}
      {...args}
      activeTab={activeTab}
      onChange={(id) => setActiveTab(id)}
    >
      {renderRabsContentData}
    </TabsTemplate>
  );
};

export const _TabsUncontrolled = TabsTemplate.bind({});
_TabsUncontrolled.args = {
  tabs: tabsItemsData,
  initialActiveTab: '1',
  children: renderRabsContentData,
};

export const _TabsVertical = TabsTemplate.bind({});
_TabsVertical.args = {
  tabs: tabsItemsData,
  initialActiveTab: '1',
  vertical: true,
  children: renderRabsContentData,
};
