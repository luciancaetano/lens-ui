/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroupCmp from './RadioGroup';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/RadioGroup',
  component: RadioGroupCmp,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof RadioGroupCmp>;

const RadioGroupTemplate: ComponentStory<typeof RadioGroupCmp> = function (args) {
  return <RadioGroupCmp {...args} />;
};

export var Uncontrolled = function (args) {
  return (
    <RadioGroupTemplate
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
      <RadioGroupTemplate
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
