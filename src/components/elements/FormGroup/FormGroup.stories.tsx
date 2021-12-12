/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormGroup from './FormGroup';
import Divider from '../Divider/Divider';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/FormGroup',
  component: FormGroup,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = function (args) {
  return <FormGroup {...args} />;
};

export var _FormGroup = function (args) {
  return (
    <Template
      {...args}
      label="Input Label"
      helperText="Helper text"
      helperTextIntent="danger"
      required
      labelFor="inputId"
      inline
    >
      <input type="text" id="inputId" />
    </Template>
  );
};

export var UsingDivider = function (args) {
  return (
    <>
      <Template
        {...args}
        label="Input 1"
      >
        <input type="text" />
      </Template>
      <Divider>Divider title</Divider>

      <Template
        {...args}
        label="Input 1"
      >
        <input type="text" />
      </Template>
    </>
  );
};
