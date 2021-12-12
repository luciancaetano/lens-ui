import React, { useState } from 'react';
/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckBox from './CheckBox';
import FormGroup from '../FormGroup/FormGroup';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = function (args) {
  return <CheckBox {...args} />;
};

export var Uncontrolled = function (args) {
  return (
    <FormGroup>
      <Template label="HTML Label" {...args} />
    </FormGroup>
  );
};

export var Controlled = function (args) {
  const [state, setState] = useState(false);

  return (
    <>

      <div>Item is chacked: {JSON.stringify(state)}</div>
      <FormGroup>
        <Template label="HTML Label" checked={state} onChange={(v) => setState(v)} {...args} />
      </FormGroup>
    </>
  );
};
