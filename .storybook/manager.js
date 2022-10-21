import { addons } from '@storybook/addons';
import theme from './theme';
import './titleAddon';
import { addParameters } from '@storybook/react';

addons.setConfig({
  theme,
});