import React, { useState } from 'react';
import {
  LensProvider, FormGroup, Switch,
} from '../../src/index';

export default {
  component: Switch,
  title: 'Inputs/Switch',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <LensProvider>
    <FormGroup>
      <Switch label="Night Mode" />
    </FormGroup>
  </LensProvider>
);

export const Controlled = () => {
  const [state, setState] = useState(false);

  return (
    <LensProvider>
      <div>Item is chacked: {JSON.stringify(state)}</div>
      <FormGroup>
        <Switch label="Night Mode" checked={state} onChange={(v) => setState(v)} />
      </FormGroup>
    </LensProvider>
  );
};
