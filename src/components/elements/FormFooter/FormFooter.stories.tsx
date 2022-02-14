/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormFooter from './FormFooter';
import { IFormFooterProps } from './FormFooter.types';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/FormFooter',
  component: FormFooter,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof FormFooter>;

const Template: ComponentStory<typeof FormFooter> = (args) => (
  <div style={{ maxWidth: 500 }}>
    <FormFooter {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  onSave: () => {},
  onCancel: () => {},
  onDelete: () => {},
  state: 'ready',
} as IFormFooterProps;
