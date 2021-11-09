/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';
import FormGroup from '../FormGroup/FormGroup';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Switch',
  component: Switch,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Switch>;

const SwitchTemplate: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);

export const Uncontrolled = (args) => (
  <FormGroup>
    <SwitchTemplate {...args} label="Night Mode" />
  </FormGroup>
);

export const Controlled = (args) => {
  const [state, setState] = useState(false);

  return (
    <>
      <div>Item is chacked: {JSON.stringify(state)}</div>
      <FormGroup>
        <SwitchTemplate label="Night Mode" {...args} checked={state} onChange={(v) => setState(v)} />
      </FormGroup>
    </>
  );
};
