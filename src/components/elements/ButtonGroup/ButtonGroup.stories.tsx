/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/ButtonGroup',
  component: ButtonGroup,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = function (args) {
  return (
    <div>
      <ButtonGroup {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  vertical: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};
