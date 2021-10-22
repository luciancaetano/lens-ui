import React, { useState } from 'react';
import {
  LensProvider, MoneyInput,
} from '../../src/index';

export default {
  component: MoneyInput,
  title: 'Inputs/MoneyInput',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <LensProvider>
    <MoneyInput
      name="input"
      defaultValue={100}
    />

    <br />

    <MoneyInput
      name="input"
      isError
      defaultValue={100}
    />
  </LensProvider>
);

export const Controlled = () => {
  const [state, setState] = useState(0);

  return (
    <LensProvider>
      <div>Value is {state} </div>
      <MoneyInput
        name="input"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </LensProvider>
  );
};
