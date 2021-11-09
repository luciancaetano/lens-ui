/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectCmp from './Select';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Select',
  component: SelectCmp,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof SelectCmp>;

const SelectTemplate: ComponentStory<typeof SelectCmp> = (args) => (
  <SelectCmp {...args} />
);

export const Uncontrolled = (args) => (
  <SelectTemplate
    name="input"
    options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
    defaultValue="2"
    {...args}
  />
);

export const Controlled = (args) => {
  const [state, setState] = useState('');

  return (
    <>
      <div>Selected Option is {state} </div>
      <SelectTemplate
        name="input"
        options={[
          { label: 'Option1', value: 1 },
          { label: 'Option2', value: '2' },
          { label: 'Option3', value: '3' },
        ]}
        {...args}
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </>
  );
};
