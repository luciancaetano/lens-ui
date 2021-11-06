/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
} as ComponentMeta<typeof Button>;

const Separator = () => <span style={{ paddingLeft: 5, paddingRight: 5 } as any} />;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello World</Button>;
const TemplateIntents: ComponentStory<typeof Button> = (args) => (
  <>
    <Button intent="primary" {...args}>primary</Button>
    <Separator />
    <Button intent="secondary" {...args}>secondary</Button>
    <Separator />
    <Button intent="success" {...args}>success</Button>
    <Separator />
    <Button intent="info" {...args}>info</Button>
    <Separator />
    <Button intent="warning" {...args}>warning</Button>
    <Separator />
    <Button intent="danger" {...args}>danger</Button>
    <Separator />
    <Button intent="dark" {...args}>dark</Button>
    <Separator />
    <Button intent="light" {...args}>light</Button>
    <Separator />
  </>
);

const TemplateIntentsAppearance: ComponentStory<typeof Button> = (args) => (
  <>
    <Button appearance="default" {...args}>default</Button>
    <Separator />
    <Button appearance="minimal" {...args}>minimal</Button>
    <Separator />
    <Button appearance="outlined" {...args}>outlined</Button>
  </>
);

export const Default = Template.bind({});

Default.args = {
  intent: 'primary',
};

export const Intents = TemplateIntents.bind({});

export const Appearance = TemplateIntentsAppearance.bind({});
