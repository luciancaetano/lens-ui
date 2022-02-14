/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './index';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Layout',
  component: Layout.AppLayout,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Layout.AppLayout>;

const AppLayout: ComponentStory<typeof Layout.AppLayout> = (args) => <Layout.AppLayout {...args} />;

export const _AppLayout = (args) => (
  <LensProvider>
    <AppLayout {...args}>
      <div>
        App Header
      </div>
      <Layout.Content>
        <div>
          Line 1
        </div>
        <div>
          Line 2
        </div>
      </Layout.Content>
      <div>
        AppFooter
      </div>
    </AppLayout>
  </LensProvider>
);

export const _Sidebar = (args) => (
  <LensProvider>
    <AppLayout {...args}>
      <div>
        App Header
      </div>
      <Layout.Content layout="horizontal">
        <Layout.Sidebar>
          Side content
          <div>
            Line 1
          </div>
          <div>
            Line 2
          </div>
        </Layout.Sidebar>
        <Layout.Content>
          <div>
            Line 1
          </div>
          <div>
            Line 2
          </div>
        </Layout.Content>
      </Layout.Content>
      <div>
        AppFooter
      </div>
    </AppLayout>
  </LensProvider>
);
