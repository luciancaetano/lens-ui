import React from 'react';

import Breadcrumbs from '../../src/components/elements/Breadcrumbs/Breadcrumbs';
import LensProvider from '../../src/components/providers/LensProvider/LensProvider';

export default {
  component: Breadcrumbs,
  title: 'Feedback/Breadcrumbs',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const _Breadcrumbs = () => (
  <LensProvider>
    <Breadcrumbs history={[{ title: 'Home', url: '#home' }, { title: 'Settings' }, { title: 'User', url: '#user' }, { title: 'New' }]} />
  </LensProvider>
);
