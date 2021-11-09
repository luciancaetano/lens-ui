/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropDownMenu from './DropDownMenu';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { IDropdownItemType } from './DropDownMenu.types';

export default {
  title: 'Components/DropDownMenu',
  component: DropDownMenu,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
} as ComponentMeta<typeof DropDownMenu>;

const TemplateDefault: ComponentStory<typeof DropDownMenu> = (args) => (
  <LensProvider>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'end',
    } as any}
    >
      <div style={{ maxWidth: 180, display: 'flex' } as any}>
        <DropDownMenu {...args}>
          Menu
        </DropDownMenu>
      </div>

    </div>
  </LensProvider>
);

const items: IDropdownItemType[] = [
  {
    label: 'Settings',
    id: 'settings',
  },
  {
    label: 'Context New York',
    id: 'ny',
  },
  {
    label: 'Context São Paulo',
    id: 'sp',
  },
  {
    label: 'Context None',
    id: 'none',
  },
  {
    divider: true,
  },
  {
    label: 'Logout',
    id: 'logout',
  },
];

export const _DropDownMenu = TemplateDefault.bind({});

_DropDownMenu.args = {
  activeId: 'sp',
  items,
  // eslint-disable-next-line no-console
  onItemClick: (id) => console.log(`clicked on item id ${id}`),
};
