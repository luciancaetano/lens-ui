/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import {
  LensProvider,
} from '../../src/components/providers/index';

import DropDownMenu from '../../src/components/elements/DropDownMenu/DropDownMenu';
import Icon from '../../src/components/elements/Icon/Icon';

import {
  IDropdownItemType,
} from '../../src/components/elements/DropDownMenu/DropDownMenu.types';

export default {
  component: DropDownMenu,
  title: 'Surfaces/DropDownMenu',
  excludeStories: /.*Data$/,
};

const items: IDropdownItemType[] = [
  {
    label: <><Icon name="BsGearFill" />&nbsp;Settings</>,
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
    label: <><Icon name="BsPower" />&nbsp;Logout</>,
    id: 'logout',
  },
];

export const _DropDownMenu = () => (
  <LensProvider>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'end',
    }}
    >
      <div style={{ maxWidth: 180, display: 'flex' }}>
        <DropDownMenu
          activeId="sp"
          items={items}
          onItemClick={(id) => console.log(`clicked on item id ${id}`)}
        >
          Menu
        </DropDownMenu>
      </div>

    </div>
  </LensProvider>
);
