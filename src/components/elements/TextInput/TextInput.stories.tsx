/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import Icon from '../Icon/Icon';

export default {
  title: '2. Components/TextInput',
  component: TextInput,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof TextInput>;

const TextInputTemplate: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Uncontrolled = TextInputTemplate.bind({});
Uncontrolled.args = {
  name: 'input',
  defaultValue: 'Hello World',
};

export const Controlled = () => {
  const [state, setState] = useState('');

  return (
    <>
      <div>Value is {state} </div>
      <TextInputTemplate
        name="input"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </>
  );
};

export const Search = TextInputTemplate.bind({});
Search.args = {
  name: 'input',
  type: 'search',
  defaultValue: 'Hello World',
};

export const WithIcon = TextInputTemplate.bind({});
WithIcon.args = {
  name: 'input',
  prefix: <Icon name="FaKey" />,
  suffix: <Icon name="MdSend" />,
  defaultValue: 'Hello World',
};

export const TextArea = TextInputTemplate.bind({});
TextArea.args = {
  name: 'input',
  defaultValue: 'Hello World',
  multiline: true,
};
