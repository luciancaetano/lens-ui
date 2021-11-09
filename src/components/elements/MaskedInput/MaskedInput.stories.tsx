/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MaskedInput from './MaskedInput';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: 'Components/MaskedInput',
  component: MaskedInput,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
} as ComponentMeta<typeof MaskedInput>;

const MaskedInputTemplate: ComponentStory<typeof MaskedInput> = (args) => (
  <MaskedInput {...args} />
);

export const Uncontrolled = MaskedInputTemplate.bind({});

Uncontrolled.args = {
  name: 'input',
  mask: '99/99/9999',
  defaultValue: '03/03/1991',
};

export const Controlled = (args) => {
  const [state, setState] = useState('03/03/1991');

  return (
    <>
      <div>Value is {state} </div>
      <MaskedInputTemplate
        name="input"
        mask="99/99/9999"
        {...args}
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </>
  );
};
