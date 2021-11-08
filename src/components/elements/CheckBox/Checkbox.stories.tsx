import React, { useState } from 'react';
import {
  LensProvider, CheckBox, FormGroup,
} from '../../src/index';

export default {
  component: CheckBox,
  title: 'Inputs/Checkbox',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <LensProvider>
    <FormGroup>
      <CheckBox label="HTML Label" />
    </FormGroup>
  </LensProvider>
);

export const Controlled = () => {
  const [state, setState] = useState(false);

  return (
    <LensProvider>
      <div>Item is chacked: {JSON.stringify(state)}</div>
      <FormGroup>
        <CheckBox label="HTML Label" checked={state} onChange={(v) => setState(v)} />
      </FormGroup>
    </LensProvider>
  );
};
