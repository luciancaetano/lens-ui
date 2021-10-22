import React from 'react';
import { Layout, LensProvider } from '../../src/index';

const { AppLayout, Content, Sidebar } = Layout;

export default {
  component: Layout.AppLayout,
  title: 'Layout/Layout',
  excludeStories: /.*Data$/,
};

export const _AppLayout = () => (
  <LensProvider>
    <AppLayout>
      <div>
        App Header
      </div>
      <Content>
        <div>
          Line 1
        </div>
        <div>
          Line 2
        </div>
      </Content>
      <div>
        AppFooter
      </div>
    </AppLayout>
  </LensProvider>
);

export const _Sidebar = () => (
  <LensProvider>
    <AppLayout>
      <div>
        App Header
      </div>
      <Content layout="horizontal">
        <Sidebar>
          Side content
          <div>
            Line 1
          </div>
          <div>
            Line 2
          </div>
        </Sidebar>
        <Content>
          <div>
            Line 1
          </div>
          <div>
            Line 2
          </div>
        </Content>
      </Content>
      <div>
        AppFooter
      </div>
    </AppLayout>
  </LensProvider>
);
