/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = function (args) {
  return <Breadcrumbs {...args}>Hello World</Breadcrumbs>;
};

export const Default = Template.bind({});

Default.args = {
  history: [
    { title: 'Home' },
    { title: 'Profile' },
    { title: 'Settings' },
  ],
};
