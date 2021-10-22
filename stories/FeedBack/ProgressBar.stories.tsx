import React from 'react';
import { LensProvider, ProgressBar } from '../../src/index';

export default {
  component: ProgressBar,
  title: 'Feedback/ProgressBar',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const Basic = () => (
  <LensProvider>
    <ProgressBar progress={25} intent="primary" />
  </LensProvider>
);

export const WithLabel = () => (
  <LensProvider>
    <ProgressBar withLabel progress={25} intent="primary" />
  </LensProvider>
);

export const Size = () => (
  <LensProvider>
    <ProgressBar size="normal" progress={25} intent="primary" />
    <br />
    <ProgressBar size="medium" progress={25} intent="primary" />
    <br />
    <ProgressBar size="big" progress={25} intent="primary" />
    <br />
    <ProgressBar size="tiny" progress={25} intent="primary" />
  </LensProvider>
);

export const Striped = () => (
  <LensProvider>
    <ProgressBar striped progress={25} intent="primary" />
  </LensProvider>
);
