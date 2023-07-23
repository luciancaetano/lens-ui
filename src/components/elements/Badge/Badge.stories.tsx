import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Elements/Badge",
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const _Badge: Story = {
  args: {
    type: 'solid',
    intent: 'primary',
    children: 'Badge',
  },
};

export const Solid: Story = {
  render: () => (
    <>
      <Badge type="solid" intent="primary">Hello World</Badge>
      <Badge type="solid" intent="secondary">Hello World</Badge>
      <Badge type="solid" intent="success">Hello World</Badge>
      <Badge type="solid" intent="danger">Danger</Badge>
      <Badge type="solid" intent="info">Info</Badge>
      <Badge type="solid" intent="warning">Warning</Badge>
    </>
  ),
};

export const Outlined: Story = {
  render: () => (
    <>
      <Badge type="outlined" intent="primary">Hello World</Badge>
      <Badge type="outlined" intent="secondary">Hello World</Badge>
      <Badge type="outlined" intent="success">Hello World</Badge>
      <Badge type="outlined" intent="danger">Danger</Badge>
      <Badge type="outlined" intent="info">Info</Badge>
      <Badge type="outlined" intent="warning">Warning</Badge>
    </>
  ),
};

export const Subtle: Story = {
  render: () => (
    <>
      <Badge type="subtle" intent="primary">Hello World</Badge>
      <Badge type="subtle" intent="secondary">Hello World</Badge>
      <Badge type="subtle" intent="success">Hello World</Badge>
      <Badge type="subtle" intent="danger">Danger</Badge>
      <Badge type="subtle" intent="info">Info</Badge>
      <Badge type="subtle" intent="warning">Warning</Badge>
    </>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider theme="dark">
      <Badge type="solid" intent="primary">Hello World</Badge>
      <Badge type="solid" intent="secondary">Hello World</Badge>
      <Badge type="solid" intent="success">Hello World</Badge>
      <Badge type="solid" intent="danger">Danger</Badge>
      <Badge type="solid" intent="info">Info</Badge>
      <Badge type="solid" intent="warning">Warning</Badge>
    </ThemeProvider>
  ),
};
