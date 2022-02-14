/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './Badge';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Badge',
  component: Badge,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Badge>;

const TemplateDefault: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>Hello World!</Badge>
);

const Template: ComponentStory<typeof Badge> = (args) => (
  <>
    <Badge type={args.type} intent="primary">primary</Badge>
    <Badge type={args.type} intent="secondary">secondary</Badge>
    <Badge type={args.type} intent="info">info</Badge>
    <Badge type={args.type} intent="success">success</Badge>
    <Badge type={args.type} intent="warning">warning</Badge>
    <Badge type={args.type} intent="danger">danger</Badge>
  </>
);

export const Default = TemplateDefault.bind({});

Default.args = {
  type: 'solid',
  intent: 'primary',
};

export const Solid = Template.bind({});
Solid.args = {
  type: 'solid',
  intent: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: 'outlined',
  intent: 'primary',
};

export const Subtle = Template.bind({});
Subtle.args = {
  type: 'subtle',
  intent: 'primary',
};
