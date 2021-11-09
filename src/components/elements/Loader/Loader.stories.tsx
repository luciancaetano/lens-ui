/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';
import Icon from '../Icon/Icon';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Loader',
  component: Loader,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Loader>;

const LoaderTemplate: ComponentStory<typeof Loader> = (args) => (
  <Loader {...args}>
    <Icon name="BsCamera" size={30} />
  </Loader>
);

export const _Loader = LoaderTemplate.bind({});
_Loader.args = {
  type: 'eclipse',
  intent: 'primary',
  size: 5,
};
