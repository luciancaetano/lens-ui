import React, { useState } from 'react';
import { LensProvider, RadioGroup } from '../../src/index';

export default {
  component: RadioGroup,
  title: 'Inputs/RadioGroup',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <LensProvider>
    <RadioGroup
      name="input"
      options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
      defaultValue="2"
    />
  </LensProvider>
);

export const Controlled = () => {
  const [state, setState] = useState('');

  return (
    <LensProvider>
      <div>Selected Option is {state} </div>
      <RadioGroup
        name="input"
        options={[
          { label: 'Option1', value: 1 },
          { label: 'Option2', value: '2' },
          { label: 'Option3', value: '3' },
        ]}
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </LensProvider>
  );
};
