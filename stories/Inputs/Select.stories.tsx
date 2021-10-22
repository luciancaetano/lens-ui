import React, { useState } from 'react';
import {
  LensProvider, Select,
} from '../../src/index';

export default {
  component: Select,
  title: 'Inputs/Select',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <LensProvider>
    <Select
      name="input"
      options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
      defaultValue="2"
    />
  </LensProvider>
);

export const Controlled = () => {
  const [state, setState] = useState('2');

  return (
    <LensProvider>
      <div>Selected Option is {state} </div>
      <Select
        name="input"
        options={[
          { label: 'Option1', value: '1' },
          { label: 'Option2', value: '2' },
          { label: 'Option3', value: '3' },
        ]}
        onChange={(v) => setState(v as string)}
        value={state}
      />
    </LensProvider>
  );
};

export const MultiUncontrolled = () => (
  <LensProvider>
    <Select
      name="input"
      isMulti
      options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
      defaultValue={['1', '3']}
    />
  </LensProvider>
);

export const MultiControlled = () => {
  const [state, setState] = useState(['2']);

  return (
    <LensProvider>
      <div>Selected Option is {state.join(', ')} </div>
      <Select
        name="input"
        isMulti
        options={[
          { label: 'Option1', value: '1' },
          { label: 'Option2', value: '2' },
          { label: 'Option3', value: '3' },
        ]}
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </LensProvider>
  );
};

export const Grouped = () => {
  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    textAlign: 'center',
  };

  const colourOptions = [
    {
      value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true,
    },
    {
      value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true,
    },
  ];

  const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
  ];

  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles as any}>{data.options.length}</span>
    </div>
  );
  return (
    <LensProvider>
      <Select
        name="input"
        options={[
          {
            label: 'Colours',
            options: colourOptions,
          },
          {
            label: 'Flavours',
            options: flavourOptions,
          },
        ]}
        formatGroupLabel={formatGroupLabel}
      />
    </LensProvider>
  );
};
