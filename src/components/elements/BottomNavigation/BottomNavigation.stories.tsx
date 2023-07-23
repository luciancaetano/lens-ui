import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import BottomNavigation from './index';
import Icon from '../Icon/Icon';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

const meta: Meta<typeof BottomNavigation> = {
  component: BottomNavigation,
  title: "Elements/BottomNavigation",
};

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

export const _BottomNavigation: Story = {
  args: {

  },
  render: () => (
    <BottomNavigation>
      <BottomNavigation.Action id="recents" icon={<Icon name="MdRestore" />}>Recents</BottomNavigation.Action>
      <BottomNavigation.Action id="favorites" icon={<Icon name="MdFavorite" />}>Favorites</BottomNavigation.Action>
      <BottomNavigation.Action id="nearby" icon={<Icon name="MdEditLocation" />}>Nearby</BottomNavigation.Action>
    </BottomNavigation>
  ),
};

export const DarkTheme: Story = {
  args: {

  },
  render: () => (
    <ThemeProvider theme="dark">
        <BottomNavigation>
            <BottomNavigation.Action id="recents" icon={<Icon name="MdRestore" />}>Recents</BottomNavigation.Action>
            <BottomNavigation.Action id="favorites" icon={<Icon name="MdFavorite" />}>Favorites</BottomNavigation.Action>
            <BottomNavigation.Action id="nearby" icon={<Icon name="MdEditLocation" />}>Nearby</BottomNavigation.Action>
        </BottomNavigation>
    </ThemeProvider>
  ),
};