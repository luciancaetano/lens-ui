/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessageBox from './MessageBox';
import { IMessageBoxProps } from './MessageBox.types';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { Intents } from '../../../types';

export default {
  title: '2. Components/MessageBox',
  component: MessageBox,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof MessageBox>;

const Template: ComponentStory<typeof MessageBox> = (args) => <MessageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
  intent: 'info',
} as IMessageBoxProps;

export const _MessageBoxStripped = Template.bind({});
_MessageBoxStripped.args = {
  children: 'Hello world',
  intent: 'info',
  title: 'title',
  striped: true,
} as IMessageBoxProps;

export const _Timeout = Template.bind({});
_Timeout.args = {
  children: 'Hello world',
  intent: 'info',
  title: 'title',
  striped: true,
  timeout: 3000,
} as IMessageBoxProps;

export const AllIntents = (args) => Object.keys(Intents).map((intent: any) => (
  <Template intent={intent} {...args} />
));

AllIntents.args = {
  title: 'Title',
  children: 'Hello world',
};
