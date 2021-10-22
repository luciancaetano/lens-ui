import React, { useState } from 'react';
import {
  LensProvider, TextInput,
} from '../../src/index';

export default {
  component: TextInput,
  title: 'Inputs/TextInput',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <LensProvider>
    <TextInput
      name="input"
      defaultValue="Hello World"
    />

    <br />

    <TextInput
      name="input"
      isError
      defaultValue="Hello World"
    />
  </LensProvider>
);

export const Controlled = () => {
  const [state, setState] = useState('');

  return (
    <LensProvider>
      <div>Value is {state} </div>
      <TextInput
        name="input"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </LensProvider>
  );
};

export const Search = () => (
  <LensProvider>
    <TextInput
      name="input"
      type="search"
      defaultValue="Hello World"
    />
  </LensProvider>
);

export const AsTextArea = () => (
  <LensProvider>
    <TextInput
      name="input"
      defaultValue="Hello World"
      type="textarea"
    />
  </LensProvider>
);
