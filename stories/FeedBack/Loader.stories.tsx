import React from 'react';
import { LensProvider, Loader, Icon } from '../../src/index';

export default {
  component: Loader,
  title: 'Feedback/Loader',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const Eclipse = () => (
  <LensProvider>
    <Loader>
      <Icon name="BsCamera" size={30} fill="var(--lens-ui-intents-primary)" />
    </Loader>
  </LensProvider>
);

export const Spinner = () => (
  <LensProvider>
    <Loader type="spinner">
      <Icon name="BsCamera" size={20} fill="var(--lens-ui-intents-primary)" />
    </Loader>
  </LensProvider>
);

export const Oval = () => (
  <LensProvider>
    <Loader type="oval">
      <Icon name="BsCamera" size={30} fill="var(--lens-ui-intents-primary)" />
    </Loader>
  </LensProvider>
);

export const Intents = () => (
  <LensProvider>
    <div style={{ display: 'flex', paddingBottom: '30px' }}>
      <Loader size={3} type="eclipse" intent="primary">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-primary)" />
      </Loader>
      <Loader size={3} type="eclipse" intent="secondary">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-secondary)" />
      </Loader>
      <Loader size={3} type="eclipse" intent="success">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-success)" />
      </Loader>
      <Loader size={3} type="eclipse" intent="info">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-info)" />
      </Loader>
      <Loader size={3} type="eclipse" intent="warning">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-warning)" />
      </Loader>
      <Loader size={3} type="eclipse" intent="danger">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-danger)" />
      </Loader>
    </div>
    <div style={{ display: 'flex', paddingBottom: '30px' }}>
      <Loader size={3} type="oval" intent="primary">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-primary)" />
      </Loader>
      <Loader size={3} type="oval" intent="secondary">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-secondary)" />
      </Loader>
      <Loader size={3} type="oval" intent="success">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-success)" />
      </Loader>
      <Loader size={3} type="oval" intent="info">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-info)" />
      </Loader>
      <Loader size={3} type="oval" intent="warning">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-warning)" />
      </Loader>
      <Loader size={3} type="oval" intent="danger">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-danger)" />
      </Loader>
    </div>
    <div style={{ display: 'flex' }}>
      <Loader size={3} type="spinner" intent="primary">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-primary)" />
      </Loader>
      <Loader size={3} type="spinner" intent="secondary">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-secondary)" />
      </Loader>
      <Loader size={3} type="spinner" intent="success">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-success)" />
      </Loader>
      <Loader size={3} type="spinner" intent="info">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-info)" />
      </Loader>
      <Loader size={3} type="spinner" intent="warning">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-warning)" />
      </Loader>
      <Loader size={3} type="spinner" intent="danger">
        <Icon name="BsCamera" size={15} fill="var(--lens-ui-intents-danger)" />
      </Loader>
    </div>
  </LensProvider>
);
