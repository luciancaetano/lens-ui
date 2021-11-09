/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import { IIconProps } from './Icon.types';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Icon',
  component: Icon,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  name: 'BsAlarm',
} as IIconProps;
