/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoneyInput from './MoneyInput';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/MoneyInput',
  component: MoneyInput,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof MoneyInput>;

const MoneyInputTemplate: ComponentStory<typeof MoneyInput> = (args) => (
  <MoneyInput {...args} />
);

export const Uncontrolled = MoneyInputTemplate.bind({});
Uncontrolled.args = {
  defaultValue: 100,
};

export const Controlled = (args) => {
  const [state, setState] = useState(0);

  return (
    <>
      <div>Value is {state} </div>
      <MoneyInputTemplate
        {...args}
        name="input"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </>
  );
};
