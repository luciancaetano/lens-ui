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

const SelectTemplate: ComponentStory<typeof SelectCmp> = function (args) {
  return <SelectCmp {...args} />;
};

export var Uncontrolled = function (args) {
  return (
    <SelectTemplate
      name="input"
      options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
      defaultValue="2"
      {...args}
    />
  );
};

export var Controlled = function (args) {
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
