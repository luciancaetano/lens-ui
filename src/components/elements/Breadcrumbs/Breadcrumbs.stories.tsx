import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumbs from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "Elements/Breadcrumbs",
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const _Breadcrumbs: Story = {
  args: {
    history:[
        {
            title: 'Home'
        },
        {
            title: 'Profile'
        },
        {
            title: 'Settings'
        }
    ],
    onItemClick:function noRefCheck(){}
  },
};