import React, { useState } from 'react';
import { LensProvider, MaskedInput } from '../../src/index';

export default {
  component: MaskedInput,
  title: 'Inputs/MaskedInput',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <LensProvider>
    <MaskedInput
      name="input"
      mask="99/99/9999"
      defaultValue="03/03/1991"
    />

    <br />

    <MaskedInput
      name="input"
      isError
      mask="99/99/9999"
      defaultValue="03/03/1991"
    />
  </LensProvider>
);

export const Controlled = () => {
  const [state, setState] = useState('03/03/1991');

  return (
    <LensProvider>
      <div>Value is {state} </div>
      <MaskedInput
        name="input"
        onChange={(v) => setState(v as any)}
        mask="99/99/9999"
        value={state}
      />
    </LensProvider>
  );
};
