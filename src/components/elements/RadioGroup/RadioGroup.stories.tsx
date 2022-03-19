/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroupCmp from './RadioGroup';
import FormGroup from '../FormGroup/FormGroup';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/RadioGroup',
  component: RadioGroupCmp,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof RadioGroupCmp>;

const RadioGroupTemplate: ComponentStory<typeof RadioGroupCmp> = (args) => <RadioGroupCmp {...args} />;

export const Uncontrolled = (args) => (
  <RadioGroupTemplate
    name="input"
    options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
    defaultValue="2"
    {...args}
  />
);

export const Controlled = (args) => {
  const [state, setState] = useState(1);

  return (
    <FormGroup label={`Selected Option is ${state}`}>
      <RadioGroupTemplate
        name="input"
        options={[
          { label: 'Option1', value: 1 },
          { label: 'Option2', value: '2' },
          { label: 'Option3', value: '3' },
        ]}
        {...args}
        onChange={(_, v) => setState(v as any)}
        value={state}
      />
    </FormGroup>
  );
};
