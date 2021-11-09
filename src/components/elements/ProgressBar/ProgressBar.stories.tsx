/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBarCmp from './ProgressBar';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/ProgressBar',
  component: ProgressBarCmp,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof ProgressBar>;

const ProgressBarTemplate: ComponentStory<typeof ProgressBarCmp> = (args) => (
  <ProgressBarCmp {...args} />
);

export const ProgressBar = ProgressBarTemplate.bind({});
ProgressBar.args = {
  progress: 30,
};
